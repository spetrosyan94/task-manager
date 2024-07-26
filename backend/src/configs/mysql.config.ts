import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getMySQLConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: configService.get<string>('MYSQL_HOST', 'localhost'),
  port: configService.get<number>('MYSQL_PORT', 3306),
  username: configService.get<string>('MYSQL_USERNAME', 'root'),
  password: configService.get<string>('MYSQL_PASSWORD', 'root'),
  database: configService.get<string>('MYSQL_DATABASE', 'task-manager'),
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
});
