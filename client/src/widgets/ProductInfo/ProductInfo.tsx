import React, { FC } from 'react';
import notImg from '../../shared/assets/img/noimage.png'
import { Button, Flex } from 'antd';

export const ProductInfo:FC<{
    img:string, 
    title:string, 
    price:string, 
    onClick: () => void
}> = (props) => {
    return (
        <Flex className="product-wrapper" justify='center' gap={50} align='center'>
            <img src={props.img || notImg} className='product-img' />
            <div className='product-container'>
                <h1 className="product-title">{props.title}</h1>
                <p className='product-price'>{props.price} ₽</p>
                <Button 
                    className='product-btn' 
                    type='primary'
                    onClick={props.onClick}
                >
                    Открыть описание
                </Button>
            </div>
        </Flex>
    );
};