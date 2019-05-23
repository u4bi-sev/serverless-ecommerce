import dynamoose from 'dynamoose'
import shortId from 'shortid'

const Review = new dynamoose.Schema({
    id : {
        type: String,
        hashKey: true,
        default: shortId.generate
    },
    user_id : String,
    product_id : String,
    title : String,
    content : String
})

export default dynamoose.model('Review', Review)