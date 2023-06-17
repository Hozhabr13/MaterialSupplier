import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubcategoryService } from './subcategory.service';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
