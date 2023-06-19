import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MaterialModule } from './material/material.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PrismaModule, MaterialModule, SupplierModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
