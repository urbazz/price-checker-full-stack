import { Button, Flex, Layout } from "antd";
import { FC } from "react";
import searchImg from '../../assets/img/search.jpg'
import setManualInput from "../../libs/setManualInput";
import { observer } from "mobx-react-lite";

export const AutoInput:FC = observer(() => {
    return (
        <Layout className="layout--auto-input">
            <Flex 
                className='full-screen'
                justify='center'
                align='center'
                vertical
            >
                <h1 className="title--auto-input">отсканируйте штрих-код товара</h1>
                <img 
                    src={searchImg}
                    alt="lorem" 
                    height={600}
                    width={'auto'}
                />
                <Button 
                    type='primary'
                    className="btn--set-manual"
                    onClick={() => setManualInput.enableManualInput()}
                >
                    Ввести вручную
                </Button>
            </Flex>
        </Layout>
    )
})