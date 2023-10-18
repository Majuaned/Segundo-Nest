import {IsNotEmpty, IsNumber, IsString} from 'class-validator'

/* 
Un producto tiene:
  private products = [
    {
        id: uuidv4(),
        name:'alo',
        description:'comida',
        stock: 10
      }
*/

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsString()
    description: string

    @IsNotEmpty()
    @IsNumber()
    stock: number
}
