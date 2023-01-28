import {Injectable} from "../dependecy-injection/decorators/injectable.decorator";
import {isDevMode} from "../utils/is-dev-mode";
import {ILogger} from "../interfaces/logger.interface";

export function getLoggerInjectionToken(): string {
    return isDevMode() ? consoleLoggerInjectionToken : pageLoggerInjectionToken;
}

export const consoleLoggerInjectionToken = 'ConsoleLogger';
@Injectable(consoleLoggerInjectionToken)
export class ConsoleLogger implements ILogger {
    public log(message: string): void {
        console.log(message);
    }
}

export const pageLoggerInjectionToken = 'PageLogger';
@Injectable(pageLoggerInjectionToken)
export class PageLogger implements ILogger {
    public log(message: string): void {
        document.querySelector('#timer').innerHTML = message;
    }
}
