import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { v4 as uuidv4 } from 'uuid';
uuidv4()

@Controller('productos') // productos vendría a ser la ruta!!!
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // private products = [
  //   {
  //     id: uuidv4(),
  //     name:'alo',
  //     description:'comida',
  //     stock: 10
  //   },
  //   {
  //     id:uuidv4(),
  //     name:'zuca',
  //     description:'comida',
  //     stock: 20
  //     },
  //     {
  //       id:uuidv4(),
  //       name:'yelba',
  //       description:'comida',
  //       stock: 30
  //     },
  //     {
  //       id: 1,
  //       name:'chodizo',
  //       description:'comida',
  //       stock: 5555555555555555
  //     },
  //     {
  //       id: 2,
  //       name:'almejita',
  //       description:'comida',
  //       stock: 45
  //     },
  //     {
  //       id: 3,
  //       name:'carne',
  //       description:'comida',
  //       stock: 800
  //     },
  // ]

  // getHello se crea y define en productos.service.ts, es decir, aca se usa ese servicio, se lo llama
  @Get('hola')
    getHello(): string {
    return this.productosService.getHello();
  }

  // *******  MOSTRAR TODOS LOS PRODUCTOS   *********
  // @Get()  // productos vendría a ser la ruta!!!
  //   getProd(): any{
  //     console.log('http://localhost:4000/productos')
  //     return this.products;
  //   }

  // ******** ENCONTRAR UN PRODUCTO POR ID......
  // @Get(':id')
  // getById(@Param('id') id: number): any {
  //   //esto retornará los id con strings (generador por uuid)
  //   // return this.products.find(producto => producto.id === id)
  //   //esto retornará los id numéricos, pq el id se transforma en numérico 
  //   return this.products.find(producto => producto.id === +id)
  // }
    
  // **********  AGREGAR UN PRODUCTO  ***************
  // @Post()
  //   sendData(@Body() datos): any {
  //     this.products.push(datos)
  //     return this.products
  //   }


  @Post()
  // Se obtienen los parámetros del body, usando el modelo de CreateProductoDto, que vendría a ser como el model.
  create(@Body() {name, description, stock}: CreateProductoDto) {
    return this.productosService.create(name, description, stock);
  }

  @Get()
  findAll() {
    console.log('http://localhost:4000/productos')
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(id, updateProductoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productosService.remove(+id);
  // }
}

