import { Router } from "express";

import { cancelCardController } from "../useCases/cancelCard";
import { reissueCardController } from "../useCases/reissueCard";

const card = Router();

card.post("/:id/cancel", (request, response, next) => {
    return cancelCardController.handle(request, response, next);
});

card.post("/:id/reissue", (request, response, next) => {
    return reissueCardController.handle(request, response, next);
});

export { card };
