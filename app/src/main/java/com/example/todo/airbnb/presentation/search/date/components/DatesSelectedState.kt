package com.example.todo.airbnb.presentation.search.date.components

import com.example.todo.airbnb.data.model.date.CalendarYear
import com.example.todo.airbnb.data.model.date.DaySelected
import com.example.todo.airbnb.data.model.date.DaySelected.Companion.DaySelectedEmpty

data class DatesSelectedState(
    val year: CalendarYear,
    val from: DaySelected = DaySelectedEmpty,
    val to: DaySelected = DaySelectedEmpty,
) {
    override fun toString(): String {
        if (from == DaySelectedEmpty && to == DaySelectedEmpty) return ""
        val fromSplit = from.toString().split(" ")
        var output = fromSplit.subList(1, fromSplit.size).joinToString(" ")
        if (to != DaySelectedEmpty) {
            val toSplit = to.toString().split(" ")
            output += " - ${toSplit.subList(1, toSplit.size).joinToString(" ")}"
        }
        return output
    }

    companion object {
        const val DEFAULT_DAY = "년 0월 0일"
    }
}