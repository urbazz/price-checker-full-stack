import { FC} from "react";
import { renderKeys } from "./libs/func";
import { Flex, Layout } from "antd";
import EAN from "../../libs/EAN";
import { observer } from "mobx-react-lite";
import { SearchBtn } from "../../components/SearchBtn/SearchBtn";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Navigation } from "../../components/Navigation/Navigation";
import setManualInput from "../../libs/setManualInput";

export const ManualInput:FC = observer(() => {


    return (
        <Layout>
            <Navigation onClick={() => setManualInput.disableManualInput()}/>
            <SearchForm/>
            <Flex 
                className="full-screen"
                justify='center' 
                align='center'   
                vertical
                gap={20}
            >
                <h1 className="title">Введите штрих-код:</h1>
                <div className="code-input-wrapper">
                    <div className="code-input">{EAN.value}</div>
                    <SearchBtn/>
                </div>
                <div className="keys-wrapper">
                    {renderKeys()}
                </div>
            </Flex>
            
        </Layout>
    )
})