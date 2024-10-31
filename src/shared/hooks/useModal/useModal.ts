import {useState} from "react";


export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);



    const openModal = () => {
        setIsModalOpen(true);

    };


    const closeModal = () => {
        setIsModalOpen(false);

    };
    return {isModalOpen, openModal, closeModal, loading, setLoading};
}