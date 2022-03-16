/* eslint-disable import/first */

// eslint-disable-next-line import-helpers/order-imports
import dotenv from "dotenv";

dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import swaggerUI from "swagger-ui-express";

import { AppError } from "./errors/AppError";
import { addressRoutes } from "./routes/address.routes";
import { card } from "./routes/card.routes";
import SwaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(SwaggerFile));

app.use("/address", addressRoutes);
app.use("/cards", card);
app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                message: error.message,
            });
        }
        console.log(error);
        return response.status(500).json({
            status: "error",
            message: `Internal server error`,
        });
    }
);
app.listen(process.env.PORT || 3000);
