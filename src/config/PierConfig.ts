import { azureKeyVaults } from "./AzureKeyVaults";

interface IPierKeys {
    url?: string;
    access_token?: string;
    client_id?: string;
}

class PierRepositoryChaves {
    private repository: IPierKeys = {
        url: process.env.PIER_URL,
        access_token: process.env.PIER_TOKEN,
        client_id: process.env.PIER_CLIENT_ID,
    };
    async getPierConfig() {
        let url: string;
        let access_token: string;
        let client_id: string;
        if (
            this.repository.url &&
            this.repository.access_token &&
            this.repository.client_id
        ) {
            url = this.repository.url;
            access_token = this.repository.access_token;
            client_id = this.repository.client_id;
        } else {
            [url, access_token, client_id] = await Promise.all([
                azureKeyVaults.getSecret(process.env.KEYVAULT_NAME_PIER_ULR),
                azureKeyVaults.getSecret(process.env.KEYVAULT_NAME_PIER_TOKEN),
                azureKeyVaults.getSecret(
                    process.env.KEYVAULT_NAME_PIER_CLIENT_ID
                ),
            ]);

            this.repository = {
                ...this.repository,
                url,
                access_token,
                client_id,
            };
        }

        return {
            url,
            access_token,
            client_id,
        };
    }
}

export { PierRepositoryChaves };
