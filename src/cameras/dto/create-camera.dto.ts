import { ApiProperty } from '@nestjs/swagger';

export class CreateCameraDto {
  @ApiProperty()
  name: string;
}
