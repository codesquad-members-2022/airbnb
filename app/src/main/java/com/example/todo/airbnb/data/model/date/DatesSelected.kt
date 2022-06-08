package com.example.todo.airbnb.data.model.date

data class DaySelected(
    val day: Int,
    val month: CalendarMonth,
    val year: CalendarYear,
) {
    val calendarDay = lazy {
        month.getDay(day)
    }

    override fun toString(): String {
        val month =
            if (month.monthNumber in (1..9)) "0${month.monthNumber}" else "${month.monthNumber}"
        val day = if (day in (1..9)) "0${day}" else "$day"
        return "${month}월 ${day}일"
    }

    operator fun compareTo(other: DaySelected): Int {
        if (day == other.day && month == other.month) return 0
        if (month == other.month) return day.compareTo(other.day)
        return (year.indexOf(month)).compareTo(
            year.indexOf(other.month)
        )
    }

    companion object {
        val DaySelectedEmpty =
            DaySelected(0, CalendarMonth("", "", 0, 0, DayOfWeek.Sunday), emptyList())
    }
}