import { Flex, Layout } from "antd";
import { FC, useEffect } from "react"
import { Navigation } from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../types/enums";
import { ProductInfo } from "../modules/ProductInfo/ProductInfo";
import { ProductDescr } from "../modules/ProductDescr/ProductDescr";
import ProductContent from "../libs/ProductContent";
import { observer } from "mobx-react-lite";


const Product:FC = observer(() => {

    useEffect(() => {
        // getProducts();
    }, [])

    const navigate = useNavigate();

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
                    {ProductContent.isDescr ? <ProductDescr/> : <ProductInfo/>}
                </Layout.Content>
            </Layout>
    )
})

export default Product;