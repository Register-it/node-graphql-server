const { restaurants, reviews } = require('./datasource.js');

module.exports = {
    Query: {
        restaurants: function(_parent, args) {
            if (args.city === undefined) {
                return restaurants;
            } else {
                return restaurants.filter(restaurant => restaurant.city === args.city);
            }
        },
    },
    Restaurant: {
        reviews: function(restaurant, args) {
            if (args.rating === undefined) {
                return reviews.filter(review => review.restaurantId === restaurant.id);
            } else {
                return reviews.filter(review => review.restaurantId === restaurant.id)
                    .filter(review => review.rating >= args.rating);
            }
        },
    },
};