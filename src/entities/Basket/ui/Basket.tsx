import cls from './Basket.module.css'
import useBasketStore from "../model/store";
import ProductItem from "../../../widjets/ProductItem/ProductItem";
import CustomButton from "../../../shared/ui/CustomButton/CustomButton";
import {useMemo} from "react";


const Basket = () => {
    const { basket, removeItem } = useBasketStore();


    const totalAmount = useMemo(() =>
            basket.reduce((acc, item) => acc + parseFloat(item.SUMMA || '0'), 0),
        [basket]
    );


    return (
        <section className={cls.basket}>
            {basket.map((item, index) => (
                    <div  key={index}>
                        <div className={cls.basketItem}>
                            <div className={cls.productItemBlock}>
                                <h4>{index + 1}</h4>
                                <div className={cls.basketProductItem}>
                                    <ProductItem
                                        isInBasket={true}
                                        imgLink={`static/images/productsImg/${Math.floor(Number(item.PRICE))}.webp`}
                                        name={item.NAME}
                                    />
                                </div>
                            </div>
                            <div className={cls.orderInfo}>
                                <h5>{`Сумма ${Math.floor(Number(item.SUMMA))}₽`}</h5>
                                <CustomButton
                                    onClick={() => removeItem(item.ID)}
                                >
                                    Удалить
                                </CustomButton>
                            </div>
                        </div>
                        <hr className={cls.line}/>
                    </div>


                )
            )
            }
            <div className={cls.totalPrice}>
                <h2>Сумма в корзине</h2>
                <h2>{`${totalAmount} ₽`}</h2>
            </div>
            <CustomButton>Оформить Заказ</CustomButton>

        </section>
    );
};

export default Basket;