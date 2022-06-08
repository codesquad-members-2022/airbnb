package com.example.todo.airbnb.domain.model

data class Reservation(
    val image: String,
    val locationName: String,
    val shortDescription: String,
    val checkIn: String,
    val checkOut: String,
    val host: String,
    val maximumPeople: Int,
    val accommodationsFee: Int,
)
