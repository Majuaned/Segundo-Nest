import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { ProductosModule } from './productos/productos.module'

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(ProductosModule);

  await app.listen(4000,()=>{
    console.log('Servidor funcionando en el puerto 4000')
  });
}
bootstrap();
