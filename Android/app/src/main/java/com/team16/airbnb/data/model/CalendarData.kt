package com.team16.airbnb.data.model

data class CalendarData(
    val header: String,
    val days: Map<Int, DayInfo>
)