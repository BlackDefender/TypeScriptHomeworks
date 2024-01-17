import IAnimal from "./IAnimal";
import ESpecies from "../custom-types/ESpecies";

export default interface IPetShop {
    animal(spices: ESpecies): IAnimal;
}
