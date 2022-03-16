import { Request, Response, NextFunction } from "express";

import { AppError } from "../../errors/AppError";
import { CancelCardUseCase } from "./cancelCardUseCase";

class CancelCardController {
    constructor(private cancelCardUseCase: CancelCardUseCase) {}
    // eslint-disable-next-line consistent-return
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params;
            const { statusCartaoId, observacao } = request.body;
            if (!statusCartaoId || !observacao) {
                throw new AppError({
                    message: "Campos statusCartaoID e observacao faltando",
                    statusCode: 400,
                });
            }
            console.log(id, statusCartaoId, observacao);
            await this.cancelCardUseCase.execute({
                idCartao: Number(id),
                statusCartaoId,
                observacao,
            });

            return response.send();
        } catch (error) {
            next(error);
        }
    }
}

export { CancelCardController };
