"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor() {
        this.baseMin = 4;
        this.baseSec = 60;
        this.min = 0;
        this.sec = 0;
    }
    setIntervalRun() {
        const startTime = new Date().getTime();
        this.setIntervalId = () => {
            const base = new Date().getTime() - startTime;
            this.min = Math.floor(this.baseMin - (base / 1000 / 60));
            this.sec = Math.floor(this.baseSec - (base / 1000)) % 60;
            console.log(this.sec);
            if (this.sec === 0) {
                this.baseSec += 60;
            }
        };
        return setInterval(() => this.setIntervalId(), 100);
    }
}
exports.Timer = Timer;
