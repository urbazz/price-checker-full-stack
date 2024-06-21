import { Flex, Layout } from "antd";
import { FC, useEffect } from "react"
import { Navigation } from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../types/enums";
import { ProductDescr } from "../modules/ProductDescr/ProductDescr";
import { observer } from "mobx-react-lite";
import { timer } from "../libs/times";


const Product:FC = observer(() => {

    const navigate = useNavigate();
    useEffect(() => {timer()},[])


    return (
            <Layout className="full-screen">
                <Navigation onClick={() => navigate(routesEnum.SEARCH)}/>
                <Layout.Sider
                    theme='light'
                    className="product-info-sidebar"
                    width={500}
                >
                    <Flex
                        vertical
                        align='center'
                        justify='center'
                        className="full-screen"
                        gap={50}
                    >
                        <h1 className="title--reset">WOODFORDES NORFOLK ADDER CIDER / ВУДФОРДС НОРФОЛК АДДЕР СИДР</h1>
                        <h2 className="title--reset">Стоимость: 234 ₽</h2>
                    </Flex>
                </Layout.Sider>
                <Layout.Content className="product-info">
                    <ProductDescr/>  
                </Layout.Content>
            </Layout>
    )
})

export default Product;