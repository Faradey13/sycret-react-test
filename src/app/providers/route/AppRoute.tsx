import { Suspense } from "react";
import { RouteConfig } from "../../config/routeConfig";
import { Route, Routes } from "react-router-dom";


const AppRoutes = () => (
    <Suspense fallback={''}>
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    element={
                        <div className='page_wrapper'>
                            {element}
                        </div>
                    }
                    path={path}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRoutes;