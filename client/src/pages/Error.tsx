import { Flex, Layout } from "antd";
import { FC, useEffect } from "react"
import { Navigation } from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../types/enums";
import errorImg from '../assets/img/error.png';
import { timer } from "../libs/times";

const Error:FC = () => {

    const navigate = useNavigate()
    useEffect(() => {timer()},[])

    return (
        <Layout>
            <Navigation onClick={() => navigate(routesEnum.SEARCH)}/>
            <Flex
                className="full-screen"
                justify='center' 
                align='center'   
                vertical
                gap={20}
            >
                <h1 className="title--reset error-title">ОШИБКА</h1>
                <h2 className="title--reset error-subtitle">Товар с таким штрих-кодом не найден, обратитесь за помощью к сотруднику магазина</h2>
                <img 
                src={errorImg} 
                alt="lorem"
                width={400}
                />
            </Flex>
        </Layout>
    )
}

export default Error;