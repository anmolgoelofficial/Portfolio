import mysql from "mysql2/promise";
const database = async () => {
    let connectivity = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Anmol@123",
        port: 3306,
        database:"portfolio_anmol",
        connectionLimit: 10
    });
    return connectivity;
}
export default database;