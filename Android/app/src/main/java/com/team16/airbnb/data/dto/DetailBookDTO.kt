package com.team16.airbnb.data.dto


import com.team16.airbnb.data.model.Address
import com.team16.airbnb.data.model.DetailBookData
import com.team16.airbnb.data.model.MyBookData
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class DetailBookDTO(
    @SerialName("address")
    val address: List<Addres>?,
    @SerialName("checkIn")
    val checkIn: String?,
    @SerialName("checkOut")
    val checkOut: String?,
    @SerialName("imageUrl")
    val imageUrl: String?,
    @SerialName("reservation_id")
    val reservationId: Int?,
    @SerialName("roomInfo")
    val roomInfo: List<RoomInfo>?,
    @SerialName("roomName")
    val roomName: String?
) {
    @Serializable
    data class Addres(
        @SerialName("city")
        val city: String?,
        @SerialName("detail")
        val detail: String?,
        @SerialName("district")
        val district: String?,
        @SerialName("region")
        val region: String?
    )


    @Serializable
    data class RoomInfo(
        @SerialName("host")
        val host: String?,
        @SerialName("reservationPrice")
        val reservationPrice: Int?,
        @SerialName("roomType")
        val roomType: String?,
        @SerialName("totalGuest")
        val totalGuest: Int?
    )
}

fun DetailBookDTO.toDetailBookData(): DetailBookData {
    val address: List<Address> = this.address?.toAddress() ?: emptyList()
    val checkIn: String = requireNotNull(this.checkIn)
    val checkOut: String = requireNotNull(this.checkOut)
    val imageUrl: String = this.imageUrl.orEmpty()
    val reservationId: Int = requireNotNull(this.reservationId)
    val roomInfo: List<DetailBookData.RoomInfo> = this.roomInfo?.toRoomInfo() ?: emptyList()
    val roomName: String = requireNotNull(this.roomName)

    return DetailBookData(address, checkIn, checkOut, imageUrl, reservationId, roomInfo, roomName)
}

fun List<DetailBookDTO.Addres>.toAddress(): List<Address> {

    val list = mutableListOf<Address>()

    this.forEach {
        val city: String = requireNotNull(it.city)
        val detail: String = requireNotNull(it.detail)
        val district: String = requireNotNull(it.district)
        val region: String = requireNotNull(it.region)

        list.add(Address(city, detail, district, region))
    }

    return list
}

fun List<DetailBookDTO.RoomInfo>.toRoomInfo(): List<DetailBookData.RoomInfo> {

    val list = mutableListOf<DetailBookData.RoomInfo>()

    this.forEach {
        val host: String = requireNotNull(it.host)
        val reservationPrice: Int = requireNotNull(it.reservationPrice)
        val roomType: String = requireNotNull(it.roomType)
        val totalGuest: Int = requireNotNull(it.totalGuest)

        list.add(DetailBookData.RoomInfo(host, reservationPrice, roomType, totalGuest))
    }

    return list
}