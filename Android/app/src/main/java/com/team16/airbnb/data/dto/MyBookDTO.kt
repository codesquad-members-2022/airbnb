package com.team16.airbnb.data.dto


import com.team16.airbnb.data.model.Address
import com.team16.airbnb.data.model.MyBookData
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class MyBookDTO(
    @SerialName("result")
    val result: List<Result>?
) {

    @Serializable
    data class Result(
        @SerialName("address")
        val address: List<Address>?,
        @SerialName("checkIn")
        val checkIn: String?,
        @SerialName("checkOut")
        val checkOut: String?,
        @SerialName("imageThumnail")
        val imageThumnail: String?,
        @SerialName("roomId")
        val roomId: Int?,
        @SerialName("roomName")
        val roomName: String?
    ) {

        @Serializable
        data class Address(
            @SerialName("city")
            val city: String?,
            @SerialName("detail")
            val detail: String?,
            @SerialName("district")
            val district: String?,
            @SerialName("region")
            val region: String?
        )

    }
}

fun MyBookDTO.toMyBookData(): MyBookData {
    val list = mutableListOf<MyBookData.Result>()
    this.result?.forEach {
        val address: List<Address> = it.address?.toAddressData() ?: emptyList()
        val checkIn: String = requireNotNull(it.checkIn)
        val checkOut: String = requireNotNull(it.checkOut)
        val imageThumnail: String = it.imageThumnail.orEmpty()
        val roomId: Int = requireNotNull(it.roomId)
        val roomName: String = requireNotNull(it.roomName)
    }
    return MyBookData(list)
}

fun List<MyBookDTO.Result.Address>.toAddressData(): List<Address> {
    val list = mutableListOf<Address>()

    this.forEach {
        val city = requireNotNull(it.city)
        val detail = requireNotNull(it.detail)
        val district = requireNotNull(it.district)
        val region = requireNotNull(it.region)
        list.add(Address(city, detail, district, region))
    }
    return list
}