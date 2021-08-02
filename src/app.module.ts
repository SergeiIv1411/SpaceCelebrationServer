import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { PackageModule } from './productPackage/package.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'root',
      database: 'TestSequelize',
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname,'static'),
    }),
    GraphQLModule.forRoot({
      // set to true to automatically generate schema
      autoSchemaFile: true,
    }),
    CategoryModule,
    ProductModule,
    BrandModule,
    PackageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

