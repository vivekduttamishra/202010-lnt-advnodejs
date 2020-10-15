
module.exports={
    
    "db": process.env.DB_NAME,
    "user":process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "options":{
        "host":process.env.DB_SERVER,
        "dialect":"mysql",
        logging: console.log
    }, 
    "sync":{
        "force":false
    }
}