import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RocksService } from './rocks.service';
import { CreateRockDto } from './dto/create-rock.dto';
import { UpdateRockDto } from './dto/update-rock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rocks')
@ApiTags('rocks')
export class RocksController {
  constructor(private readonly rocksService: RocksService) {}

  @Post()
  create(@Body() createRockDto: CreateRockDto) {
    return this.rocksService.create(createRockDto);
  }

  @Get()
  findAll() {
    return this.rocksService.findAllAlive();
  }

  @Get('extinct')
  findAllExtinct() {
    return this.rocksService.findAllExtinct();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRockDto: UpdateRockDto) {
    return this.rocksService.update(+id, updateRockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rocksService.remove(+id);
  }
}
