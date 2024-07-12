import path from "path";
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        dialectModule: require("sqlite3"),
        storage: path.resolve(process.env.SQL_LITE_STORAGE_PATH!, 'database.sqlite')
    }
)

export default sequelize;