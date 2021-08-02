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
import { ProductEntity } from 'src/product/product.entity';

@Table
export class BrandEntity extends Model<BrandEntity, Partial<BrandEntity>> {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  name!: string;

  @Column
  img: string;

  @HasMany(() => ProductEntity)
  products: ProductEntity[];
}
