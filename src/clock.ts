export class Clock {
    tellTime(): string {
        return `It is now ${new Date().getTime()}`;
    }
}