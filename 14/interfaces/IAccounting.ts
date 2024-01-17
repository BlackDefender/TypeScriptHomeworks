export default interface IAccounting {
    receiveMoneyFromTicketWindow(): void;
    paySalary(): void;
    buyFoodForAnimals(price: number): void;
    buyExpendableMaterials(price: number): void;
    statistics(): void;
}
