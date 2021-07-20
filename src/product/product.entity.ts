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
  } from 'sequelize-typescript';
import { CategoryEntity } from 'src/category/category.entity';
import { CategoryEntityProducts } from './category-products.entity';
  
  @Table
  export class ProductEntity extends Model<ProductEntity, Partial<ProductEntity>> {
    @PrimaryKey
    @Column
  id: number;
  
  @Column
  name!: string;

  @Column
  article!: string;

  @Column
  description: string;

  @Column
  weight: number;

  @Column
  count: number;

  @Column
  priceForOne: number;

  @Column
  new_product: boolean;

  @Column
  sale: boolean;

  @Column
  composition: string;

  @Column
  code: string;

  @Column
  brand: string;

  @Column
  country: string;

  @Column
  size: string;

  @Column
  countInPackage: string;

//   @Column
//   images: string[];

  @BelongsToMany(() => CategoryEntity, () => CategoryEntityProducts)
  categories: CategoryEntity[];
  
//   @Prop()
//   packages: {
//     barcode: { type: String},
//     package_id: { type: String},
//     package_name: { type: String},
//     price: { type: Number},
//   }[]
  
}

