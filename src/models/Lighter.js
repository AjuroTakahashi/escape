import { GameObject } from './GameObject'

export class Lighter extends GameObject {
    constructor(game, name, status){
        const type = "Lighter";
        const icons = {
            on : "https://image.flaticon.com/icons/png/512/901/901855.png",
            idle : "https://image.flaticon.com/icons/png/512/650/650412.png"
        };
        super(game, name, icons, type, status);
    }

    use(){
        if(this.status === "idle"){
            this.setStatus("on");
        }
    }

    combine(otherItem){
        if (this.status === "on") {
            return otherItem.burn();
        } else {
            return false;
        }
    }
}