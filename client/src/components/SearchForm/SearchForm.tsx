import { Form, FormInstance, Input, InputRef } from "antd";
import { FC, useRef } from "react";
import EAN from "../../libs/EAN";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../../types/enums";

export const SearchForm:FC = observer(() => {

    const inputRef = useRef<InputRef>(null);
    const formRef = useRef<FormInstance>(null);
    const navigate = useNavigate();

    window.addEventListener('click', () => inputRef.current?.focus());

    const handlKeyUp = (event: { keyCode: number; }) => {
        event.keyCode === 13 && formRef.current?.submit()
    }

    return (
        <Form
            className="search-form"
            name="searchProduct"
            autoComplete="off"
            ref={formRef}
            onKeyUp={handlKeyUp}
            onFinish={(values) => {
                navigate(`${routesEnum.PRODUCT}/${values.EAN}`);
            }}
        >
            <Form.Item
                name={'EAN'}
            >
                <Input
                autoFocus
                ref={inputRef}
                value={EAN.value}
                maxLength={13}
                onChange={(value) => {
                    EAN.setValue(value.currentTarget.value);
                    }}
                />
            </Form.Item>
        </Form>
    )
})