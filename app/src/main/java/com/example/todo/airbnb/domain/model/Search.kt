package com.example.todo.airbnb.domain.model

import android.annotation.SuppressLint
import java.text.SimpleDateFormat

@SuppressLint("SimpleDateFormat")
data class Search(
    val location: String,
    val checkIn: String,
    val checkOut: String,
    val minPrice: Int,
    val maxPrice: Int,
    val guest: Personnel,
) {

    fun getStay(): Long {
        val formatter = SimpleDateFormat("yyyy년 M월 d일")
        val checkInDate = formatter.parse(checkIn)
        if (checkOut != "년 0월 0일") {
            val checkOutDate = formatter.parse(checkOut)
            val diffSec = (checkOutDate.time - checkInDate.time) / 1000
            return (diffSec / (24 * 60 * 60))
        }
        return 1
    }

    fun isDefault(): Boolean {
        return location == DEFAULT_LOCATION ||
                checkIn == DEFAULT_CHECKIN || checkOut == DEFAULT_CHECKOUT ||
                minPrice == DEFAULT_MINPRICE || maxPrice == DEFAULT_MAXPRICE ||
                guest.isDefault()
    }

    companion object {

        const val DEFAULT_LOCATION = ""
        const val DEFAULT_CHECKIN = "2999-01-01"
        const val DEFAULT_CHECKOUT = "2999-01-01"
        const val DEFAULT_MINPRICE = 0
        const val DEFAULT_MAXPRICE = Int.MAX_VALUE

        fun defaultOf() =
            Search(
                DEFAULT_LOCATION,
                DEFAULT_CHECKIN,
                DEFAULT_CHECKOUT,
                DEFAULT_MINPRICE,
                DEFAULT_MAXPRICE,
                Personnel.defaultOf()
            )
    }
}
