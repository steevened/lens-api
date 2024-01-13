import { Test, TestingModule } from '@nestjs/testing';
import { CameraTypesController } from './camera-types.controller';
import { CameraTypesService } from './camera-types.service';

describe('CameraTypesController', () => {
  let controller: CameraTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CameraTypesController],
      providers: [CameraTypesService],
    }).compile();

    controller = module.get<CameraTypesController>(CameraTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
