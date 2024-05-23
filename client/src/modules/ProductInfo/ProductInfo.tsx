import { Button } from "antd";
import { FC } from "react";
import { ProductTable } from "../../components/ProductTable/ProductTable";
import ProductContent from "../../libs/ProductContent";

export const ProductInfo:FC = () => {
    return (
        <>
            <ProductTable />
            <Button 
                type='primary' 
                className="product-btn"
                onClick={() => ProductContent.setVisible(true)}
            >
                Посмотреть описание
            </Button>
        </>
    )
}