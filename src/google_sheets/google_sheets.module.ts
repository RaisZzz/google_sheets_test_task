import { Module } from '@nestjs/common';
import { GoogleSheetsService } from './google_sheets.service';
import { GoogleSheetsController } from './google_sheets.controller';

@Module({
  providers: [GoogleSheetsService],
  controllers: [GoogleSheetsController],
})
export class GoogleSheetsModule {}
