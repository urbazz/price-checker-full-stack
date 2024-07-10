import { ClearBtn } from "../../../../components/SearchPage/ClearBtn/ClearBtn";
import { Key } from "../../../../components/SearchPage/Key/Key";
import { NumbersSequence } from "../../../../libs/common";
import EAN from "../../../../store/EAN";

export const keysOnClick = (item: number) => {
    EAN.addSymbol(item);
    EAN.setStringLength();
}

export const renderKeys = () => {
    const keys = [];
    
    for (const i of NumbersSequence) {
        keys.push(
            <Key
                value={i}
                onClick={() => keysOnClick(i)}
                key={i}
                disabled = {EAN.setStringLength()}
            />
        )
    }

    keys.push(
        <ClearBtn 
            key={'clear'} 
            onClick={() => EAN.clearSymbol()}
        />)

    return keys;
}