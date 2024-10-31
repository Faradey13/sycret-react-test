import Modal from "../../../../widjets/Modal/Modal";
import Loader from "../../../../shared/ui/Loader/Loader";
import {Suspense} from "react";
import OrderForm from "../OrderForm/OrderForm";
export interface OrderModalProps {
    isOpen: boolean;
    onClose: ()=>void;
    loading: boolean;
    setLoading: (loading: boolean) => void;


}

const OrderModal = ({isOpen, onClose, loading, setLoading}:OrderModalProps )=> {

    return (
        <Modal onClose={onClose} isOpen={isOpen} isFastSell={true} loading={loading} >
            <Suspense fallback={<Loader/>}>
                <OrderForm  closeModal={onClose} setLoading={setLoading}/>
            </Suspense>
        </Modal>
    );
};

export default OrderModal;