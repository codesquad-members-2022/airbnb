package com.example.airbnb.data.repository

import com.example.airbnb.network.common.NetworkResponse
import com.example.airbnb.network.dto.MainEvent
import com.example.airbnb.network.dto.SearchContents
import javax.inject.Inject

class Repository @Inject constructor(private val dataSource: DataSource){

    suspend fun getMainEvent(): NetworkResponse<MainEvent> {
        return dataSource.getMainEvent()
    }
}