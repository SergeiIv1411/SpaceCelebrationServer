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
  } from 'sequelize-typescript';
  
  @Table
  export class CategoryEntity extends Model<CategoryEntity, Partial<CategoryEntity>> {
    @PrimaryKey
    @Column
    id!: number;
  
    @Column
    name!: string;
  
    @Column
    @ForeignKey(() => CategoryEntity)
    parentId!: number;

    @BelongsTo(() => CategoryEntity)
    parent!: CategoryEntity;
  }
  