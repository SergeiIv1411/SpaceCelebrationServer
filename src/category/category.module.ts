import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { CategoryEntity } from './category.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQuerySequelizeModule to register the entity with sequelize
      // and provide a QueryService
      imports: [NestjsQuerySequelizeModule.forFeature([CategoryEntity])],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: CategoryDTO, EntityClass: CategoryEntity }],
    }),
  ],
})
export class CategoryModule {}