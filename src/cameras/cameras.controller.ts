import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CameraEntity } from './entities/camera.entity';

@Controller('cameras')
@ApiTags('Cameras')
export class CamerasController {
  constructor(private readonly camerasService: CamerasService) {}

  @Post()
  @ApiCreatedResponse({ type: CameraEntity })
  async create(@Body() createCameraDto: CreateCameraDto) {
    const camera = await this.camerasService.create(createCameraDto);
    if (!camera) {
      throw new BadRequestException('Camera could not be created');
    }
    return camera;
  }

  @Get()
  @ApiOkResponse({ type: [CameraEntity] })
  async findAll() {
    const cameras = await this.camerasService.findAll();
    if (!cameras) {
      throw new NotFoundException('Cameras not found');
    }
    return cameras;
  }

  @Get(':id')
  @ApiOkResponse({ type: CameraEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const camera = await this.camerasService.findOne(id);
    if (!camera) {
      throw new NotFoundException(`Camera #${id} not found`);
    }
    return camera;
  }

  @Get('/slug/:slug')
  @ApiOkResponse({ type: CameraEntity })
  async findOneBySlug(@Param('slug') slug: string) {
    const camera = await this.camerasService.findOneBySlug(slug);
    if (!camera) {
      throw new NotFoundException(`Camera ${slug} not found`);
    }
    return camera;
  }

  @Patch(':id')
  @ApiOkResponse({ type: CameraEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCameraDto: UpdateCameraDto,
  ) {
    const cameraToUpdate = await this.findOne(id);
    const updatedCamera = await this.camerasService.update(
      cameraToUpdate.id,
      updateCameraDto,
    );
    if (!updatedCamera) {
      throw new InternalServerErrorException('Camera could not be updated');
    }
    return updatedCamera;
  }

  @Delete(':id')
  @ApiOkResponse({ type: CameraEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const cameraToDelete = await this.findOne(id);
    const deletedCamera = await this.camerasService.remove(cameraToDelete.id);
    if (!deletedCamera) {
      throw new InternalServerErrorException('Camera could not be deleted');
    }
    return deletedCamera;
  }
}
