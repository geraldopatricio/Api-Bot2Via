import { PierApi } from "../../apis";
import { AppError } from "../../errors/AppError";

class ReissueCardUseCase {
    private pierApi = PierApi;

    // eslint-disable-next-line consistent-return
    async execute({ idCartao }: { idCartao: string }) {
        try {
            console.log("execute ", idCartao);
            const response = await this.pierApi.post(
                `/cartoes/${idCartao}/gerar-nova-via`
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            if (error.isAxiosError) {
                throw new AppError({
                    message: error.response.data.message,
                    statusCode: error.response.data.code,
                });
            }
        }
    }
}

export { ReissueCardUseCase };
