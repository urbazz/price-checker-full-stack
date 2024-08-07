import { Button, Flex } from 'antd';
import React from 'react';
import './WelcomeScreen.scss';
import imgSrc from '../../shared/assets/img/search.jpg'
import store from '../../shared/store';

export const WelcomeScreen = () => {
    return (
        <Flex
            className='full-screen'
            justify='center'
            align='center'
            vertical
        >
            <h1 className='welcome-title'>Поднесите товар к сканеру штрих-кода</h1>
            <img src={imgSrc} width={600}/>
            <Button 
                type='primary'
                className='welcome-btn'
                onClick={() => {
                    store.setManualInput(true);
                }}
            >
                Ввести вручную
            </Button>
        </Flex>
    );
};