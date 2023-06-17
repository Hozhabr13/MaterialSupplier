import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { SubcategoryService } from './subcategory/subcategory.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, SubcategoryService],
  imports: [PrismaModule, SubcategoryModule],
})
export class CategoryModule {}
