import path from "path";
import fs from 'fs';
import { Sequelize } from "sequelize"

export const DATABASE_PATH = path.resolve(process.cwd(), ".next", 'database.sqlite')

if (!fs.existsSync(DATABASE_PATH)) {
    fs.writeFileSync(DATABASE_PATH, '')
}
fs.chmodSync(DATABASE_PATH, 755);
const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        dialectModule: require("sqlite3"),
        storage: DATABASE_PATH
    }
)

export default sequelize;