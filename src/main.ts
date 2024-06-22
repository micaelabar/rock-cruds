import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const DocumentOptions = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('Api de criaturas de rock')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, DocumentOptions);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();


