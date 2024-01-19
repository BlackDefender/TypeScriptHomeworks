import PetShop from "../classes/PetShop";
import IPetShop from "../interfaces/IPetShop";
import ESpecies from "../custom-types/ESpecies";
import Animal from "../classes/Animal";

describe('PetShop', () => {
    const petShop: IPetShop = PetShop.getInstance();

    it('should return instance of PetShop', () => {
        expect(petShop).toBeInstanceOf(PetShop);
    });

    it('should return instance of Animal', () => {
        expect(petShop.animal(ESpecies.Ghost)).toBeInstanceOf(Animal);
    });
});
