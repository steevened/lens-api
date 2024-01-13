import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCameraDto {
  @ApiProperty({
    minLength: 3,
    type: String,
    default: 'Camera name',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  readonly brandId: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  readonly typeId: number;
}
