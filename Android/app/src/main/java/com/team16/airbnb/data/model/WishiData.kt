package com.team16.airbnb.data.model


data class WishData(
    val result: List<WishData.ResultData>
) {

    data class ResultData(
        val imageThumnail: String,
        val price: Int,
        val review: Int,
        val roomId: Int,
        val roomName: String,
        val star: Double
    )
}

val wishList = listOf(
    WishData.ResultData(
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
    3000,
        100,
        1,
        "스터디룸",
        400.0
    ),
    WishData.ResultData(
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
        3000,
        200,
        2,
        "스터디룸",
        400.0
    ),
    WishData.ResultData(
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
        3000,
        300,
        3,
        "스터디룸",
        400.0
    ),
    WishData.ResultData(
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
        3000,
        400,
        4,
        "스터디룸",
        400.0
    ),
    WishData.ResultData(
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
        3000,
        500,
        5,
        "스터디룸",
        400.0
    ),
)