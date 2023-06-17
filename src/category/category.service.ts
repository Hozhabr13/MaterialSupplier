import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubcategoryService } from './subcategory/subcategory.service';
import { Category } from '@prisma/client';
import { UpdateSubcategoryDto } from './subcategory/dto/update-subcategory.dto';

@Injectable()
export class CategoryService {
  @Inject() subcategoryService: SubcategoryService;

  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    if (createCategoryDto.parent_id) {
      return this.subcategoryService.create(createCategoryDto);
    } else {
      return this.prisma.category.create({ data: createCategoryDto });
    }
  }

  async findAllCategoryAndSubCategoriesById(id: string) {
    const category = await this.findOne(id);
    const subCategories = await this.prisma.subCategory.findMany({
      where: { parent_id: id },
    });

    const concatedData = { ...category, subCategories: subCategories };

    return concatedData;
  }

  async findAllCategoryAndSubCategories() {
    const categories = await this.findAll();
    const subCategories = await this.subcategoryService.findAll();
    let reformmedData = [];
    let subCategory = [];

    for (const category of categories) {
      subCategory = subCategories.filter((item: Category) => {
        return category.id === item.parent_id;
      });

      subCategory = reformmedData = [
        ...reformmedData,
        {
          ...category,
          subCategories: subCategory,
        },
      ];
    }

    return reformmedData;
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: string, updateCategory: UpdateSubcategoryDto) {
    await this.prisma.category.update({
      where: { id },
      data: { ...updateCategory },
    });

    await this.subcategoryService.update(id, updateCategory);

    return await this.findAllCategoryAndSubCategoriesById(id);
  }
}
