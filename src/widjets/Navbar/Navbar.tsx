import cls from './Navbar.module.css'
import useBasketStore from "../../entities/Basket/model/store";
import CustomButton from "../../shared/ui/CustomButton/CustomButton";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { basket  } = useBasketStore();
    const productsInBasket = basket.length
    return (
        <nav className={cls.navbar}>
            <h1
                className={cls.name}
                onClick={()=> navigate('/')}
            >SomeStore</h1>
            <div className={cls.basket}>
                {location.pathname === '/' && <CustomButton onClick={() => navigate('/basket')}>

                    {`В корзине ${productsInBasket} шт`}
                </CustomButton> }
                {location.pathname === '/basket' && <CustomButton onClick={() => navigate('/')}>
                    {`Вернуться к покупкам`}
                </CustomButton> }

            </div>

        </nav>
    );
};

export default Navbar;