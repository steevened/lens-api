import { Injectable } from '@nestjs/common';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CamerasService {
  constructor(private prismaService: PrismaService) {}

  create(createCameraDto: CreateCameraDto) {
    const slug = createCameraDto.name.toLowerCase().replace(' ', '-');

    return this.prismaService.camera.create({
      data: {
        ...createCameraDto,
        slug,
      },
    });
  }

  findAll() {
    return this.prismaService.camera.findMany();
  }

  findOne(id: number) {
    return this.prismaService.camera.findUnique({
      where: {
        id,
      },
    });
  }

  findOneBySlug(slug: string) {
    return this.prismaService.camera.findUnique({
      where: {
        slug,
      },
    });
  }

  update(id: number, updateCameraDto: UpdateCameraDto) {
    return this.prismaService.camera.update({
      where: { id },
      data: {
        ...updateCameraDto,
        slug: updateCameraDto.name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  remove(id: number) {
    return this.prismaService.camera.delete({
      where: { id },
    });
  }
}
