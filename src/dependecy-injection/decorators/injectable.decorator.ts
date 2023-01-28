import { container } from '../DIContainer'

/**
 *
 * @param token - DI-токен
 * @description Декоратор, который создает инстанс класса и добавляет его в DI-контейнер
 * @example
 * ⠀@Injectable()
 * ⠀export class AuthService() {
 *  ⠀   ...
 * ⠀}
 */
export function Injectable(token: string): Function {
    return function(target: { new (): any }): void {
        container.addInstance(token, new target())
    };
}
