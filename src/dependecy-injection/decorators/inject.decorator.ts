import {container} from "../DIContainer";

/**
 *
 * @param token - DI-токен
 * @description Декоратор, позволяющий внедрять инстанс класса по его DI-токену
 * @example
 * ⠀@Inject('AuthService') private auth: AuthService
 */
export function Inject(token: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            get: () => container.resolve(token),
            enumerable: true,
            configurable: true
        });
    };
}
