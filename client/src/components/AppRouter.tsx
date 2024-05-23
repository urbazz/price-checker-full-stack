import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { routesEnum } from "../types/enums";
import Admin from "../pages/Admint";

export const AppRouter:FC = () => {
    return (
        <Routes>
            {
                routes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>}/>
                )
            }

            <Route path={routesEnum.ADMIN} element={<Admin/>}/>

            <Route path="*" element={<Navigate to={routesEnum.ERROR}/>}/>
        </Routes>
    )
}