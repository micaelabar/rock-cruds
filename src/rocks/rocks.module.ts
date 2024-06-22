import { Module } from '@nestjs/common';
import { RocksService } from './rocks.service';
import { RocksController } from './rocks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RocksController],
  providers: [RocksService],
  imports: [PrismaModule],
})
export class RocksModule {}
