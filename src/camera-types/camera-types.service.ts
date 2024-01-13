import { Injectable } from '@nestjs/common';
import { CreateCameraTypeDto } from './dto/create-camera-type.dto';
import { UpdateCameraTypeDto } from './dto/update-camera-type.dto';

@Injectable()
export class CameraTypesService {
  create(createCameraTypeDto: CreateCameraTypeDto) {
    return 'This action adds a new cameraType';
  }

  findAll() {
    return `This action returns all cameraTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cameraType`;
  }

  update(id: number, updateCameraTypeDto: UpdateCameraTypeDto) {
    return `This action updates a #${id} cameraType`;
  }

  remove(id: number) {
    return `This action removes a #${id} cameraType`;
  }
}
