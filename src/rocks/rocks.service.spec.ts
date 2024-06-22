import { Test, TestingModule } from '@nestjs/testing';
import { RocksService } from './rocks.service';

describe('RocksService', () => {
  let service: RocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RocksService],
    }).compile();

    service = module.get<RocksService>(RocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
