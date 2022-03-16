import { Request, Response, NextFunction } from "express";

import { ReissueCardUseCase } from "./reissueCardUseCase";

class ReissueCardController {
    constructor(private reissueCard: ReissueCardUseCase) {}

    // eslint-disable-next-line consistent-return
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params;
            const result = await this.reissueCard.execute({ idCartao: id });

            return response.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export { ReissueCardController };
