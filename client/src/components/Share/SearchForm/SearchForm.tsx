import { Form, FormInstance, Input, InputRef } from "antd";
import { useNavigate } from "react-router-dom";
import { FC, useRef } from "react";
import EAN from "../../../store/EAN";
import './SearchForm.scss'
import { routesEnum } from "../../AppRouter/types";

export const SearchForm:FC = () => {

    const inputRef = useRef<InputRef>(null);
    const formRef = useRef<FormInstance>(null);
    const navigate = useNavigate();

    window.addEventListener('click', () => inputRef.current?.focus());
    window.onload = () => inputRef.current?.focus();
    document.addEventListener('scan', function(scanCode) {
        navigate(routesEnum.PRODUCT + '/' + scanCode.detail.scanCode); 
    })

    return (
        <Form
            className="search-form"
            name="searchProduct"
            autoComplete="off"
            ref={formRef}
        >
            <Form.Item
                name={'EAN'}
            >
                <Input
                autoFocus
                ref={inputRef}
                value={EAN.value}
                maxLength={13}
                />
            </Form.Item>
        </Form>
    )
}