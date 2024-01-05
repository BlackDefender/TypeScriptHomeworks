import EDeviceType from "./vendor/EDeviceType";
import Light from "./vendor/Light";
import AirConditioner from "./vendor/AirConditioner";
import SecuritySystem from "./vendor/SecuritySystem";
import IDevice from "./interfaces/IDevice";
import SecuritySystemAdapter from "./classes/SecuritySystemAdapter";
import AirConditionerAdapter from "./classes/AirConditionerAdapter";
import LightAdapter from "./classes/LightAdapter";

class HomeControlPanel {
    readonly #light: IDevice;
    readonly #airConditioner: IDevice;
    readonly #securitySystem: IDevice;
    #allDevices: IDevice[];

    constructor(
        light: Light,
        airConditioner: AirConditioner,
        securitySystem: SecuritySystem

    ) {
        this.#light = new LightAdapter(light);
        this.#securitySystem = new SecuritySystemAdapter(securitySystem);
        this.#airConditioner = new AirConditionerAdapter(airConditioner);
        this.#allDevices = [this.#light, this.#securitySystem, this.#airConditioner];
    }

    toggleDevice(type: EDeviceType): void {
        // Some additional business logic.....

        this.#allDevices
            .filter((device: IDevice):boolean => device.type === type)
            .forEach((device: IDevice): void => {
                device.isTurnedOn ? device.turnOff() : device.turnOn();
            });
    }

    leaveHome(): void {
        // Some additional business logic.....

        this.#airConditioner.turnOff();
        this.#light.turnOff();
        this.#securitySystem.turnOn();
    }

    backHome(): void {
        // Some additional business logic.....

        this.#airConditioner.turnOn();
        this.#light.turnOn();
        this.#securitySystem.turnOff();
    }
}
