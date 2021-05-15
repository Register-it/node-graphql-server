module.exports = {
    restaurants: [
        {
            id: "rest_1",
            name: "Da Luigi",
            address: "via Verdi, 23",
            city: "Milano",
            rating: 5,
        },
        {
            id: "rest_2",
            name: "Riso giallo",
            address: "piazza Marini, 11",
            city: "Milano",
            rating: 3,
        },
        {
            id: "rest_3",
            name: "Pizza e fichi",
            address: "via Guelfa, 41",
            city: "Firenze",
            rating: 4,
        },
    ],
    reviews: [
        {
            id: "rev_1",
            message: "Posto bellissimo, si mangia favolosamente!",
            rating: 5,
            restaurantId: "rest_1",
        },
        {
            id: "rev_2",
            message: "Il mio ristorante preferito al mondo!",
            rating: 5,
            restaurantId: "rest_1",
        },
        {
            id: "rev_3",
            message: "Tutto buono!",
            rating: 4,
            restaurantId: "rest_1",
        },
        {
            id: "rev_4",
            message: "Molto al di sotto delle aspettative",
            rating: 2,
            restaurantId: "rest_1",
        },
        {
            id: "rev_5",
            message: "C'è di meglio",
            rating: 3,
            restaurantId: "rest_2",
        },
    ],
};