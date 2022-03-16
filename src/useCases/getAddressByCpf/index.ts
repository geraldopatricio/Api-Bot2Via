import { GetAddressByCpfController } from "./GetAddressByCpfController";
import { GetAddressByCpfUseCase } from "./GetAddressByCpfUseCase";

const getAddressByCpfUseCase = new GetAddressByCpfUseCase();
const getAddressByCpfController = new GetAddressByCpfController(
    getAddressByCpfUseCase
);
export { getAddressByCpfController };
