import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCameraDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  readonly brandId: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  readonly typeId: number;
}
