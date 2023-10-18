import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
uuidv4()


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private products = [
    {
      // Si no hay persistencia de datos, el id es itinerante!!!
      id: uuidv4(),
      name:'alo',
      description:'comida',
      stock: 10
    },

    {
    id:uuidv4(),
    name:'zuca',
    description:'comida',
    stock: 20
    },

    {
      id:uuidv4(),
      name:'yelba',
      description:'comida',
      stock: 30
    }
  ]

  @Get()
    getHello(): string {
    return this.appService.getHello();
  }

  // Agrego un método nuevo simplemente para probar como agregando otra ruta se agrega...
  @Get('/he')
    getProd(): string {
      return "heee";
    // return this.appService.getHello();
  }

  @Get('/productos')
    getProds(): any {
      console.log('http://localhost:4000/productos')
      return this.products;
  }

  // MÉTODO PARA INSERTAR UN PRODUCTO A LA LISTA
  @Post()
  //any se pone pq como es un post tiene q retornar un objeto
    sendData(@Body() datos): any {
      this.products.push(datos)
      return this.products;
  }

  // Get del Product con "Parseint"...................
  // @Get(':id')
  // getPro(@Param('id') id: string): any {
  //   return this.products.find(producto => producto.id === parseInt(id)) ;
  // }

  // ENCONTRAR UN PRODUCTO POR ID......
  @Get(':id')
  getPro(@Param('id') id: number): any {
    console.log('http://localhost:4000/')
    console.log('http://localhost:4000/2')
    console.log('http://localhost:4000/3')

    return this.products.find(producto => producto.id === +id);
    // para eliminar el parseint se define el id como numérico y al id del parámetro del find se le agrega un signo mas
  }

  //  MÉTODO PARA EDITAR .....
  @Put(':id')
    putPro(@Param('id') id: number, @Body() datos): any{
      return this.products.map(e=>{
        if (e.id == id) {
          e={
            // se esparcen los datos de e y aparentemente se reasigna por correspondencia con datos
            ...e,
            ...datos
          }
          return e
        }
        return e
      })
    }

  @Delete(':id')
    delPro(@Param('id') id:number): any{
      console.log(id)
      this.products = this.products.filter(product=> product.id !==+id)
      console.log(this.products)
       return this.products
    }
  }


