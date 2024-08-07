import { FC} from "react"
import { observer } from "mobx-react-lite";
import { KeyBoard, WelcomeScreen } from "../widgets/";
import store from "../shared/store";


export const Search:FC = observer(() => {

    return (
        <>
            {store.isManual ? <KeyBoard/> : <WelcomeScreen/>}
        </>
    )
});