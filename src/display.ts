import {Timer} from './Timer';

export class Display extends Timer {
    private text: HTMLElement | null
    constructor() {
        super();
        this.text = document.getElementById('time')
    }

    public displaySec = () => {
        return this.sec < 10 ? '0' + this.sec : this.sec;
    };

    public displayText() {
       if(this.text){
           this.text.innerText = `0${this.min}:${this.displaySec()}`;
       }
    }

}