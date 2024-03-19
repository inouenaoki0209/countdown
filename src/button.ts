import {Timer} from './Timer';

export class Button extends Timer {
    constructor() {
        super();
    }

    private startBtn = document.getElementById('start');
    private stopBtn = document.getElementById('stop');
    private resetBtn = document.getElementById('reset');

    public start() {
        if (this.startBtn) {
            this.startBtn.onclick = () => this.setIntervalRun();
        }
    }

    public stop() {
        if (this.stopBtn) {
            this.stopBtn.onclick = () => clearInterval(this.setIntervalId());
        }
    }

    public reset() {
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