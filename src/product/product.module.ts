import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CategoryEntityProducts } from './category-products.entity';
import { ProductDTO } from './product.dto';
import { ProductEntity } from './product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQuerySequelizeModule to register the entity with sequelize
      // and provide a QueryService
      imports: [NestjsQuerySequelizeModule.forFeature([ProductEntity, CategoryEntityProducts])],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: ProductDTO, EntityClass: ProductEntity }],
    }),
  ],
})
export class ProductModule {}