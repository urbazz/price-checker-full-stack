import { Column, DataType, Table, Model, Length } from "sequelize-typescript";

interface ProductCreationAttrs {
    name: string
    price: number
    description: string
    EAN: number
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.BIGINT, unique: true, allowNull: false, validate: {len: {args: [3, 13], msg: 'Name must be between 3 and 50 characters'}}})
    EAN: number;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;
}