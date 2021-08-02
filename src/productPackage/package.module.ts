import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { PackageDTO } from './package.dto';
import { PackageEntity } from './package.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQuerySequelizeModule to register the entity with sequelize
      // and provide a QueryService
      imports: [NestjsQuerySequelizeModule.forFeature([PackageEntity])],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: PackageDTO, EntityClass: PackageEntity }],
    }),
  ],
})
export class PackageModule {}