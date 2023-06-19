import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;

    return await this.prisma.category.create({
      data: {
        name,
      },
    });
  }

  async findAll() {
    const category = await this.prisma.category.findMany();
    if (category) return category;
    throw new NotFoundException();
  }
}
