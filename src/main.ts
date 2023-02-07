import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Quiz system')
    .addBearerAuth()
    .setDescription('Quiz System API Docs')
    .setVersion('1.0')
    .setTermsOfService('Terms of service')
    .setContact(
      'Binh Dang Thi',
      'https://github.com/hiradang',
      'sunnybinhdang@gmail.com',
    )
    .addTag('Quiz System')
    .addServer('http://localhost:3000/', 'Local Host')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
