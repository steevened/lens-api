import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BrandEntity } from './entities/brand.entity';

@Controller('brands')
@ApiTags('Brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiCreatedResponse({ type: BrandEntity })
  async create(@Body() createBrandDto: CreateBrandDto) {
    const brand = await this.brandsService.create(createBrandDto);
    if (!brand) {
      throw new BadRequestException('Brand could not be created');
    }

    return brand;
  }

  @Get()
  @ApiOkResponse({ type: [BrandEntity] })
  async findAll() {
    const brands = await this.brandsService.findAll();
    if (!brands) {
      throw new NotFoundException('Brands not found');
    }
    return brands;
  }

  @Get(':id')
  @ApiOkResponse({ type: BrandEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const brand = await this.brandsService.findOne(id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  @Get('/slug/:slug')
  @ApiOkResponse({ type: BrandEntity })
  async findOneBySlug(@Param('slug') slug: string) {
    const brand = await this.brandsService.findOneBySlug(slug);
    if (!brand) {
      throw new NotFoundException(`Brand ${slug} not found`);
    }
    return brand;
  }

  @Patch(':id')
  @ApiOkResponse({ type: BrandEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    const brandToUpdate = await this.findOne(id);
    const updatedBrand = await this.brandsService.update(
      brandToUpdate.id,
      updateBrandDto,
    );
    if (!updatedBrand) {
      throw new BadRequestException('Brand could not be updated');
    }
    return updatedBrand;
  }

  @Delete(':id')
  @ApiOkResponse({ type: BrandEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const BrandToDelete = await this.findOne(id);
    const deletedBrand = await this.brandsService.remove(BrandToDelete.id);
    if (!deletedBrand) {
      throw new BadRequestException('Brand could not be deleted');
    }
    return deletedBrand;
  }
}
