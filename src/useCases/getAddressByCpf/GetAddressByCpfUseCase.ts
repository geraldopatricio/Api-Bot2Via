import { PierApi } from "../../apis";
import { AddressMapper } from "../../dto/AddressMapper";
import { AppError } from "../../errors/AppError";

class GetAddressByCpfUseCase {
    private pierApi = PierApi;
    // eslint-disable-next-line consistent-return
    async execute({ cpf }: { cpf: string }) {
        try {
            const response = await this.pierApi.get(`/pessoas?cpf=${cpf}`);

            const persons = response.data.content;
            const person = persons[0];
            const id_pessoa = person.id;

            const response_endereco = await this.pierApi.get(
                `/enderecos?idPessoa=${id_pessoa}`
            );

            const endereco = response_endereco.data.content[0];

            const addressMapper = new AddressMapper();

            const address = addressMapper.pierAddressToAddress(endereco);
            return address;
        } catch (error) {
            if (error.isAxiosError) {
                throw new AppError({
                    message: "Endereço não encontrado",
                    statusCode: 404,
                });
            }
        }
    }
}

export { GetAddressByCpfUseCase };
