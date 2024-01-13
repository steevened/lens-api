import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CameraEntity } from 'src/cameras/entities/camera.entity';
import { CameraTypesService } from './camera-types.service';
import { CreateCameraTypeDto } from './dto/create-camera-type.dto';
import { UpdateCameraTypeDto } from './dto/update-camera-type.dto';

@Controller('camera-types')
@ApiTags('Camera Types')
export class CameraTypesController {
  constructor(private readonly cameraTypesService: CameraTypesService) {}

  @Post()
  @ApiCreatedResponse({ type: CameraEntity })
  async create(@Body() createCameraTypeDto: CreateCameraTypeDto) {
    const cameraType = await this.cameraTypesService.create(
      createCameraTypeDto,
    );
    if (!cameraType) {
      throw new BadRequestException('camera type could not be created');
    }

    return cameraType;
  }

  @Get()
  @ApiOkResponse({ type: [CameraEntity] })
  async findAll() {
    const cameraTypes = await this.cameraTypesService.findAll();
    if (!cameraTypes) {
      throw new NotFoundException('camera types not found');
    }
    return cameraTypes;
  }

  @Get(':id')
  @ApiOkResponse({ type: CameraEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const cameraType = await this.cameraTypesService.findOne(id);
    if (!cameraType) {
      throw new NotFoundException(`camera type #${id} not found`);
    }
    return cameraType;
  }

  @Get('/slug/:slug')
  @ApiOkResponse({ type: CameraEntity })
  async findOneBySlug(@Param('slug') slug: string) {
    const cameraType = await this.cameraTypesService.findOneBySlug(slug);
    if (!cameraType) {
      throw new NotFoundException(`camera type ${slug} not found`);
    }
    return cameraType;
  }

  @Patch(':id')
  @ApiOkResponse({ type: CameraEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCameraTypeDto: UpdateCameraTypeDto,
  ) {
    const cameraTypeToUpdate = await this.findOne(id);
    const updatedCameraType = await this.cameraTypesService.update(
      cameraTypeToUpdate.id,
      updateCameraTypeDto,
    );
    if (!updatedCameraType) {
      throw new BadRequestException('cameraType could not be updated');
    }
    return updatedCameraType;
  }

  @Delete(':id')
  @ApiOkResponse({ type: CameraEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const cameraTypeToDelete = await this.findOne(id);
    const deletedCameraType = await this.cameraTypesService.remove(
      cameraTypeToDelete.id,
    );
    if (!deletedCameraType) {
      throw new BadRequestException('cameraType could not be deleted');
    }
    return deletedCameraType;
  }
}
