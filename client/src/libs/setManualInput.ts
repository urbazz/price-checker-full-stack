import { makeAutoObservable } from "mobx";

class setManualInput {

    isManual:boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    enableManualInput() {
        this.isManual = true
    }

    disableManualInput() {
        this.isManual = false
    }
}

export default new setManualInput();