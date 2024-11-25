data_uniform = {
    "id": null,
    "status": null,
    "manager": null,
    "owner": null,
    "list_mat": [
        {
            "data_type": "Apron",
              "data_no": null,
            "data_list": []
            
        },
        {
            "data_type": "Smock",
              "data_no": null,
            "data_list": []
        },
        {
            "data_type": "Shoe",
              "data_no": null,
            "data_list": []
        },
        {
            "data_type": "Cap",
            "data_no": null,
            "data_list": []
        }
    ],
    "remark": null,
    "user": null,
    "type": null
}

const allDataNoNull = data_uniform.list_mat.every(item => item.data_no === null);
console.log(allDataNoNull); // ถ้า true หมายความว่า "data_no" ทุกตัวเป็น null


