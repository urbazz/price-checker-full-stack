import { makeAutoObservable } from "mobx";
class EAN {
    value:string = '';
    length = 13;
    
    constructor() {
        makeAutoObservable(this);
    }

    addSymbol(arg:number) {
        this.value = this.value.concat(arg.toString());
    }

    setStringLength() {
        if (this.value.length >= this.length) 
            return true;  
        else return false; 
    }

    clearSymbol() {
        this.value = this.value.slice(0, this.value.length-1);
    }

    // setValue(arg:string) {
    //     this.value = arg;
    // }
}

export default new EAN();