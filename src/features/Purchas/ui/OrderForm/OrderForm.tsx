import {IMaskInput} from "react-imask";
import cls from "./OrderForm.module.css"
import CustomButton from "../../../../shared/ui/CustomButton/CustomButton";
import {Controller, useForm} from "react-hook-form";
import classNames from "classnames";
import useBasketStore from "../../../../entities/Basket/model/store";
import {sendFormData} from "../../service/purchasService";
import {useNavigate} from "react-router-dom";



interface IForm {
    name: string;
    phone: string;
    message?: string;
    email: string;
}

interface OrderFormProps {
    closeModal: () => void;
    setLoading: (loading: boolean) => void;
}

const OrderForm = ({ closeModal, setLoading }: OrderFormProps) => {
    const {control, register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<IForm>();

    const formatPhone = (phone: string) => {
        return phone.replace(/^\+7\s*/, '').replace(/-/g, '');
    }

    const navigate = useNavigate();

    const { basket, clearCart} = useBasketStore()
    const productName = basket[0]?.NAME || 'Товар не добавлен'

    const onSubmit = async (data: IForm) => {
        setLoading(true);

        try {
            const formattedPhone = formatPhone(data.phone);
            await sendFormData({
                Email: data.email,
                Phone: formattedPhone,
                ClientName: data.name,
                Summa: basket[0]?.SUMMA,
                Price: basket[0]?.PRICE,
                Id: basket[0]?.ID,
                PrimaryKey: basket[0]?.PRIMARYKEY,
                TableName: basket[0]?.TABLENAME
            });

            reset();
            clearErrors();
            clearCart();
            closeModal();
            navigate('/payment');
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        } finally {
            setLoading(false);
        }
    }


    const handleClose = (event: MouseEvent) => {
    event.preventDefault();
        clearCart();
        closeModal();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <h2>{productName}</h2>
                <div>
                    <input

                        placeholder={'ФИО'}
                        className={classNames({[cls.error]: errors.name})}
                        type={'text'}
                        {...register('name', {
                            required: 'Имя обязательно для заполнения',
                            pattern: {
                                value: /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
                                message: 'Введите ваше имя без цифр и символов'
                            }
                        })}
                    />
                    {errors.name && <span className={cls.errorMessage}>{errors.name.message}</span>}
                </div>

                <div>
                    <Controller
                        name="phone"
                        control={control}

                        defaultValue=""
                        rules={{
                            required: 'Телефон обязателен для заполнения',
                            pattern: {
                                value: /^\+7 \d{3}-\d{3}-\d{2}-\d{2}$/,
                                message: 'Некорректный формат телефона'
                            }
                        }}
                        render={({field}) => (
                            <IMaskInput
                                className={classNames(cls.inputPhone, {[cls.error]: errors.phone})}
                                placeholder={"Телефон"}
                                {...field}
                                mask="+7 000-000-00-00"
                                definitions={{'0': /[0-9]/}}
                                onAccept={(value: string) => field.onChange(value)}
                                overwrite

                            />
                        )}
                    />
                    {errors.phone && <span className={cls.errorMessage}>{errors.phone.message}</span>}
                </div>

                <div>
                <textarea
                    rows={3}
                    placeholder={"Введите ваше сообщение..."}
                    {...register('message')}
                />
                </div>
                <div>
                    <input
                        className={classNames({[cls.error]: errors.email})}
                        placeholder={'email'}
                        type={'text'}
                        {...register('email', {
                            required: 'Имя обязательно для заполнения',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Введите корректный email'
                            }
                        })}
                    />
                    {errors.email && <span className={cls.errorMessage}>{errors.email.message}</span>}
                </div>


                <div className={cls.buttons}>
                    <CustomButton
                        type={'button'}
                        onClick={handleClose}
                    >Назад</CustomButton>
                    <CustomButton
                        type="submit"
                    >
                        Перейти к оплате
                    </CustomButton>
                </div>

            </form>

        </div>

    );
};

export default OrderForm;