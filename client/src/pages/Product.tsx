import { Card, Flex, Layout } from "antd";
import { FC, useEffect, useState,} from "react"
import { ProductDescr } from "../modules/ProductPage/ProductDescr/ProductDescr";
import { observer } from "mobx-react-lite";
import { api } from "../http";
import { useParams } from "react-router-dom";

const Product:FC = observer(() => {

    const data = {
        title: '1',
        price: '2',
        descr: '3'
    }
    const {id} = useParams()
    console.log(id)
    const [product, setProduct] = useState([])
    const  fetchProducts = async () => {
        api().then((result) => {
            const filterData = result.find(item => {
                const ean = parseInt((item.excerpt.rendered).match(/\d+/));
                ean.toString() == id;
            })
            console.log(filterData)
        })
    }

    useEffect(() => {fetchProducts()}, [])
    console.log(product)

    return (
        <Layout className="full-screen">
                <Flex align='center' justify='center' gap={0} className="full-screen product-content">
                    <Card className="product-card">
                    <Flex vertical align='center' justify='center' gap={20}>
                        <h1 className="title--reset">{data.title}</h1>
                        <h2 className="title--reset">Стоимость: { data.price} рублей</h2>
                    </Flex>
                    </Card>
                    <ProductDescr descr={data.descr} />
                </Flex>
        </Layout>
    )
})

export default Product;