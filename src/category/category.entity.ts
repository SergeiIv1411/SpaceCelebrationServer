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
import { CategoryEntityProducts } from 'src/product/category-products.entity';
import { ProductEntity } from 'src/product/product.entity';

@Table
export class CategoryEntity extends Model<CategoryEntity, Partial<CategoryEntity>> {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  name!: string;

  @Column
  @ForeignKey(() => CategoryEntity)
  parentId!: string;

  @BelongsTo(() => CategoryEntity)
  parent!: CategoryEntity;

  @BelongsToMany(() => ProductEntity, () => CategoryEntityProducts)
  products: ProductEntity[];
}
