import dynamoose from 'dynamoose'
import shortId from 'shortid'

const Product = new dynamoose.Schema({
    product_id : {
        type: String,
        hashKey: true,
        default: shortId.generate
    },
    name : String,
    desc : String,
    price : Number,
    category_id : String,
    images : Array
})

export default dynamoose.model('Product', Product)