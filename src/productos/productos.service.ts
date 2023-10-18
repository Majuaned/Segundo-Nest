import { Body, Injectable, Param } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

// ****** 1° Primero se crea una clase, la cual contendrá los métodos que se usarán en el controlador (productos.controller.ts)

@Injectable()
export class ProductosService {
  private products: {
    id: string,
    name: string,
    description: string,
    stock: number
  }[] = []

  create(name: string, description: string, stock: number){
     this.products.push({
      id: uuidv4(),
      name,
      description,
      stock
      
    })
    return this.products
  }

  /*  ****   COMPOSICIÓN DE PRODUCTS  *****
      {
      id: uuidv4(),
      name:'alo',
      description:'comida',
      stock: 10
    }
  
  */
  
  // Método de muestra!!!
  getHello(): string {
    return 'Se muestra: Agregación de productos!!!';
  }
  //******    Acá no se ponen los decoradores!!! (@get,@post,etc)   ******
  findAll() {
    return this.products
  }

  findOne(id: string) {
    return this.products.find(prod=>prod.id === id);
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    //Si esta el map solamente, el retornará el arreglo editado, pero si hago un get, se mostrará el array original, por ende es necesario que el resultado del map se guarde en una variable products!!!
    return this.products = this.products.map(datos=>{
      if (datos.id === id) {
        // datos={
        //   ...datos,
        //   ...updateProductoDto
        //   //otra forma es:
        // }
        datos = Object.assign(datos,updateProductoDto)
        return datos
      }
      return datos
    })
  }

  // remove(id: number) {
  //   return `This action removes a #${id} producto`;
  // }
}

/************  OBJETOS PARA HACER POST  *********************
{
    "name": "harina",
    "description": "comida",
    "stock": 60
},
{
    "name": "pan",
    "description": "comida",
    "stock": 609
},
{
  "name": "celular",
  "description": "tecno",
  "stock": 35
}

*/
