import EDeviceType from "./EDeviceType";
export default class Light {
    // НЕ ЗМІНЮЙТЕ ЦЕЙ  КЛАС

    type = EDeviceType.Light;
    #isTurnedOn = false;

    get isTurnedOn(): boolean {
        return this.#isTurnedOn;
    }

    turnOn() {
        this.#isTurnedOn = true;
        console.log("Light is ON");
    }

    turnOff() {
        this.#isTurnedOn = false;
        console.log("Light is OFF");

    }

}
