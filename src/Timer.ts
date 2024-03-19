import {Display} from './display';

export class Timer {
    public baseMin = 4;
    public baseSec = 60;
    public min!: number;
    public sec!: number;
    public setIntervalId: NodeJS.Timeout | any;

    constructor() {
    }

    public setIntervalRun(): NodeJS.Timeout {
        const startTime = new Date().getTime();
        this.setIntervalId = () => {
            const base = new Date().getTime() - startTime;
            this.min = Math.floor(this.baseMin - (base / 1000 / 60));
            this.sec = Math.floor(this.baseSec - (base / 1000)) % 60;
            console.log(this.sec);
            Display.prototype.displayText();
            if(this.min === 0)
            if (this.sec === 0) {
                this.baseSec += 60;
            }
        };
        return setInterval(() => this.setIntervalId(), 100);
    }
}

