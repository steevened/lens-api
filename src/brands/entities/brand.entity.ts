import { ApiProperty } from '@nestjs/swagger';
import { Brand } from '@prisma/client';

export class BrandEntity implements Brand {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;
}
