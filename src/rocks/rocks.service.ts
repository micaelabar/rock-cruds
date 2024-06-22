import { Injectable } from '@nestjs/common';
import { CreateRockDto } from './dto/create-rock.dto';
import { UpdateRockDto } from './dto/update-rock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RocksService {
  constructor(private prisma: PrismaService) {}
  create(createRockDto: CreateRockDto) {
    return 'This action adds a new rock';
  }

  findAllAlive() {
    return this.prisma.rock.findMany({
      where: { extinct: false },
    });
  }

  findAllExtinct() { 
    return this.prisma.rock.findMany({   
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.rock.findUnique({
      where: {id},
    })
  }

  update(id: number, updateRockDto: UpdateRockDto) {
    return this.prisma.rock.update({
      where: {id},
      data: updateRockDto,
    });
  }

  remove(id: number) {
    return this.prisma.rock.delete({
      where: { id },
    })
  }
}
