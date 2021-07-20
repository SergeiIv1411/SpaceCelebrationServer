import { FilterableCursorConnection, FilterableField, KeySet, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { CategoryDTO } from 'src/category/category.dto';

@ObjectType('Product')
@KeySet(['id'])
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@FilterableCursorConnection('Category', () => CategoryDTO)
export class ProductDTO {

    @FilterableField(() => ID)
    id!: number;

    @FilterableField()
    name!: string;

    @FilterableField()
    article!: string;

    @FilterableField()
    description: string;

    @FilterableField()
    weight: number;

    @FilterableField()
    count: number;

    @FilterableField()
    priceForOne: number;

    @FilterableField()
    new_product: boolean;

    @FilterableField()
    sale: boolean;

    @FilterableField()
    composition: string;

    @FilterableField()
    code: string;

    @FilterableField()
    brand: string;

    @FilterableField()
    country: string;

    @FilterableField()
    size: string;

    @FilterableField()
    countInPackage: string;

    // @FilterableField(() => [String])
    // images: [string];

}