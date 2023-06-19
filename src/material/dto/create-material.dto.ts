import { IsNumber, IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  name: string;

  @IsString()
  categoryId: string;

  @IsString()
  symbol: string;

  @IsString()
  supplierId: string;

  @IsNumber()
  stock: number;
}
