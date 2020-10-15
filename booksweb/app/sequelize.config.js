
module.exports={
    
    "db": process.env.DB_SERVER,
    "user":process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "options":{
        "host":"localhost",
        "dialect":"mysql"
    },
    "sync":{
        "force":true
    }
}