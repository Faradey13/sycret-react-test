
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import cls from './Modal.module.css'
import {Portal} from "../Portal/Portal";
import classNames from "classnames";
import Loader from "../../shared/ui/Loader/Loader";




interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isLazy?: boolean;
    id?: string;
    isFastSell?: boolean;
    loading?: boolean;
}

const Modal = (props: ModalProps) => {
    const {
        isOpen,
        children,
        isLazy,
        onClose,
        isFastSell,
        loading,
    } = props


    const ANIMATION_DELAY = 300;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {

            setIsClosing(true);


            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();


    }


    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && !isFastSell) {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        } else {
            setIsMounted(false);

        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(timerRef.current)
        }
    }, [isOpen, onKeyDown]);


    const modalClasses = classNames(cls.modalMain, {
        [cls.opened]: isMounted,
        [cls.close]: isClosing,
    });


    if (isLazy && !isMounted)
        return null


    return (
        <Portal>
            <div className={modalClasses}>
                {loading && <Loader/>}
                <div
                     className={cls.overlay}
                     onClick={!isFastSell? onClose : undefined}


                >
                    <div className={cls.content} onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>

            </div>
        </Portal>
    );
};

export default Modal;