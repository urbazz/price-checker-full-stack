import { FC, useEffect } from "react"
import setManualInput from "../libs/setManualInput";
import { AutoInput, ManualInput } from "../modules/";
import { observer } from "mobx-react-lite";
import { timer } from "../libs/times";


const Search:FC = observer(() => {

    useEffect(() => {timer()},[])

    return (
        setManualInput.isManual ? <ManualInput/> : <AutoInput/>
    )
})

export default Search;