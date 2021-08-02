import { FilterableCursorConnection, FilterableField, FilterableRelation, KeySet, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';
import { ProductDTO } from 'src/product/product.dto';

@ObjectType('Brand')
@KeySet(['id'])
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
// @FilterableRelation('parent', () => CategoryDTO, { disableRemove: true, nullable: true })
@FilterableCursorConnection('Product', () => ProductDTO, {disableRemove:true, nullable: true})
export class BrandDTO {
  
  @FilterableField(() => ID)
  id!: string;

  @FilterableField({description: "Наименование"})
  name!: string;

  @Field({description: "фотография"})
  img: string;

}