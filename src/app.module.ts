import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CamerasModule } from './cameras/cameras.module';

@Module({
  imports: [PrismaModule, CamerasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
