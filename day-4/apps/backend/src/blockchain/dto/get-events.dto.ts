import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class GetEventsDto {
  @ApiPropertyOptional({
    description: 'Cursor block to start scanning from',
    example:
      'ambil block kalian di event snowtrace contoh harus pakai kutip 50507570 ',
  })
  @IsOptional()
  @IsString()
  fromBlock?: string;

  @ApiPropertyOptional({
    description: 'Maximum block range per request',
    example: 'pilih nilai antara 1 sampai 2048 jangan pakai kutip',
  })
  @IsOptional()
  @IsNumber()
  limitBlock?: number;
}
