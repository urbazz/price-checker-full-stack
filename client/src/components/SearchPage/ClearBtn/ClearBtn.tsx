import { Button } from "antd";
import { FC } from "react";
import './ClearBtn.scss';
import clearImg from '../../../assets/img/clear.png';

export const ClearBtn:FC <{
    onClick:React.MouseEventHandler
}> = (props) => {
    return (
        <Button
            type='primary'
            className="btn--clear"
            onClick={props.onClick}
        >
            <img 
                src={clearImg} 
                alt="lorem"
                width={50}
                height={50}
            />
        </Button>
    )
}