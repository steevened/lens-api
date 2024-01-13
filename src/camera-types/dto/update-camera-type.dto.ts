import { PartialType } from '@nestjs/swagger';
import { CreateCameraTypeDto } from './create-camera-type.dto';

export class UpdateCameraTypeDto extends PartialType(CreateCameraTypeDto) {}
