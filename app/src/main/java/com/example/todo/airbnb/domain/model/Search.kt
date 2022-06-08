package com.example.todo.airbnb.domain.model

data class Search(
    val location: String,
    val checkIn: String,
    val checkOut: String,
    val minPrice: Int,
    val maxPrice: Int,
    val guest: Personnel,
) {

    companion object {

        const val DEFAULT_LOCATION = ""
        const val DEFAULT_CHECKIN = "2999-01-01"
        const val DEFAULT_CHECKOUT = "2999-01-01"
        const val DEFAULT_MINPRICE = 0
        const val DEFAULT_MAXPRICE = Int.MAX_VALUE
        const val DEFAULT_GUEST = Int.MAX_VALUE

        fun defaultOf() =
            Search(DEFAULT_LOCATION,
                DEFAULT_CHECKIN,
                DEFAULT_CHECKOUT,
                DEFAULT_MINPRICE,
                DEFAULT_MAXPRICE,
                Personnel(DEFAULT_GUEST, DEFAULT_GUEST, DEFAULT_GUEST))
    }
}
