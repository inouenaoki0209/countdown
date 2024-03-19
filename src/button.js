"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Timer_1 = require("./Timer");
class Button extends Timer_1.Timer {
    constructor() {
        super();
        this.startBtn = document.getElementById('start');
        this.stopBtn = document.getElementById('stop');
        this.resetBtn = document.getElementById('reset');
    }
    start() {
        if (this.startBtn) {
            this.startBtn.onclick = () => this.setIntervalRun();
        }
    }
    stop() {
        if (this.stopBtn) {
            this.stopBtn.onclick = () => clearInterval(this.setIntervalId());
        }
    }
    reset() {
        if (this.resetBtn) {
            this.resetBtn.onclick = () => {
                clearInterval(this.setIntervalId());
                this.baseMin = 4;
                this.baseSec = 60;
                this.min = 0;
                this.sec = 0;
            };
        }
    }
}
exports.Button = Button;
