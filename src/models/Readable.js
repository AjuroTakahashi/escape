import { GameObject } from './GameObject';

export class Readable extends GameObject {
    constructor(game, name, status, text){
        const type = "Readable";
        const icons = {
            idle : "https://image.flaticon.com/icons/png/512/3885/3885190.png",
        };
        super(game, name, icons, type, status);
        this.text = text;
    }

    use(){
        alert('Vous lisez: '+this.text);
    }

    burn(){
        alert('La lettre brûle et laisse des cendres');
        //To-Do : Delete object and create ashes
        this.game.addItemsToWorld(new GameObject(this.game, "Cendres", "https://image.flaticon.com/icons/png/512/3885/3885190.png", "Ashes", "idle"));
        this.game.deleteItemFromWorld(this);
        return true;
    }
}