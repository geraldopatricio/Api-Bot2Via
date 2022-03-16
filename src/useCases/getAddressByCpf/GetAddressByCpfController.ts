import { Request, Response, NextFunction } from "express";

import { GetAddressByCpfUseCase } from "./GetAddressByCpfUseCase";

class GetAddressByCpfController {
    constructor(private getAddressByCpfUseCase: GetAddressByCpfUseCase) {}

    // eslint-disable-next-line consistent-return
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { cpf } = request.params;
            // console.log(request.params);
            const result = await this.getAddressByCpfUseCase.execute({ cpf });

            return response.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export { GetAddressByCpfController };
