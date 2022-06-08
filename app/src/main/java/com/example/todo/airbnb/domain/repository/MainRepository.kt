package com.example.todo.airbnb.domain.repository

import com.example.todo.airbnb.data.Accommodations
import com.example.todo.airbnb.data.Travel
import com.example.todo.airbnb.domain.model.Reservation
import com.example.todo.airbnb.domain.model.AccommodationResult
import kotlinx.coroutines.flow.Flow

interface MainRepository {
    fun getSearchWordList(searchWord: String): Flow<List<Travel>>

    fun getTravelLocations(): Flow<List<Travel>>

    fun getAccommodations(): Flow<List<Accommodations>>

    fun getReservationList(): Flow<MutableList<Reservation>>

    fun getFilterAccommodation(): Flow<List<AccommodationResult>>

    fun onClickFavorite(index: Int)

}