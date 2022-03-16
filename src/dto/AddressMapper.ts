import { AppError } from "../errors/AppError";
import { IAddress } from "../models/Address";

class AddressMapper {
    GoogleAddresstoAddress(data: Array<any>) {
        const rua = data.find((ele) => ele.types.find((el) => el === "route"));

        const bairro = data.find((ele) =>
            ele.types.find((el) => el === "sublocality_level_1")
        );

        const cidade = data.find((ele) =>
            ele.types.find((el) => el === "administrative_area_level_2")
        );

        const estado = data.find((ele) =>
            ele.types.find((el) => el === "administrative_area_level_1")
        );
        const pais = data.find((ele) =>
            ele.types.find((el) => el === "country")
        );

        const cep = data.find((ele) =>
            ele.types.find((el) => el === "postal_code")
        );

        if (!cep) {
            throw new AppError({
                message: "Número da casa deve ser fornecido",
                statusCode: 400,
            });
        }
        const cep_only_numbers: string = cep.long_name.replace(/\D/g, "");
        if (cep_only_numbers.length !== 8) {
            throw new AppError({
                message: "Número da casa deve ser fornecido",
                statusCode: 400,
            });
        }
        const address: IAddress = {
            rua: rua && rua.long_name,
            bairro: bairro ? bairro.long_name : null,
            cidade: cidade && cidade.long_name,
            estado: estado && estado.long_name,
            cep: cep_only_numbers,
        };

        return address;
    }

    pierAddressToAddress(data: any) {
        const address: IAddress = {
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.uf,
            pais: data.pais,
            cep: data.cep,
            numero: data.numero,
            complemento: data.complemento,
        };
        return address;
    }
}

export { AddressMapper };
