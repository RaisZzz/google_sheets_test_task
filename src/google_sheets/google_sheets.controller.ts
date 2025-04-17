import { Controller, Post } from '@nestjs/common';
import { GoogleSheetsService } from './google_sheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  @Post('insert_data')
  insertData(): any {
    return this.googleSheetsService.insertDataToGoogleSheets();
  }
}
