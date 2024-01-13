import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CameraTypesService } from './camera-types.service';
import { CreateCameraTypeDto } from './dto/create-camera-type.dto';
import { UpdateCameraTypeDto } from './dto/update-camera-type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('camera-types')
@ApiTags('Camera Types')
export class CameraTypesController {
  constructor(private readonly cameraTypesService: CameraTypesService) {}

  @Post()
  create(@Body() createCameraTypeDto: CreateCameraTypeDto) {
    return this.cameraTypesService.create(createCameraTypeDto);
  }

  @Get()
  findAll() {
    return this.cameraTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cameraTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCameraTypeDto: UpdateCameraTypeDto,
  ) {
    return this.cameraTypesService.update(+id, updateCameraTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cameraTypesService.remove(+id);
  }
}
