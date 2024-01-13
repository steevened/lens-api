import { ApiProperty } from '@nestjs/swagger';
import { Camera } from '@prisma/client';

export class CameraEntity implements Camera {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  brandId: number;

  @ApiProperty()
  typeId: number;
}
