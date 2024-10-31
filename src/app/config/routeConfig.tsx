import CertificatePage from "../../pages/CertificatePage/CertificatePage";
import PaymentPage from "../../pages/PaymentPage/PaymentPage";
import BasketPage from "../../pages/BasketPage/BasketPage";
import {RouteProps} from "react-router-dom";


export enum AppRoute  {
    CERTIFICATE= 'certificate',
    PAYMENT= 'payment',
    BASKET= 'basket',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.CERTIFICATE]: '/',
    [AppRoute.PAYMENT]: '/payment',
    [AppRoute.BASKET]: '/basket',
}

export const RouteConfig: Record<AppRoute, RouteProps>  = {
    [AppRoute.CERTIFICATE]: {
        path: RoutePath[AppRoute.CERTIFICATE],
        element: <CertificatePage/>,
    },
    [AppRoute.PAYMENT]: {
        path: RoutePath[AppRoute.PAYMENT],
        element: <PaymentPage/>
    },
    [AppRoute.BASKET]: {
        path: RoutePath[AppRoute.BASKET],
        element: <BasketPage/>
    }
}