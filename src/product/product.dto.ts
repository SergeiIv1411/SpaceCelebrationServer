import { FilterableCursorConnection, FilterableField, FilterableOffsetConnection, KeySet, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { CategoryDTO } from 'src/category/category.dto';

@ObjectType('Product')
@KeySet(['id'])
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@FilterableOffsetConnection('Category', () => CategoryDTO)
export class ProductDTO {

    @FilterableField(() => ID)
    id!: number;

    @FilterableField()
    title!: string;

    @FilterableField()
    article!: string;

    @FilterableField()
    description: string;

    @FilterableField()
    count: number;

    @FilterableField()
    price: number;

    @FilterableField()
    new_product: boolean;

    @FilterableField()
    sale: boolean;

    @FilterableField(() => ID, { nullable: true })
    brandId!: string;

    @FilterableField()
    country: string;

    @FilterableField()
    size: string;

    // @FilterableField(() => [String])
    // images: [string];

}