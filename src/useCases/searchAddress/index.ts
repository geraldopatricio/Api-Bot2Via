import { SearchAddressController } from "./SearchAddressController";
import { SearchAddressUseCase } from "./SearchAddressUseCase";

const searchAddressUseCase = new SearchAddressUseCase();
const searchAddressController = new SearchAddressController(
    searchAddressUseCase
);

export { searchAddressController };
