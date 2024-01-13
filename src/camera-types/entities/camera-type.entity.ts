import { ApiProperty } from '@nestjs/swagger';
import { CameraType } from '@prisma/client';

export class CameraTypeEntity implements CameraType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;
}
