import { Module } from '@nestjs/common';
import { CameraTypesService } from './camera-types.service';
import { CameraTypesController } from './camera-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CameraTypesController],
  providers: [CameraTypesService],
  imports: [PrismaModule],
})
export class CameraTypesModule {}
