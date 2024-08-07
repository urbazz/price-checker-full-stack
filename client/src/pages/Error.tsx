import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react"
import { routesEnum } from "../app/AppRouter";
import store from "../shared/store";
import errorImg from '../shared/assets/img/error.png';
import { Navbar } from "../shared/components";

export const Error:FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            store.setManualInput(false);
            navigate(routesEnum.SEARCH);
        }, 10000)
    }, [navigate])

    return (
            <Flex
                className="full-screen"
                justify='center' 
                align='center'   
                vertical
                gap={20}
            >
                <Navbar />
                <div className="error-wrapper">
                    <h1 className="title--reset error-title">ОШИБКА</h1>
                    <h2 className="title--reset error-subtitle">Товар с таким штрих-кодом не найден, обратитесь за помощью к сотруднику магазина</h2>
                    <img 
                        src={errorImg} 
                        alt="lorem"
                        width={400}
                    />
                </div>
            </Flex>
    )
}