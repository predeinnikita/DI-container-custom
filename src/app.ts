import {Inject} from "./dependecy-injection/decorators/inject.decorator";
import {ILogger} from "./interfaces/logger.interface";
import {getLoggerInjectionToken} from "./services/logger";

export class App {
    @Inject(getLoggerInjectionToken()) private _logger: ILogger;

    public start(): void {
        let seconds: number = 0;
        setInterval(() => {
            this._logger.log(`${++seconds} sec. has passed`)
        }, 1000)
    }
}
