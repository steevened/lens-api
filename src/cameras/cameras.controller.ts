import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
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
  create(@Body() createCameraDto: CreateCameraDto) {
    return this.camerasService.create(createCameraDto);
  }

  @Get()
  @ApiOkResponse({ type: [CameraEntity] })
  findAll() {
    return this.camerasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CameraEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.camerasService.findOne(id);
  }

  @Get('/slug/:slug')
  @ApiOkResponse({ type: CameraEntity })
  findOneBySlug(@Param('slug') slug: string) {
    return this.camerasService.findOneBySlug(slug);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CameraEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCameraDto: UpdateCameraDto,
  ) {
    return this.camerasService.update(id, updateCameraDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CameraEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.camerasService.remove(id);
  }
}
