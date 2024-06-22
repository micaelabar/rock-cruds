import { Test, TestingModule } from '@nestjs/testing';
import { RocksController } from './rocks.controller';
import { RocksService } from './rocks.service';

describe('RocksController', () => {
  let controller: RocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RocksController],
      providers: [RocksService],
    }).compile();

    controller = module.get<RocksController>(RocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
