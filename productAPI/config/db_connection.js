var db_props = require("./db_properties");

var mySql = require("mysql2");

module.exports = {
    getConnection: () => {
        return mySql.createConnection({
            host: db_props.host,
            user: db_props.user,
            password: db_props.password,
            database: db_props.dbName
        });
    }
}