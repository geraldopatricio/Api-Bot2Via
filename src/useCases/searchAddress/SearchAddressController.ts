import { NextFunction, Request, Response } from "express";

import { SearchAddressUseCase } from "./SearchAddressUseCase";

class SearchAddressController {
    constructor(private searchAddressUseCase: SearchAddressUseCase) {}
    // eslint-disable-next-line consistent-return
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { search } = request.query as any;

            const address = await this.searchAddressUseCase.execute({
                search,
            });

            return response.json(address).send();
        } catch (error) {
            next(error);
        }
    }
}

export { SearchAddressController };
