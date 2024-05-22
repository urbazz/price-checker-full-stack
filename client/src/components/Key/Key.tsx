import { Button } from "antd";
import { FC } from "react";
import './Key.scss'

interface IKeyProps {
    disabled?: boolean
    onClick?: React.MouseEventHandler | undefined
    value?: string | number
}

export const Key:FC<
        IKeyProps
    > = (props) => {
        return (
            <Button 
                disabled={props.disabled}
                className="key"
                type='default'
                onClick={props.onClick}
            >
                {props.value}
            </Button>
        )
}