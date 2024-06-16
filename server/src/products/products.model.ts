import { Column, DataType, Table, Model } from "sequelize-typescript";

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

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    EAN: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;
}