######################################################################################################################################
############################################            MC   BAPI   INITAIL               ############################################
######################################################################################################################################
@api_view(['POST'])
@transaction.atomic(using="op_doc_ctrl")
def mc_change_wopl_status(request):
    result = {}
    try:
        form_data = request.POST.get('data', '')
        json_data = json.loads(form_data)
        data_head = json_data[0]['data_head']
        data_user = json_data[0]['data_user']
        
        now = libs.get_today()
        
        
        conn = libs.connect_bapi('N-1')
        data = conn.call('BAPI_PRODORD_CREATE_FROM_PLORD', PLANNED_ORDER=data_head['wo_plan_order'], ORDER_TYPE=data_head['wo_plan_type'],ORDER_NUMBER='')
        conn.close()
        
        ##### Example  ข้อมูล data 
        # data =  {'PRODUCTION_ORDER': '211100406123', 'PROD_ORDER_TYPE': '2101', 'RETURN': {'TYPE': '', 'ID': '', 'NUMBER': '000', 'MESSAGE': '', 'LOG_NO': '', 'LOG_MSG_NO': '000000', 'MESSAGE_V1': '', 'MESSAGE_V2': '', 'MESSAGE_V3': '', 'MESSAGE_V4': '', 'PARAMETER': '', 'ROW': 0, 'FIELD': '', 'SYSTEM': ''}}
        
        if data['PRODUCTION_ORDER'] not in ('', None):
            ojb_main =MatCtrlAbpiLog.objects.using('op_doc_ctrl').create(
                # PLAN CREATE
                plant=data_user['plant'],
                create_date = now,
                create_by = data_user['user'],
                status = 100,
                
                fg_material_no=data_head['fg_material_no'],
                material_no=data_head['material_no'],
             
                # PLAN CREATE
                wo_order_no=data_head['plan_order_no'],
                wo_order_status='PLAN',
                wo_order_type=data_head['plan_type'],
                wo_order_qty=data_head['plan_qty'],
             
                # WO UPDATE
                wo_order_no_update =  data['PRODUCTION_ORDER'],
                wo_order_status_update = 'CRTD',
                wo_order_qty_update = data_head['plan_qty'],
           ) 
            obj_cmpkit = MatCtrlZrmm.objects.using('op_doc_ctrl').filter(
                plant=data_user['plant'],
                fg_sub_mat=data_head['material_no'],
                plan_order=data_head['plan_order_no']
                )
            obj_cmpkit.update(prod_order=data['PRODUCTION_ORDER'])
            ojb_main.save()
        ################### OLD ###################       
        # # เปิด Plan สร้าง Log ก่อน เก็บข้อมูล
        # obj_main, created_main = MatCtrlAbpiLog.objects.using('op_doc_ctrl').get_or_create(
        #       material_no=data_head['material_no'],
        #       wo_plan_order=data_head['wo_plan_order'],
        #       plant=data_user['plant']
        #     , defaults={
        #     'status': 1,
        #     'wo_crtd_status':0,
        #     'wo_plan_qty':data_head['wo_plan_qty'],
        #     'create_date': now,
        #     }) 
        
        
        # #  เรียก SAP PLANT TO CTRD เปลี่ยนสถานนะ
        # conn = libs.connect_bapi('N-1')
        # data = conn.call('BAPI_PRODORD_CREATE_FROM_PLORD', PLANNED_ORDER=data_head['wo_plan_order'], ORDER_TYPE=data_head['wo_plan_type'],ORDER_NUMBER='')
        # conn.close()
        # status = False
        
        
        # ####### PLAN มันจะโดน แปลงเช่น 0158028XXX -> 211100406123 #######
        # ##### Example  ข้อมูล data 
        # # data =  {'PRODUCTION_ORDER': '211100406123', 'PROD_ORDER_TYPE': '2101', 'RETURN': {'TYPE': '', 'ID': '', 'NUMBER': '000', 'MESSAGE': '', 'LOG_NO': '', 'LOG_MSG_NO': '000000', 'MESSAGE_V1': '', 'MESSAGE_V2': '', 'MESSAGE_V3': '', 'MESSAGE_V4': '', 'PARAMETER': '', 'ROW': 0, 'FIELD': '', 'SYSTEM': ''}}
        
        # obj_cmpkit = MatCtrlZrmm.objects.using('op_doc_ctrl').filter(
        #     plant=data_user['plant'],
        #     fg_sub_mat=data_head['material_no'],
        #     plan_order=data_head['wo_plan_order']
        # )

        # # Use the update method to set 'prod_order' for all objects in the queryset
        # obj_cmpkit.update(prod_order='211400010464',plan_order=None)
                
        # # ##### ได้ PRODUCTION_ORDER CODE นำมาอัพเดท log data และ ปรับ mat_ctrl_zrmm plan เป็น 
        # if data['PRODUCTION_ORDER'] not in ('', None):
        #     status = True
        #     obj_main.status = 2
        #     obj_main.wo_plan_type = data_head['wo_plan_type']
        #     obj_main.wo_plan_qty = data_head['wo_plan_qty']
        #     obj_main.wo_crtd_order = data['PRODUCTION_ORDER']
        #     obj_main.wo_crtd_status = 1
        #     obj_main.wo_plan_status = 1
        #     # obj_main.save()
        #     #######
        #     try:
        #         obj_prd = PrdPlanOrderNew.objects.using('plan').get(plant=data_user['plant'],material_no=data_head['material_no'],plan_order=data_head['wo_plan_order'])
        #         obj_prd.plan_order = data['PRODUCTION_ORDER'] 
        #         obj_prd.status = 'CRTD'
        #         obj_prd.save()
        #         obj_cmpkit = MatCtrlZrmm.objects.using('op_doc_ctrl').filter(
        #         plant=data_user['plant'],
        #         fg_sub_mat=data_head['material_no'],
        #         plan_order=data_head['wo_plan_order']
        #         )
        #         obj_cmpkit.update(prod_order=data['PRODUCTION_ORDER'] )
        #     except ObjectDoesNotExist:
        #         pass
        #     obj_main.save()

        
        result['data'] = data
        result['status'] = 2
        # print('FINISH')
    except Exception as e:
        print("{0} : {1}".format(sys.exc_info()[-1].tb_lineno, str(e)))
        transaction.set_rollback(True,using="op_doc_ctrl")
        result['message'] = str(e)
    return JsonResponse(result, safe=False)



@api_view(['POST'])
@transaction.atomic(using="op_doc_ctrl")
def mc_change_wocrtd_status(request):
    
    result = {}
    status = False
    try:
        form_data = request.POST.get('data', '')
        json_data = json.loads(form_data)
        data_head = json_data[0]['data_head']
        data_user = json_data[0]['data_user']
        now = libs.get_today()
    
        now_year = str(datetime.datetime.now().year)
        next_next = str(datetime.datetime.now().year + 1)
        
        conn = libs.connect_bapi('N-1')
        data_1 = conn.call('ZMES_GET_NON_WORKING_DAY', I_IDENT='TH', I_JAHR=now_year)
        data_2 = conn.call('ZMES_GET_NON_WORKING_DAY', I_IDENT='TH', I_JAHR=next_next)
        
        date_holiday = []
        for item in data_1['C_DATA']:
            if item['HOLIDAY_FLAG'] == 'X':
                date_holiday.append(item['DATUM'])

        for item in data_2['C_DATA']:
            if item['HOLIDAY_FLAG'] == 'X':
                date_holiday.append(item['DATUM'])

        # print(date_holiday)
        date_stop = [5, 6]  # ห้ามนับเสาร์ และอาทิตย์
        start_date = datetime.datetime.now()
        new_start = libs.count_sp_next_day(start_date, 2, date_holiday, date_stop)
        # print("New start date:", new_start)  # พิมพ์ new_start ได้เลย
        # 
        
        # เรียกใช้ฟังก์ชันอีกครั้งเพื่อนับเพิ่มอีก 3 วัน
        finish_date = datetime.datetime.strptime(new_start, '%Y-%m-%d')
        new_next = libs.count_sp_next_day(finish_date, 3, date_holiday, date_stop)
        # print("Next date after 3 days:", new_next)
        
        final_data = {}
        # T_MODE = 'N'
        # T_COMPLETE = 'X'
        # T_TEST = ''
        ##########################
        # T_MODE = 'E',
        # T_TEST = 'X',
        # T_COMPLETE = '',
        ########################## 
        T_MODE = 'E'
        T_TEST = ''
        T_COMPLETE = ''
        abpi_result = conn.call('ZBAPI_ZCPP0105',
          T_MODE = T_MODE, T_TEST = T_TEST,T_COMPLETE = T_COMPLETE
        #  T_MODE = 'E', T_TEST = '',T_COMPLETE = ''
          ,T_AUFNR =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': data_head['wo_order_no'],'HIGH': '' }]
        )
        conn.close()
        # print(abpi_result)
        # abpi_result = {'T_AUART': [], 'T_AUFNR': [{'SIGN': 'I', 'OPTION': 'EQ', 'LOW': '211100406123', 'HIGH': ''}], 'T_GSTRP': [], 'T_MATNR': [], 'T_OUTPUT': [{'KNO': '000001', 'WERKS': 'SVI2', 'AUFNR': '211100406123', 'MATNR': 'AAE908-209072LF', 'GAMNG': 22, 'GMEIN': 'EA', 'GLTRP': '20241009', 'GLUZP': '000000', 'GSTRP': '20241004', 'GSUZP': '000000', 'TERKZ': '3', 'FHORI': '302', 'SICHZ': '003', 'FREIZ': '002', 'OBJNR': 'OR211100406123', 'ORD_STATUS': 'Created', 'STATUS': 'Order number 211100406123 saved'}], 'T_WERKS': []}
        
        if abpi_result['T_OUTPUT'] and 'saved' in abpi_result['T_OUTPUT'][0]['STATUS']:
            ojb_main =MatCtrlAbpiLog.objects.using('op_doc_ctrl').create(
                # PLAN CREATE
                plant=data_user['plant'],
                create_date = now,
                create_by = data_user['user'],
                status = 100,
                
                fg_material_no=data_head['fg_material_no'],
                material_no=data_head['material_no'],
             
                # WO CREATE
                wo_order_no= data_head['wo_order_no'],
                wo_order_status='CRTD',
                # wo_order_type=data_head['plan_type'],
                wo_order_qty=data_head['wo_order_qty'],
             
                # WO UPDATE
                wo_order_no_update =  data_head['wo_order_no'],
                wo_order_status_update = 'REL',
                wo_order_qty_update =  data_head['wo_order_qty'],
            ) 
            ojb_main.save()
            status = True
            obj_prd = PrdPlanOrderNew.objects.using('plan').get(plant=data_user['plant'],material_no=data_head['material_no'],plan_order=data_head['wo_order_no'])
            obj_prd.status = 'REL'
            gstrp_date_str = abpi_result['T_OUTPUT'][0]['GSTRP']
            obj_prd.start_date = datetime.datetime.strptime(gstrp_date_str, '%Y%m%d').date()
            obj_prd.save()
            
        #############################################    
        # abpi_result = conn.call('ZBAPI_ZCPP0105',
        # # T_MODE = 'E',
        # # T_TEST = 'X',
        # # T_COMPLETE = '',
       
        # # T_WERKS =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW':' SVI2' ,'HIGH': '' }], 
        # # T_AUART =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': '2101','HIGH': '' }],
       
        # # T_MATNR =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'AAE908-223160LF','HIGH': '' }],
        # # T_GSTRP =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': '30.09.2024','HIGH': '' }],
        # )
        
        #############################################
        # T_MODE = 'E'
        # T_COMPLETE = ''
        # T_TEST = ''
        # # T_TEST = 'X' # TEST
        # if data_head['sel_cal_kit'] == False:
        #     T_MODE = 'N'
        #     T_COMPLETE = 'X'
        #############################################
        
        # T_MODE = 'N'
        # T_COMPLETE = 'X'
        # T_TEST = ''
              
        # T_MODE = 'E'
        # T_COMPLETE = ''
        # T_TEST = ''
            
        
        # สร้าง LOG กรณีไม่มี หรือ save บันทึก ก็กรณีมี
        # obj_main, created_main = MatCtrlAbpiLog.objects.using('op_doc_ctrl').update_or_create(
        #     material_no=data_head['material_no'],
        #     wo_crtd_order=data_head['wo_crtd_order'],
        #     plant=data_user['plant']
        #     ,defaults={
        #         'wo_crtd_status':0,
        #         'wo_crtd_qty':data_head['wo_crtd_qty']
        #     }) 
        # if created_main:
        #     obj_main.create_date = now
        #     obj_main.status = 3
        #     # obj_main.save()
        # else:
        #     obj_main.status = 3
        #     # obj_main.save()
        
        
        
        # # SAP Update ข้อมูล WO CRTD TO REL
        # abpi_result = conn.call('ZBAPI_ZCPP0105',
        # T_MODE = T_MODE, T_TEST = T_TEST,T_COMPLETE = T_COMPLETE
        # , T_AUFNR =  [{ 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': data_head['wo_crtd_order'],'HIGH': '' }]
        # )
        # conn.close()
        
        
        # # ปรับ พวก CTRD ให้ เป็น REL
        # if abpi_result['T_OUTPUT'] and 'saved' in abpi_result['T_OUTPUT'][0]['STATUS']:
        #     final_data = { 'status':3 }
        #     obj_main.wo_crtd_status = 1
        #     try:
        #         obj_prd = PrdPlanOrderNew.objects.using('plan').get(plant=data_user['plant'],material_no=data_head['material_no'],plan_order=data_head['wo_crtd_order'])
        #         obj_prd.status = 'REL'
                
        #         gstrp_date_str = abpi_result['T_OUTPUT'][0]['GSTRP']
        #         obj_prd.start_date = datetime.datetime.strptime(gstrp_date_str, '%Y%m%d').date()
        #         obj_prd.save()
                
        #     except ObjectDoesNotExist:
        #         pass
        # obj_main.save()
        
        # print(abpi_result)
        result['status'] = status
        result['data'] = final_data
        print('FINISH')
    except Exception as e:
        print("{0} : {1}".format(sys.exc_info()[-1].tb_lineno, str(e)))
        transaction.set_rollback(True,using="op_doc_ctrl")
        result['message'] = str(e)
    return JsonResponse(result, safe=False)


@api_view(['POST'])
@transaction.atomic(using="op_doc_ctrl")
def mc_change_worel_zpp(request):
    
    result = {}
    status = False
    try:
        form_data = request.POST.get('data', '')
        json_data = json.loads(form_data)
        data_head = json_data[0]['data_head']
        data_user = json_data[0]['data_user']
        now = libs.get_today()

        abpi_result = None
        print(data_head)
        conn = libs.connect_bapi('N-1')
        abpi_result = conn.call('ZPP_CHANGEORDER', ORDER_NUMBER= data_head['wo_order_no'], QTY=data_head['wo_order_post_qty'])
        conn.close()
        print(abpi_result)
        # abpi_result = {'fg_material_no': 'AAE908-207010ALF', 'material_no': 'AAE908-207010ALF'
        #                , 'plan_type': None, 'plan_order_no': None, 'plan_order_status': None
        #                , 'plan_qty': None, 'wo_order_no': '211100405010', 'wo_order_status': None
        #                , 'wo_order_qty': 2100, 'wo_order_post_qty': 2000, 'cal_kit': '0 %', 'sel_cal_kit': False, 'message': None}  
        
        # {'BAPI_MSG': 'Updated successful'}
        if 'Updated successful' in abpi_result['BAPI_MSG']:
            ojb_main =MatCtrlAbpiLog.objects.using('op_doc_ctrl').create(
                # PLAN CREATE
                plant=data_user['plant'],
                create_date = now,
                create_by = data_user['user'],
                status = 100,
                
                fg_material_no=data_head['fg_material_no'],
                material_no=data_head['material_no'],
             
                # WO CREATE
                wo_order_no= data_head['wo_order_no'],
                wo_order_status='REL',
                # wo_order_type=data_head['plan_type'],
                wo_order_qty=data_head['wo_order_qty'],
             
                # WO UPDATE
                wo_order_no_update =  data_head['wo_order_no'],
                wo_order_status_update = 'REL',
                wo_order_qty_update =  data_head['wo_order_post_qty'],
            ) 
            ojb_main.save()
            status = True
            # obj_prd = PrdPlanOrderNew.objects.using('plan').get(plant=data_user['plant'],material_no=data_head['material_no'],plan_order=data_head['wo_order_no'])
            # obj_prd.save()

        result['status'] = status
        # result['data'] = final_data
        print('FINISH AA')
    except Exception as e:
        print("{0} : {1}".format(sys.exc_info()[-1].tb_lineno, str(e)))
        transaction.set_rollback(True,using="op_doc_ctrl")
        result['message'] = str(e)
    return JsonResponse(result, safe=False)
######################################################################################################################################
############################################            MC   BAPI   END               ################################################
######################################################################################################################################

