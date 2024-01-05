import EDeviceType from "../vendor/EDeviceType";

export default interface IDevice {
    type: EDeviceType;
    isTurnedOn: boolean;
    turnOn(): void;
    turnOff(): void;
}
