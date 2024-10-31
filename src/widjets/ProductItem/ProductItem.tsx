import React from 'react';
import cls from './ProductItem.module.css'
import CustomButton from "../../shared/ui/CustomButton/CustomButton";


interface ProductItemProps {
    imgLink: string;
    name: string;
    price?: number;
    oldPrice?: number;
    discount?: number;
    isInBasket: boolean;
    onClick?: () => void;
}



const ProductItem: React.FC<ProductItemProps> = ({
                                                     imgLink,
                                                     name,
                                                     price,
                                                     oldPrice,
                                                     discount,
                                                     onClick,
                                                     isInBasket
                                                 }
                                                 ) => {

    return (
        <article className={cls.productItem}>
            <img className={cls.image} src={imgLink} alt=""/>
            <div className={cls.productInfo}>
                <h4>{name}</h4>
                <div className={cls.prices}>
                    {!isInBasket&&<h2 >{`${Math.floor(price ?? 0)} ₽`}</h2>}
                    {!isInBasket&& <h4 className={cls.oldPrice}>{`${Math.floor(oldPrice  ?? 0 )} ₽`}</h4>}
                    {!isInBasket&&<div className={cls.discount}>{`-${Math.floor(discount ?? 0)}%`}</div>}
                </div>
                {!isInBasket && <CustomButton
                    onClick={onClick}
                >Купить</CustomButton>}
            </div>
        </article>
    );
};

export default ProductItem;