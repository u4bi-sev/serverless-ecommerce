import Category from '../models/Category'

export default {
    getAll : async () => {

        return Category.scan().exec()

    },
    create : (category_model) => {

        return new Promise(resolve => {

            const category = new Category(category_model)

            category.save(err => resolve({ failure : err, data : category_model }))

        })

    },
    remove : (category_id) => {

        return new Promise(resolve => {

            Category.delete({category_id}, err => resolve({ failure : err }))

        })

    }

}