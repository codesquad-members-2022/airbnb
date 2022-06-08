package com.team16.airbnb.data.repository

import com.team16.airbnb.R
import com.team16.airbnb.data.datasource.HomeDataSource
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class HomeRepository @Inject constructor(private val dataSource: HomeDataSource) {

    fun getNearInfo() = dataSource.getNearInfo()

    fun getRecommendThem() = dataSource.getRecommendTheme()

    fun getHeroInfo() = dataSource.getHeroInfo()
}