import { FilterableRelation } from '@nestjs-query/query-graphql';
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { BrandEntity } from 'src/brand/brand.entity';
import { CategoryEntity } from 'src/category/category.entity';
import { PackageDTO } from 'src/productPackage/package.dto';
import { PackageEntity } from 'src/productPackage/Package.entity';
import { CategoryEntityProducts } from './category-products.entity';

@Table
@FilterableRelation('package', () => PackageDTO)
export class ProductEntity extends Model<ProductEntity, Partial<ProductEntity>> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  title!: string;

  @Column
  article!: string;

  @Column
  description: string;

  @Column
  count: number;

  @Column
  price: number;

  @Column
  new_product: boolean;

  @Column
  sale: boolean;

  @Column
  @ForeignKey(() => BrandEntity)
  brandId!: string;

  @BelongsTo(() => BrandEntity)
  brand!: CategoryEntity;

  @Column
  country: string;

  @Column
  size: string;

  //   @Column
  //   images: string[];

  @BelongsToMany(() => CategoryEntity, () => CategoryEntityProducts)
  categories: CategoryEntity[];

  @HasMany(() => PackageEntity)
  packages: PackageEntity[];

  //   @Prop()
  //   packages: {
  //     barcode: { type: String},
  //     package_id: { type: String},
  //     package_name: { type: String},
  //     price: { type: Number},
  //   }[]

}

