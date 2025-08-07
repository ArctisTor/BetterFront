import winston, { format } from 'winston';
import fs from 'fs';
import path from 'path';

import pkg from '../package.json' with { type: 'json' };
const { name, version } = pkg;

const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export class Logger {
  private today = new Date().toISOString().slice(0, 10);
  private log = winston.createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [
      new winston.transports.File({ filename: `logs/info-${name}-${version}-${this.today}.log`, level: 'info' }),
      new winston.transports.File({ filename: `logs/error-${name}-${version}-${this.today}.log`, level: 'error' }),
    ],
  });

  public logInfo(message: any): void {
    this.log.info(message);
  }

  public logError(message: any): void {
    this.log.error(message);
  }
}

// Create and export the singleton logger instance
export const logger = new Logger();
