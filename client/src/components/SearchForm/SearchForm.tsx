import { FormInstance, Input, InputRef } from "antd";
import {Form} from "antd";
import { FC, useRef, useState } from "react";
import EAN from "../../libs/EAN";

export const SearchForm:FC<{
    onSubmit?: () => string,
    onChange?: (value: any) => void,
}> = (props) => {

    const inputRef = useRef<InputRef>(null);
    const formRef = useRef<FormInstance>(null);
    const [inputValue, setInputValue] = useState(EAN.value)

    window.addEventListener('click', () => inputRef.current?.focus());

    const handlKeyUp = (event: { keyCode: number; }) => {
        event.keyCode === 13 && formRef.current?.submit()
    }

    const formSubmit = (values: string) => {
        console.log(values);
    }

    return (
        <Form
            className="search-form"
            name="searchProduct"
            autoComplete="off"
            ref={formRef}
            onKeyUp={handlKeyUp}
            onFinish={(values) => {
                formSubmit(values);
                props.onSubmit;
            }}
        >
            <Form.Item
                name={'EUN'}
            >
                <Input
                autoFocus
                ref={inputRef}
                value={inputValue}
                onChange={() => {
                    setInputValue(EAN.value); 
                    props.onChange}}
                />
            </Form.Item>
        </Form>
    )
}