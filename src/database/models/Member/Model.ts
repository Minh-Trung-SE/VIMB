import SequelizeSQLite from "@src/database/connection/SequelizeSQLite";
import {DataTypes, Model, Optional} from 'sequelize';

export type MemberAttributes = {
    id: number
    name: string
    role: string
}
export type MemberCreationAttributes = Optional<MemberAttributes, 'id'>;

class Member extends Model<MemberAttributes, MemberCreationAttributes> implements MemberAttributes {
    public id!: number;
    public name!: string;
    public role!: string;
}

Member.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize: SequelizeSQLite,
        tableName: 'members',
        underscored: true,
        timestamps: true,
    }
);
export default Member
