import { NextFunction, Request, Response } from "express";

import { IProps, UpdateAddressByCpfUseCase } from "./UpdateAddressByCpfUseCase";

class UpdateAddressByCpfController {
    constructor(private updateAddressByCpfUseCase: UpdateAddressByCpfUseCase) {}

    // eslint-disable-next-line consistent-return
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { cpf } = request.params;
            const {
                rua,
                bairro,
                cidade,
                estado,
                pais,
                numero,
                cep,
                complemento,
            } = request.body;
            const props: IProps = {
                cpf,
                endereco: {
                    rua,
                    bairro,
                    cidade,
                    estado,
                    pais,
                    numero,
                    cep,
                    complemento,
                },
            };
            await this.updateAddressByCpfUseCase.execute(props);

            return response.send();
        } catch (error) {
            next(error);
        }
    }
}

export { UpdateAddressByCpfController };
