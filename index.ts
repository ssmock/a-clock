class Clock {
    getNow(): string {
        return `Now is ${new Date().getTime()}`;
    }
}

export default Clock;