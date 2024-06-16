import { makeAutoObservable } from "mobx";

class ProductContent {

    isDescr:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setVisible(arg:boolean) {
        this.isDescr = arg;
    }
}

export default new ProductContent();