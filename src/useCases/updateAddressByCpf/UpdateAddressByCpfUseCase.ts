import { PierApi } from "../../apis";
import { AppError } from "../../errors/AppError";
import { IAddress } from "../../models/Address";

interface IProps {
    cpf: string;
    endereco: IAddress;
}

class UpdateAddressByCpfUseCase {
    private pierApi = PierApi;

    async execute({ cpf, endereco }: IProps) {
        try {
            const response = await this.pierApi.get(`/pessoas?cpf=${cpf}`);
            const persons = response.data.content;
            const person = persons[0];
            const id_pessoa = person.id;

            const response_endereco = await this.pierApi.get(
                `/enderecos?idPessoa=${id_pessoa}`
            );

            const endereco_antigo = response_endereco.data.content[0];
            const endereco_id = endereco_antigo.id;
            const novo_endereco = {
                ...endereco_antigo,
                logradouro: endereco.rua,
                numero: endereco.numero,
                complemento: endereco.complemento,
                bairro: endereco.bairro,
                cep: endereco.cep,
                uf: endereco.estado,
                cidade: endereco.cidade,
            };
            const re = await this.pierApi.put(`/enderecos`, null, {
                params: {
                    ...novo_endereco,
                    id: endereco_id,
                },
            });
        } catch (error) {
            if (error.isAxiosError) {
                console.log(error.response.data);
                throw new AppError({
                    message: "Error ao atualizar endereço",
                    statusCode: 400,
                });
            }
        }
    }
}

export { UpdateAddressByCpfUseCase, IProps };
