import { PierApi } from "../../apis";
import { AppError } from "../../errors/AppError";

class CancelCardUseCase {
    private pierApi = PierApi;
    async execute({
        idCartao,
        statusCartaoId,
        observacao,
    }: {
        idCartao: number;
        statusCartaoId: number;
        observacao: string;
    }) {
        try {
            await this.pierApi.post(`/cartoes/${idCartao}/cancelar`, null, {
                params: {
                    id_status: statusCartaoId,
                    observacao,
                },
            });
        } catch (error) {
            if (error.isAxiosError) {
                throw new AppError({
                    message: "Cartão já se encontra cancelado",
                    statusCode: 400,
                });
            }
        }
    }
}
export { CancelCardUseCase };

// 6023177
