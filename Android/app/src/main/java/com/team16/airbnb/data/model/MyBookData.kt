package com.team16.airbnb.data.model

data class MyBookData(
    val result: List<Result>
) {

    data class Result(
        val address: List<Address>,
        val checkIn: String,
        val checkOut: String,
        val imageThumnail: String,
        val roomId: Int,
        val roomName: String
    )
}

val bookList = MyBookData(
    listOf(
        MyBookData.Result(
            listOf(
                Address(
                    "서울", "양재동", "서초구", "10-102"
                )
            ),
            "2022년 5월, 20일",
            "2022년 5월 30일",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            1,
            "Spacious and Comfortable cozy house #4"
        ),
        MyBookData.Result(
            listOf(
                Address(
                    "서울", "양재동", "서초구", "10-102"
                )
            ),
            "2022년 6월, 20일",
            "2022년 6월 30일",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            2,
            "Spacious and Comfortable cozy house #5"
        ),
        MyBookData.Result(
            listOf(
                Address(
                    "서울", "양재동", "서초구", "10-102"
                )
            ),
            "2022년 7월, 20일",
            "2022년 7월 30일",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            3,
            "Spacious and Comfortable cozy house #6"
        ),
        MyBookData.Result(
            listOf(
                Address(
                    "서울", "양재동", "서초구", "10-102"
                )
            ),
            "2022년 8월, 20일",
            "2022년 8월 30일",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            4,
            "Spacious and Comfortable cozy house #7"
        )
    )
)
