import axios from "axios";

import { GoogleMapsApi } from "../../apis";
import { AddressMapper } from "../../dto/AddressMapper";
import { AppError } from "../../errors/AppError";

class SearchAddressUseCase {
    private googleApi = GoogleMapsApi;
    async execute({ search }: { search: string }) {
        if (!search) {
            throw new AppError({
                message: "query search não encontrada",
                statusCode: 400,
            });
        }
        const response_find_place = await this.googleApi.get(
            `/place/findplacefromtext/json?input=${search}&types=geocode&inputtype=textquery`
        );
        if (response_find_place.data.status === "ZERO_RESULTS") {
            throw new AppError({
                message: "Localidade não encontrada",
                statusCode: 404,
            });
        }
        const { place_id } = response_find_place.data.candidates[0];

        const response_place_details = await this.googleApi.get(
            `/place/details/json?place_id=${place_id}&language=pt-BR&fields=address_component,name`
        );

        const addressMapper = new AddressMapper();
        const address = addressMapper.GoogleAddresstoAddress(
            response_place_details.data.result.address_components
        );

        if (
            address.cep &&
            (!address.bairro ||
                !address.cidade ||
                !address.estado ||
                !address.rua)
        ) {
            const { data } = await axios.get(
                `https://viacep.com.br/ws/${address.cep}/json/`
            );
            address.bairro = data.bairro;
            address.cidade = data.localidade;
            address.estado = data.uf;
            address.rua = data.logradouro;
        }

        return address;
    }
}

export { SearchAddressUseCase };
