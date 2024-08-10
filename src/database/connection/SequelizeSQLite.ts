import path from "path";
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        dialectModule: require("sqlite3"),
        storage: path.resolve(process.cwd(), 'database.sqlite')
    }
)



export default sequelize;