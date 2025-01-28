import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LessonsController } from './lessons/lessons.controller';
import { LessonsService } from './lessons/lessons.service';

@Module({
  imports: [
    CacheModule.register({
      max: 100,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
  ],
  controllers: [AppController, LessonsController],
  providers: [AppService, PrismaService, LessonsService],
})
export class AppModule {}