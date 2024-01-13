import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCameraTypeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  readonly name: string;
}
