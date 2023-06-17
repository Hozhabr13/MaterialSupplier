import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private prisma: PrismaService) {}

  create(createSubcategoryDto: CreateSubcategoryDto) {
    return this.prisma.subCategory.create({ data: createSubcategoryDto });
  }

  findAll() {
    return this.prisma.subCategory.findMany();
  }

  update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.prisma.subCategory.updateMany({
      where: { id },
      data: updateSubcategoryDto,
    });
  }
}
