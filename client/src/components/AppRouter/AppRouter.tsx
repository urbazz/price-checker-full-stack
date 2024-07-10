import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from './libs/index';
import { routesEnum } from "./types/index";

export const AppRouter:FC = () => {
    return (
        <Routes>
            {
                routes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>}/>
                )
            }

            <Route path="*" element={<Navigate to={routesEnum.ERROR}/>}/>
        </Routes>
    )
}