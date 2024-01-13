import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CamerasModule } from './cameras/cameras.module';
import { BrandsModule } from './brands/brands.module';
import { CameraTypesModule } from './camera-types/camera-types.module';

@Module({
  imports: [PrismaModule, CamerasModule, BrandsModule, CameraTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
