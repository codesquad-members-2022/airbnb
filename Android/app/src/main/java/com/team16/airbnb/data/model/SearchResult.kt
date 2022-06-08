package com.team16.airbnb.data.model

data class SearchResult(
    val imageUrl: String,
    val price: Int,
    val rating: Double,
    val reviewCount: Int,
    val roomId: Int,
    val roomName: String,
    val totalPrice: Int
)
