import SequelizeSQLite from "@src/database/connection/SequelizeSQLite";
import {DataTypes, Model, Optional} from 'sequelize';

export type ConsultationRequestAttributes = {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    consultationType: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ConsultationRequestCreationAttributes = Optional<ConsultationRequestAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class ConsultationRequest extends Model<ConsultationRequestAttributes, ConsultationRequestCreationAttributes> {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public message!: string;
    public consultationType!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

ConsultationRequest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        consultationType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize: SequelizeSQLite,
        tableName: 'consultation_requests',
        timestamps: true,
    }
);

export default ConsultationRequest;
