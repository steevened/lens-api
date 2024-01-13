import { Camera } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CameraEntity implements Camera {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  brandId: number;
}
