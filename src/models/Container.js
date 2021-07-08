import { GameObject } from "./GameObject";

export class Container extends GameObject {
    constructor(game, name, status, items) {
        const type = "Container";
        const icons = {
            idle : "https://image.flaticon.com/icons/png/512/2489/2489669.png",
            opened : "https://image.flaticon.com/icons/png/512/3764/3764319.png"
        };
        super(game, name, icons, type, status);
        this.items = items;
    }

    use() {
        if (this.status === "idle") {
            this.game.addItemsToWorld(this.items);
            this.setStatus("opened");
        }
    }

}