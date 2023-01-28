export type Provider = {
    token: string;
    instance: any;
};

/**
 * @description
 * DI-контейнер, содержащий инстансы injectable-классов
 */
class Container {
    private _providers: Provider[] = [];

    public resolve(token: string): Provider {
        const provider = this._providers.find(provider => provider.token === token);
        if (!provider) {
            throw new Error(`No provider found for ${token}!`);
        }

        return provider.instance;
    }

    public addInstance(token: string, instance: any): void {
        this._providers.push({ token, instance })
    }
}

export const container = new Container();
