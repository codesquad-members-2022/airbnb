package com.team16.airbnb.data.dto


import com.team16.airbnb.data.model.SearchResult
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class SearchResultDTO(
    @SerialName("imageUrl")
    val imageUrl: List<String>?,
    @SerialName("price")
    val price: Int?,
    @SerialName("rating")
    val rating: Double?,
    @SerialName("reviewCount")
    val reviewCount: Int?,
    @SerialName("roomId")
    val roomId: Int?,
    @SerialName("roomName")
    val roomName: String?,
    @SerialName("totalPrice")
    val totalPrice: Int?
)

fun SearchResultDTO.toSearchResult(): SearchResult {
    val imageUrl: String = this.imageUrl?.get(0) ?: ""
    val price: Int = this.price ?: 0
    val rating: Double = this.rating ?: 0.0
    val reviewCount: Int = this.reviewCount ?: 0
    val roomId: Int = requireNotNull(this.roomId)
    val roomName: String = requireNotNull(this.roomName)
    val totalPrice: Int = requireNotNull(this.totalPrice)

    return SearchResult(imageUrl, price, rating, reviewCount, roomId, roomName, totalPrice)
}
