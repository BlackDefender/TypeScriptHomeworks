import SecuritySystem from "../vendor/SecuritySystem";
import IDevice from "../interfaces/IDevice";
import EDeviceType from "../vendor/EDeviceType";

export default class SecuritySystemAdapter implements IDevice{
    #securitySystem: SecuritySystem;

    constructor(securitySystem: SecuritySystem) {
        this.#securitySystem = securitySystem;
    }

    get type(): EDeviceType {
        return this.#securitySystem.type;
    }

    get isTurnedOn(): boolean {
        return this.#securitySystem.isWatching;
    };

    turnOn(): void {
        this.#securitySystem.enable();
    }

    turnOff(): void {
        this.#securitySystem.disable();
    }
}
