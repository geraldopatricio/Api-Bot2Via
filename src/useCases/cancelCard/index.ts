import { CancelCardController } from "./CancelCardController";
import { CancelCardUseCase } from "./cancelCardUseCase";

const cancelCardUseCase = new CancelCardUseCase();
const cancelCardController = new CancelCardController(cancelCardUseCase);
export { cancelCardController };
