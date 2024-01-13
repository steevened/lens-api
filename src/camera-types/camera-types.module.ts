import { Module } from '@nestjs/common';
import { CameraTypesService } from './camera-types.service';
import { CameraTypesController } from './camera-types.controller';

@Module({
  controllers: [CameraTypesController],
  providers: [CameraTypesService]
})
export class CameraTypesModule {}
