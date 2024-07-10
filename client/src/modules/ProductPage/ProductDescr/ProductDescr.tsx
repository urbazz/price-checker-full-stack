import { Card, Typography } from "antd";
import { FC } from "react";

export const ProductDescr:FC<{descr:string}> = (props) => {
    return (
        <Card className="product-card">
            <Typography.Paragraph>
                {props.descr}
            </Typography.Paragraph>
        </Card>
    )
}