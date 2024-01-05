import IDevice from "../interfaces/IDevice";
import Light from "../vendor/Light";
import EDeviceType from "../vendor/EDeviceType";

export default class LightAdapter implements IDevice{
    #light: Light;

    constructor(
        light: Light,
    ) {
        this.#light = light;
    }

    get type(): EDeviceType {
        return this.#light.type;
    }

    get isTurnedOn(): boolean {
        return this.#light.isTurnedOn;
    }

    turnOn(): void {
        this.#light.turnOn();
    }

    turnOff(): void {
        this.#light.turnOff();
    }
}
