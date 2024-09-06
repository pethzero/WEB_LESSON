from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.response import Response
import sys

@api_view(['POST'])
def run_mc_submit(request):
    try:
        # ใช้ transaction.atomic เพื่อจัดการธุรกรรมของ DATABASE1
        with transaction.atomic(using='A'):
            # โค้ดที่เกี่ยวข้องกับ DATABASE1
            DATABASE1.objects.using('A').create(...)

            # ใช้ transaction.atomic เพื่อจัดการธุรกรรมของ DATABASE2
            with transaction.atomic(using='B'):
                # โค้ดที่เกี่ยวข้องกับ DATABASE2
                DATABASE2.objects.using('B').create(...)

    except Exception as e:
        print("{0} : {1}".format(sys.exc_info()[-1].tb_lineno, str(e)))
        return Response({"status": "error", "message": str(e)}, status=500)

    return Response({"status": "success"})
