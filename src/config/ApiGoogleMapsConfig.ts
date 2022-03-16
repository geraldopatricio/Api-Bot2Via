import { azureKeyVaults } from "./AzureKeyVaults";

interface IGoogleMapsApiKeys {
    key: string;
}

class ApiGoogleMapsRepositoryChaves {
    private repository: IGoogleMapsApiKeys = {
        key: process.env.API_KEY_GOOGLE,
    };

    async getKey() {
        if (this.repository.key) {
            return this.repository.key;
        }

        const key = await azureKeyVaults.getSecret(
            process.env.KEYVAULT_NAME_KEY_GOOGLE_API
        );
        this.repository.key = key;
        return this.repository.key;
    }
}
export { ApiGoogleMapsRepositoryChaves };
