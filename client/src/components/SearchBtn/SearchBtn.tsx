import { Button } from "antd";
import { FC } from "react";
import './SearchBtn.scss';
import EAN from "../../libs/EAN";
import { routesEnum } from "../../types/enums";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";


export const SearchBtn:FC = observer (() => {
    const navigate = useNavigate();
    return (
        <Button 
            type='primary'
            className="btn--search"
            onClick={() => {
                if(EAN.value.length == EAN.length) {
                    navigate(`${routesEnum.PRODUCT}/${EAN.value}`);
                }
                EAN.value = ''
            }}
        >

        </Button>
    )
})