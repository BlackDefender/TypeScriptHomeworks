import IDevice from "../interfaces/IDevice";
import AirConditioner from "../vendor/AirConditioner";
import EDeviceType from "../vendor/EDeviceType";

export default class AirConditionerAdapter implements IDevice {
    #airConditioner: AirConditioner;

    constructor(airConditioner: AirConditioner) {
        this.#airConditioner = airConditioner;
    }

    get type(): EDeviceType {
        return this.#airConditioner.type;
    }

    get isTurnedOn(): boolean {
        return this.#airConditioner.isWorking;
    }

    turnOn(): void {
        this.#airConditioner.start();
    }

    turnOff(): void {
        this.#airConditioner.stop();
    }
}
