"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Timer_1 = require("./Timer");
class Display extends Timer_1.Timer {
    constructor() {
        super();
        this.displaySec = () => {
            return this.sec < 10 ? '0' + this.sec : this.sec;
        };
        this.text = document.getElementById('time');
    }
    displayText() {
        if (this.text) {
            this.text = `0${this.min}:${this.displaySec()}`;
        }
    }
}
exports.Display = Display;
