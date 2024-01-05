import Light from "./vendor/Light";
import AirConditioner from "./vendor/AirConditioner";
import IDevice from "./interfaces/IDevice";
import LightAdapter from "./classes/LightAdapter";
import AirConditionerAdapter from "./classes/AirConditionerAdapter";

class RemoteControl {
    readonly #light: IDevice;
    readonly #airConditioner: IDevice;

    constructor(light: Light, airConditioner: AirConditioner) {
        this.#light = new LightAdapter(light);
        this.#airConditioner = new AirConditionerAdapter(airConditioner);
    }

    private toggleDevice(device: IDevice): void {
        device.isTurnedOn ? device.turnOff() : device.turnOn();
    }

    toggleLight(): void {
        // Some additional business logic.....

        this.toggleDevice(this.#light);
    }

    toggleAirCondition(): void {
        // Some additional business logic.....

        this.toggleDevice(this.#airConditioner);
    }
}
