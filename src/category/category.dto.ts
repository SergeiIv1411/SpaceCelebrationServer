import { FilterableCursorConnection, FilterableField, FilterableRelation, KeySet, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { ProductDTO } from 'src/product/product.dto';

@ObjectType('Category')
@KeySet(['id'])
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@FilterableRelation('parent', () => CategoryDTO, { disableRemove: true, nullable: true })
@FilterableCursorConnection('Product', () => ProductDTO)
export class CategoryDTO {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField({description: "Наименование"})
  name!: string;

  @FilterableField(() => ID, { description: "ID родительской категории", nullable: true })
  parentId!: string;
}