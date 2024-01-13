import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CamerasModule } from './cameras/cameras.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [PrismaModule, CamerasModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
