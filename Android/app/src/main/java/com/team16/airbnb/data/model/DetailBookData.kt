package com.team16.airbnb.data.model

data class DetailBookData(
    val address: List<Address>?,
    val checkIn: String?,
    val checkOut: String?,
    val imageUrl: String?,
    val reservationId: Int?,
    val roomInfo: List<RoomInfo>?,
    val roomName: String?
) {
//    data class Address(
//        val city: String?,
//        val detail: String?,
//        val district: String?,
//        val region: String?
//    )

    data class RoomInfo(
        val host: String?,
        val reservationPrice: Int?,
        val roomType: String?,
        val totalGuest: Int?
    )
}

val detailBook = DetailBookData(
        listOf(
            Address(
                "서울", "양재동", "서초구", "10-102"
            )
        ),
        "2022년 5월, 20일",
        "2022년 5월 30일",
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
        1,
        listOf(
            DetailBookData.RoomInfo(
                "얀세",
                17881954,
                "레지던스",
                2,

            )
        ),
        "Spacious and Comfortable cozy house #4"
)