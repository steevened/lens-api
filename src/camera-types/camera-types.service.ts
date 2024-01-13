import { Injectable } from '@nestjs/common';
import { CreateCameraTypeDto } from './dto/create-camera-type.dto';
import { UpdateCameraTypeDto } from './dto/update-camera-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CameraTypesService {
  constructor(private prisma: PrismaService) {}

  create(createCameraTypeDto: CreateCameraTypeDto) {
    return this.prisma.cameraType.create({
      data: {
        ...createCameraTypeDto,
        slug: createCameraTypeDto.name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  findAll() {
    return this.prisma.cameraType.findMany();
  }

  findOne(id: number) {
    return this.prisma.cameraType.findUnique({
      where: {
        id,
      },
    });
  }

  findOneBySlug(slug: string) {
    return this.prisma.cameraType.findUnique({
      where: {
        slug,
      },
    });
  }

  update(id: number, updateCameraTypeDto: UpdateCameraTypeDto) {
    return this.prisma.cameraType.update({
      where: { id },
      data: {
        ...updateCameraTypeDto,
        slug: updateCameraTypeDto.name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  remove(id: number) {
    return this.prisma.cameraType.delete({
      where: { id },
    });
  }
}
