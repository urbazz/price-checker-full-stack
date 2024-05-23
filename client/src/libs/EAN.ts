import { makeAutoObservable } from "mobx";

class EAN {
    value = '';
    constructor() {
        makeAutoObservable(this);
    }

    addSymbol(arg:number) {
        this.value = this.value.concat(arg.toString());
    }

    setStringLength() {
        if (this.value.length >= 13) 
            return true;  
            else return false; 
    }

    clearSymbol() {
        this.value = this.value.slice(0, this.value.length-1);
    }
}

export default new EAN();