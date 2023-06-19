import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}

  create(createSupplierDto: CreateSupplierDto) {
    const { name } = createSupplierDto;

    return this.prisma.supplier.create({
      data: {
        name,
      },
    });
  }

  async findAll() {
    const supplier = await this.prisma.supplier.findMany();
    if (supplier) return supplier;
    throw new NotFoundException();
  }
}
