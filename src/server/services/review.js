import Review from '../models/Review'

export default {
    getProductReviews : (product_id) => {

        return new Promise(resolve => {

            Review.scan('product_id')
                .eq(product_id)
                .exec((err, reviews) => resolve(err ? [] : reviews))
            
        })

    },
    create : (review_model) => {

        return new Promise(resolve => {

            const review = new Review(review_model)

            review.save(err => resolve({ failure : err, data : review_model }))

        })

    },
    remove : (review_id) => {

        return new Promise(resolve => {

            Review.delete({review_id}, err => resolve({ failure : err }))

        })

    }

}