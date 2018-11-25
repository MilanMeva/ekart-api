let mongoose = require('mongoose');
const server = 'localhost:27017'; 
const database = 'ekart';    
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('DB connection successful')
       })
       .catch(err => {
         console.error('DB connection error')
       })
  }
}
module.exports = new Database()