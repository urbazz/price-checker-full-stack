import { createHashRouter } from "react-router-dom";
import { routesEnum } from "../types/enums";
import setManualInput from "./setManualInput";

export const timer = () => {
    const delay = 5000;
    const history = createHashRouter([{path: routesEnum.SEARCH}])
    const redirect = () => {
        history;
        setManualInput.disableManualInput;
    }

    setTimeout(() => {redirect()}, delay)
}