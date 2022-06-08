package com.team16.airbnb.data.dto


import com.team16.airbnb.data.model.WishData
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class WishDTO(
    @SerialName("result")
    val result: List<Result>?
) {
    @Serializable
    data class Result(
        @SerialName("imageThumnail")
        val imageThumnail: String?,
        @SerialName("price")
        val price: Int?,
        @SerialName("review")
        val review: Int?,
        @SerialName("roomId")
        val roomId: Int?,
        @SerialName("roomName")
        val roomName: String?,
        @SerialName("star")
        val star: Double?
    )
}

fun WishDTO.toWishData(): WishData {
    val list = mutableListOf<WishData.ResultData>()
    this.result?.forEach {
        val imageThumnail = it.imageThumnail.orEmpty()
        val price = requireNotNull(it.price)
        val review = it.review ?: 0
        val roomId = requireNotNull(it.roomId)
        val roomName = requireNotNull(it.roomName)
        val star = it.star ?: 0.0

        list.add(WishData.ResultData(imageThumnail, price, review, roomId, roomName, star))
    }
    return WishData(list)
}