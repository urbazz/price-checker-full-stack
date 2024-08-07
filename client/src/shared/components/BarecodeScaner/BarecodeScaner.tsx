import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routesEnum } from '../../../app/AppRouter';

export const BarecodeScaner = () => {
    const navigate = useNavigate();
    const keyCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    document.addEventListener('scan', (e) => {
        const scanCode = e.detail.scanCode;
        const symbols = scanCode.split('');
        for(const symbol of symbols) {
            if(!keyCodes.includes(symbol)) {
                navigate(routesEnum.ERROR); 
            } else {
                navigate(routesEnum.PRODUCT+'/'+scanCode);
            }
        }
    });

    return (
        <>
            
        </>
    );
};