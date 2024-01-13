import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({
      data: {
        ...createBrandDto,
        slug: createBrandDto.name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: number) {
    return this.prisma.brand.findUnique({
      where: {
        id,
      },
    });
  }

  findOneBySlug(slug: string) {
    return this.prisma.brand.findUnique({
      where: {
        slug,
      },
    });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: { id },
      data: {
        ...updateBrandDto,
        slug: updateBrandDto.name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  remove(id: number) {
    return this.prisma.brand.delete({
      where: { id },
    });
  }
}
