import { FC} from "react"
import setManualInput from "../store/setManualInput";
import { AutoInput, ManualInput } from "../modules/";
import { observer } from "mobx-react-lite";


const Search:FC = observer(() => {

    return (
        setManualInput.isManual ? <ManualInput/> : <AutoInput/>
    )
})

export default Search;