const { resolve, reject } = require('promise')
const { get } = require('../config/connection')
var db=require('../config/connection')

module.exports={
    addproduct:(data,callback)=>{
        console.log(data)
        db.get().collection('data').insertOne(data).then((data)=>{
            callback(true)
        })
    },

    getDetails:()=>{
        return new Promise(async(resolve,reject)=>{
            let details= await db.get().collection('data').find().toArray()
            resolve(details)
        })
        
    }
}