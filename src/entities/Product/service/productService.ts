import $api from "../../../app/config/axios";
import {IProduct} from "../model/type";


const fetchProducts = async (): Promise<IProduct[]> => {
    const requestData = new URLSearchParams({
        ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
        MethodName: "OSGetGoodList",
    }).toString();
    try {
        const response = await $api.post<{ data: IProduct[] }>('/', requestData);
        return response.data.data;
    } catch (error) {
        throw error;
    }

};

export default fetchProducts;