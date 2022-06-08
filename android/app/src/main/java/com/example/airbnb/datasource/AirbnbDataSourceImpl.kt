package com.example.airbnb.datasource

import com.example.airbnb.dto.AccommodationDto
import com.example.airbnb.dto.CityDto
import com.example.airbnb.dto.SearchFilterDto
import com.example.airbnb.network.AirbnbApi
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class AirbnbDataSourceImpl @Inject constructor(private val api: AirbnbApi): AirbnbDataSource {

    override suspend fun getHomeContents(): CityDto {
        return api.getHomeContents()
    }

    override suspend fun getAccommodations(
        searchFilterDto: SearchFilterDto,
        dispatcher: CoroutineDispatcher
    ): AccommodationDto {
        return withContext(dispatcher) {
            api.getAccommodations(
                searchFilterDto.location,
                searchFilterDto.checkIn,
                searchFilterDto.checkOut,
                searchFilterDto.guests,
                searchFilterDto.minPrice,
                searchFilterDto.maxPrice
            )
        }
    }
}