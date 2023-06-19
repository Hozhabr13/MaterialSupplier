import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) {}

  async create(createMaterialDto: CreateMaterialDto) {
    const { name, categoryId, symbol, supplierId, stock } = createMaterialDto;
    try {
      return await this.prisma.material.create({
        data: {
          name,
          categoryId,
          symbol,
          stock,
          supplierId,
          suppliers: {
            create: [
              {
                supplier: {
                  connect: {
                    id: supplierId,
                  },
                },
              },
            ],
          },
        },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async findAll(id: string) {
    return await this.prisma.material.findMany({
      where: {
        suppliers: {
          some: {
            supplier: {
              id,
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const material = await this.prisma.material.findUnique({
      where: {
        id,
      },
    });
    if (material) return material;

    throw new NotFoundException();
  }

  async update(id: string, updateMaterialDto: UpdateMaterialDto) {
    try {
      return await this.prisma.material.update({
        where: {
          id,
        },
        data: updateMaterialDto,
      });
    } catch {
      throw new BadRequestException();
    }
  }
}
