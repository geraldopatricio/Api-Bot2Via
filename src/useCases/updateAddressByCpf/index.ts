import { UpdateAddressByCpfController } from "./UpdateAddressByCpfController";
import { UpdateAddressByCpfUseCase } from "./UpdateAddressByCpfUseCase";

const updateAddressByCpfUseCase = new UpdateAddressByCpfUseCase();

const updateAddressByCpfController = new UpdateAddressByCpfController(
    updateAddressByCpfUseCase
);

export { updateAddressByCpfController };
