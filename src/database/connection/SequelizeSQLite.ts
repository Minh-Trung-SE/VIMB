import path from "path";
import fs from 'fs';
import { Sequelize } from "sequelize"

export const DATABASE_PATH = path.resolve(process.cwd(), ".next", 'database.sqlite')

console.log(path.resolve(process.cwd(), ".next"))
if (!fs.existsSync(DATABASE_PATH)) {
    console.log("CRETE")
    fs.writeFileSync(DATABASE_PATH, '')
}
const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        dialectModule: require("sqlite3"),
        storage: DATABASE_PATH
    }
)

export default sequelize;