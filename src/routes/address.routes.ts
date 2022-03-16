import { Router } from "express";

import { getAddressByCpfController } from "../useCases/getAddressByCpf";
import { searchAddressController } from "../useCases/searchAddress";
import { updateAddressByCpfController } from "../useCases/updateAddressByCpf";

const addressRoutes = Router();
addressRoutes.get("/", (request, response, next) => {
    return searchAddressController.handle(request, response, next);
});
addressRoutes.get("/bycpf/:cpf", (request, response, next) => {
    return getAddressByCpfController.handle(request, response, next);
});

addressRoutes.post("/bycpf/:cpf", (request, response, next) => {
    return updateAddressByCpfController.handle(request, response, next);
});
export { addressRoutes };
