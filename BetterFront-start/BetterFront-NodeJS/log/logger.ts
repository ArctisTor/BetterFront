import winston, { format } from 'winston';
import fs from 'fs';
import path from 'path';
import pkg from '../package.json' with { type: 'json' };

const { name, version } = pkg;

// Always use the same directory for logs
const logDir = path.resolve('NodeJS-logs');
const infoDir = path.join(logDir, 'log');
const errorDir = path.join(logDir, 'error');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export class Logger {
  private getToday(): string {
    return new Date().toISOString().slice(0, 10);
  }

  private createLogger() {
    return winston.createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.printf(({ timestamp, level, message, stack }) =>
          `${timestamp} [${level}]: ${stack || message}`
        )
      ),
      transports: [
        new winston.transports.File({
          filename: path.join(infoDir, `info-${name}-${version}-${this.getToday()}.log`),
          level: 'info',
        }),
        new winston.transports.File({
          filename: path.join(errorDir, `error-${name}-${version}-${this.getToday()}.log`),
          level: 'error',
        }),
        new winston.transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(({ timestamp, level, message }) =>
              `${timestamp} [${level}]: ${message}`
            )
          ),
        }),
      ],
    });
  }

  private log = this.createLogger();

  public logInfo(message: string | object): void {
    this.log.info(typeof message === 'object' ? JSON.stringify(message) : message);
  }

  public logError(message: string | object): void {
    this.log.error(typeof message === 'object' ? JSON.stringify(message) : message);
  }
}

export const logger = new Logger();
