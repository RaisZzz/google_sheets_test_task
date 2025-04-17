import { Module } from '@nestjs/common';
import { GoogleSheetsModule } from './google_sheets/google_sheets.module';

@Module({
  imports: [GoogleSheetsModule],
})
export class AppModule {}
