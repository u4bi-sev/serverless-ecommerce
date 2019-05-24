import dynamoose from 'dynamoose'

const Category = new dynamoose.Schema({
    category_id : String,
    name : String,
})

export default dynamoose.model('Category', Category)