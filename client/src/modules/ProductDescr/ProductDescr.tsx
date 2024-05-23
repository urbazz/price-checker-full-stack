import { Button, Card, Typography } from "antd";
import { FC } from "react";
import ProductContent from "../../libs/ProductContent";

export const ProductDescr: FC = () => {
    return (
        <Card>
            <Typography.Paragraph>
                Сидр средней степени сухости, созданный из смеси горько-сладких яблок с освежающим вкусом и хрустящей корочкой!
                Cтрана происхождения — Англия Производитель — Woodfordes Norfolk Алкоголь — 4,5% Стиль — IPA Плотность – ...%,
                Емкость – 0,5 л стекло, Количество в упаковке – 8 бутылок.
            </Typography.Paragraph>

            <Button 
                type='primary' 
                className="product-btn"
                onClick={() => ProductContent.setVisible(false)}
            >
                Посмотреть характеристики
            </Button>
        </Card>
    )
}