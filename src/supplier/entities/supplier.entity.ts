import { IsString } from 'class-validator';

export class Supplier {
  @IsString()
  id: string;
}
