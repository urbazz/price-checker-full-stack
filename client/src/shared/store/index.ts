import { makeAutoObservable } from "mobx";

class Store {
    isManual:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
    setManualInput(arg:boolean) {
        this.isManual = arg;
    }
}

export default new Store;