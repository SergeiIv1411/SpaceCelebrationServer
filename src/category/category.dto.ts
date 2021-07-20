import { FilterableField, FilterableRelation, KeySet, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType('Category')
@KeySet(['id'])
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@FilterableRelation('parent', () => CategoryDTO, { disableRemove: true, nullable: true })
export class CategoryDTO {
  @FilterableField(() => ID)
  
  id!: number;

  @FilterableField({description: "Наименование"})
  name!: string;

  @FilterableField({ nullable: true })
  parentId!: number;
}