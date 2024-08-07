import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from "antd";
import { routesEnum } from '../../app/AppRouter';
import { Key } from './Components';
import { Navbar } from '../../shared/components';
import clearImg from '../../shared/assets/img/clear.png';
import searchImg from '../../shared/assets/img/search-icon.png';
import './KeyBoard.scss';
import store from '../../shared/store';

export const KeyBoard = () => {

    const keyBoardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const barecodeLength = 13;
    const [barecode, setBarecode] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            store.setManualInput(false);
            navigate(routesEnum.SEARCH);
        }, 60000)
    }, [])

    return (
        <Flex 
            justify='center' 
            align='center'
            vertical
            className='full-screen'
        >
            <Navbar/>
            <div className="barecode-wrapper">
                <div className="barecode">{barecode}</div>
                <Button 
                    type='primary'
                    className='btn--search'
                    onClick={() => {
                        navigate(`${routesEnum.PRODUCT}/${barecode}`);
                    }}
                >
                    <img src={searchImg} width={40} height={40}/>
                </Button>
            </div>
            <div className="keyboard-wrapper">
            {
                keyBoardValues.map((item) => 
                    <Key 
                        value={item} 
                        key={item}
                        onClick={() => {
                            setBarecode(barecode.concat(item.toString()));
                        }}
                        disabled ={barecode.length >= barecodeLength}
                    />
                )
            }
            <Button 
                className='btn--clear' 
                type='primary'
                onClick={() => {
                    setBarecode(barecode.slice(0, barecode.length-1));
                }}
                >
                <img src={clearImg}/>
            </Button>
            </div>
        </Flex>
    );
};