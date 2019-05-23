import dynamoose from 'dynamoose'
import shortId from 'shortid'

const Cart = new dynamoose.Schema({
    id : {
        type: String,
        hashKey: true,
        default: shortId.generate
    },
    user_id : String,
    product_ids : Array
})

export default dynamoose.model('Cart', Cart)