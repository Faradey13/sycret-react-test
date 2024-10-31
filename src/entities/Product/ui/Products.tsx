import  {useEffect} from 'react';
import useProductStore from "../model/productStore";
import cls from "./Products.module.css";
import ProductItem from "../../../widjets/ProductItem/ProductItem";
import Loader from "../../../shared/ui/Loader/Loader";
import OrderModal from "../../../features/Purchas/ui/OrderModal/OrderModal";
import {useModal} from "../../../shared/hooks/useModal/useModal";
import {IProduct} from "../model/type";
import useBasketStore from "../../Basket/model/store";



const Products = () => {
    const { addItem,clearCart  } = useBasketStore();
    const { products, fetchProductsData, isLoading } = useProductStore();
    const { openModal, isModalOpen, closeModal, loading, setLoading} = useModal()
    useEffect(() => {
        const fetchData = async () => {
            await fetchProductsData();
        };
        fetchData();
    }, [fetchProductsData]);

    useEffect(() => {
        clearCart()
    }, []);

    const handleAddToBasket = (product: IProduct) => {
        addItem(product)
        openModal()
    }

    return (
        <div className={cls.productsContainer}>

            {isLoading?<Loader/> : products.map((item) => (
                <ProductItem
                    key={item.ID}
                    imgLink={`static/images/productsImg/${Math.floor(Number(item.PRICE))}.webp`} // поидее картинки товаров тоже надо получать с сервера, такой костыль сделал для примера )
                    name={item.NAME}
                    price={Number(item.SUMMA)}
                    oldPrice={Number(item.PRICE)}
                    discount={Number(item.DISCOUNT)}
                    onClick={() => handleAddToBasket(item)}
                    isInBasket={false}
                />))

            }

            <OrderModal isOpen={isModalOpen} onClose={closeModal} loading={loading} setLoading={setLoading} />
        </div>

    );

};

export default Products;