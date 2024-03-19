"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = void 0;
const Timer_1 = require("./Timer");
const button_1 = require("./button");
const display_1 = require("./display");
class Count {
    constructor() {
        this.root = document.getElementById('root');
        this.timer = new Timer_1.Timer();
        this.button = new button_1.Button();
        this.display = new display_1.Display();
    }
    run() {
        this.button.start();
        this.button.stop();
        this.button.reset();
        this.display.displayText();
    }
}
exports.Count = Count;
const count = new Count();
count.run();
