import {OrderInData, OrderOutData} from "../ui/OrderForm/type";
import $api from "../../../app/config/axios";



export const sendFormData = async (data: OrderInData): Promise<OrderOutData> => {
    const requestData = new URLSearchParams({
        ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
        MethodName: "OSSale",
        Id: data.Id,
        TableName: data.TableName,
        PrimaryKey: data.PrimaryKey,
        Price: data.Price,
        Summa: data.Summa,
        ClientName: data.ClientName,
        Phone: data.Phone,
        Email: data.Email,
        PaymentTypeId: '2',
        UseDelivery: '0',
    }).toString();
    try {
        const response = await $api.post<{ data: OrderOutData }>('/', requestData);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        throw error;
    }

}