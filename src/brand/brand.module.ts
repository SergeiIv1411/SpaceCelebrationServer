import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { BrandDTO } from './brand.dto';
import { BrandEntity } from './brand.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQuerySequelizeModule to register the entity with sequelize
      // and provide a QueryService
      imports: [NestjsQuerySequelizeModule.forFeature([BrandEntity])],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: BrandDTO, EntityClass: BrandEntity }],
    }),
  ],
})
export class BrandModule {}