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
  HasOne,
} from 'sequelize-typescript';
import { ProductEntity } from 'src/product/product.entity';

// "barcode": "4640015045113",
// "package_id": "00000000-0000-0000-0000-000000000000",
// "package_name": "",
// "price": 432.1

@Table
export class PackageEntity extends Model<PackageEntity, Partial<PackageEntity>> {
  
  @PrimaryKey
  @Column
  id!: string;

  @Column
  name!: string;

  @Column
  price: number;

  @Column
  barcode: string;

  @Column
  @ForeignKey(() => ProductEntity)
  productId!: string;

  @BelongsTo(() => ProductEntity)
  product!: ProductEntity;
}
