import { Module } from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CamerasController } from './cameras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CamerasController],
  providers: [CamerasService],
  imports: [PrismaModule],
})
export class CamerasModule {}
