import dynamoose from 'dynamoose'
import shortId from 'shortid'

const Order = new dynamoose.Schema({
    id : {
        type: String,
        hashKey: true,
        default: shortId.generate
    },
    user_id : String,
    status : {
        type : String,
        enum: ['A', 'B', 'C', 'D'],
        default : 'A'
    },
    product_ids : Array,
    total_price : Number,
    shipment : String
})

export default dynamoose.model('Order', Order)