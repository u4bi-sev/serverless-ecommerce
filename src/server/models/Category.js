import dynamoose from 'dynamoose'
import shortId from 'shortid'

const Category = new dynamoose.Schema({
    category_id : {
        type: String,
        hashKey: true,
        default: shortId.generate
    },
    name : String,
    uri : String
})

export default dynamoose.model('Category', Category)