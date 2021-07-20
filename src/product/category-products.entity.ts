import { Table, ForeignKey, Column, Model } from 'sequelize-typescript';
import { CategoryEntity } from 'src/category/category.entity';
import { ProductEntity } from './product.entity';

@Table({})
export class CategoryEntityProducts extends Model<CategoryEntityProducts> {
  @ForeignKey(() => CategoryEntity)
  @Column
  categoryId!: number;

  @ForeignKey(() => ProductEntity)
  @Column
  productId!: number;
}