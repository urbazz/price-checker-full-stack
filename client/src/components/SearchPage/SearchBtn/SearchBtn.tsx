import { Button } from "antd";
import { FC } from "react";
import './SearchBtn.scss';
import EAN from "../../../store/EAN";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { routesEnum } from "../../AppRouter/types";


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
            {/* <img src={} alt="" /> */}
        </Button>
    )
})