import { ReissueCardController } from "./reissueCardController";
import { ReissueCardUseCase } from "./reissueCardUseCase";

const reissueCardUseCase = new ReissueCardUseCase();
const reissueCardController = new ReissueCardController(reissueCardUseCase);

export { reissueCardController };
