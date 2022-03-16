import axios, { AxiosRequestConfig } from "axios";

import { apiGoogleMapsRepositoryChaves } from "../config";

const GoogleMapsApi = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api",
});

const AuthorizationHeaders = async (config: AxiosRequestConfig) => {
    const requestConfig = config;
    const key = await apiGoogleMapsRepositoryChaves.getKey();
    requestConfig.params = { ...requestConfig.params, key };
    return requestConfig;
};
GoogleMapsApi.interceptors.request.use(AuthorizationHeaders);

export { GoogleMapsApi };
