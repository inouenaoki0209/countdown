import {Timer} from './Timer';
import {Button} from './button';
import {Display} from './display';

export class Count {
    private root = document.getElementById('root');
    private timer = new Timer();
    private button = new Button();
    private display = new Display();

    constructor() {
    }

    public run() {
        this.button.start();
        this.button.stop();
        this.button.reset();
        this.display.displayText();
    }
}

const count = new Count();
count.run();


