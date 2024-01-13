import { Test, TestingModule } from '@nestjs/testing';
import { CameraTypesService } from './camera-types.service';

describe('CameraTypesService', () => {
  let service: CameraTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CameraTypesService],
    }).compile();

    service = module.get<CameraTypesService>(CameraTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
