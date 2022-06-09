package com.example.todo.airbnb.data.repository

import androidx.compose.runtime.mutableStateOf
import com.example.todo.airbnb.data.Accommodations
import com.example.todo.airbnb.data.Travel
import com.example.todo.airbnb.domain.model.AccommodationResult
import com.example.todo.airbnb.domain.model.Reservation
import com.example.todo.airbnb.domain.repository.MainRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class MainRepositoryImpl : MainRepository {

    private val dummyImage =
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"

    private val locations = listOf(
        Travel(dummyImage, "양재동, 서초구, 서울특별시"),
        Travel(dummyImage, "양재역 사거리, 양재1동"),
        Travel(dummyImage, "서울특별시 양재2동 시민의숲앞"),
        Travel(dummyImage, "서울특별시 양재2동 양재 IC"),
        Travel(dummyImage, "강릉시, 강원도"),
        Travel(dummyImage, "대전광역시 서구"),
        Travel(dummyImage, "대전광역시 중구"),
        Travel(dummyImage, "대전광역시 동구"),
        Travel(dummyImage, "경기도 수원시")
    )

    private val travelList = listOf(
        Travel(dummyImage, "서울", "차로 30분 거리"),
        Travel(dummyImage, "광주", "차로 4시간 거리"),
        Travel(dummyImage, "의정부", "차로 30분 거리"),
        Travel(dummyImage, "수원", "차로 45분 거리"),
        Travel(dummyImage, "대구", "차로 3.5시간 거리"),
        Travel(dummyImage, "울산", "차로 4.5시간 거리"),
        Travel(dummyImage, "대전", "차로 2시간 거리"),
        Travel(dummyImage, "부천", "차로 30분 거리"),
    )

    private val accommodationList = listOf(
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 100000),
        Accommodations(dummyImage, "독특한 공간", 150000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 150000),
        Accommodations(dummyImage, "독특한 공간", 200000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 650000),
        Accommodations(dummyImage, "독특한 공간", 400000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 400000),
        Accommodations(dummyImage, "독특한 공간", 400000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 100000),
        Accommodations(dummyImage, "독특한 공간", 150000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 100000),
        Accommodations(dummyImage, "독특한 공간", 150000),
        Accommodations(dummyImage, "자연생활을 만끽할 수\n있는 숙소", 100000),
        Accommodations(dummyImage, "독특한 공간", 150000),
    )

    private val reservationTestList1 = Reservation(
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
        "1번 숙박집",
        "아주아주좋은 고오급 숙박집",
        "2021년 1월 2일 오후 4:00",
        "2021년 3월 2일 오후 12:00",
        "Jung Park",
        4,
        1000000
    )

    private val reservationTestList2 = Reservation(
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
        "2번 숙박집",
        "조금좋은 숙박집",
        "2021년 4월 5일 오후 4:00",
        "2021년 5월 5일 오후 12:00",
        "Jung Hwan",
        2,
        1500000
    )

    private val reservationTestList3 = Reservation(
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
        "3번 숙박집",
        "중간 숙박집",
        "2021년 5월 17일 오후 4:00",
        "2021년 6월 4일 오후 12:00",
        "Jung Hwan",
        6,
        1500000
    )

    private val reservationTestList4 = Reservation(
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
        "4번 숙박집",
        "럭셔리 숙박집",
        "2021년 8월 17일 오후 4:00",
        "2021년 11월 4일 오후 12:00",
        "Jung Hwan",
        8,
        450000
    )

    private val reservationList = mutableListOf(
        reservationTestList1,
        reservationTestList2,
        reservationTestList3,
        reservationTestList4
    )

    private val filterAccommodationResultList = listOf(
        AccommodationResult(
            1,
            dummyImage,
            4.80F,
            127,
            "호텔",
            15322,
            222211,
            "강남구청역",
            10,
            4,
            5,
            3,
            "강남구청역은 강남의중심입니다.",
            mutableStateOf(false)
        ),
        AccommodationResult(
            2, dummyImage, 3.2F, 14, "민박집", 300214, 8838282, "강남구청역",
            5,
            2,
            2,
            1,
            "선정릉역입니다..",
            mutableStateOf(false)
        ),
        AccommodationResult(
            3, dummyImage, 4.8F, 123, "콘도", 3214, 38282, "강남구청역",
            4,
            2,
            1,
            2,
            "선릉역입니다.",
            mutableStateOf(false)
        ),
        AccommodationResult(
            4, dummyImage, 2.2F, 72, "모텔", 2004, 824182, "강남구청역",
            3,
            1,
            3,
            2,
            "역삼역은 강남 근처의 역입니다.",
            mutableStateOf(false)
        ),
        AccommodationResult(
            5, dummyImage, 5.1F, 862, "숙소", 6214, 68282, "강남구청역",
            20,
            3,
            3,
            5,
            "강남구청 내의 큰 숙소입니다.",
            mutableStateOf(false)
        )
    )

    override fun getSearchWordList(searchWord: String): Flow<List<Travel>> = flow {
        val searchList = locations.filter {
            it.name.contains(searchWord)
        }
        emit(searchList)
    }

    override fun getTravelLocations(): Flow<List<Travel>> = flow {
        emit(travelList)
    }

    override fun getAccommodations(): Flow<List<Accommodations>> = flow {
        emit(accommodationList)
    }

    override fun getReservationList(): Flow<MutableList<Reservation>> = flow {
        emit(reservationList)
    }

    override fun getFilterAccommodation(): Flow<List<AccommodationResult>> = flow {
        emit(filterAccommodationResultList)
    }

    override fun onClickFavorite(index: Int) {
        with(filterAccommodationResultList[index]) {
            isFavorite.value = !isFavorite.value
        }
    }

    override fun getDetailAccommodation(id: Int): Flow<AccommodationResult> = flow {
        val accommodation = filterAccommodationResultList.find { id == it.id }
        if (accommodation != null) emit(accommodation)
    }
}