package com.team16.airbnb.ui.calendar

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.team16.airbnb.data.model.CalendarData
import com.team16.airbnb.data.model.DayInfo
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.launch
import java.util.*
import javax.inject.Inject

@HiltViewModel
class CalendarViewModel @Inject constructor() : ViewModel() {

    private val _calendar = MutableStateFlow<List<CalendarData>>(emptyList())
    val calendar: StateFlow<List<CalendarData>> = _calendar

    private val _label = MutableStateFlow("")
    val label: StateFlow<String> = _label

    private val _pickState = MutableStateFlow(false)
    val pickState: StateFlow<Boolean> = _pickState

    private var startDate = DayInfo(day = "", month = "")

    private var endDate = DayInfo(day = "", month = "")

    private var todayMonth: Int = -1
    private var today: Int = -1

    private var id: Int = 0

    init {
        viewModelScope.launch {
            getCalendar().collect {
                _calendar.value = it
            }
        }
    }

    private fun getCalendar(): Flow<List<CalendarData>> = flow {
        val cal = Calendar.getInstance()
        var month = cal.get(Calendar.MONTH) + 1
        var year = cal.get(Calendar.YEAR)

        todayMonth = month
        today = cal.get(Calendar.DATE)

        val list = mutableListOf<CalendarData>()

        for (i in 0 until 12) {
            if (month > 12) {
                month = 1
                year++
            }

            list.add(
                CalendarData(
                    "${year}년 ${month}월",
                    setDays(year, month)
                )
            )
            month++
        }
        emit(list)
    }

    private fun setDays(year: Int, month: Int): Map<Int, DayInfo> {
        val cal = Calendar.getInstance()
        cal.set(year, month - 1, 1)
        var start = cal.get(Calendar.DAY_OF_WEEK)
        val days = mutableMapOf<Int, DayInfo>()

        for (i in 1 until start) {
            days[id] = DayInfo(id," ", " ", isPossible = false)
            id++
        }

        for (i in 1..cal.getActualMaximum(Calendar.DATE)) {
            when (month == todayMonth) {
                true -> {
                    days[id] = DayInfo(
                        id = id,
                        day = "$i",
                        month = "$month",
                        isPossible = setIsPossible(today, i)
                    )
                    id++
                }

                false -> {
                    days[id] =
                        DayInfo(
                            id = id,
                            day = "$i",
                            month = "$month",
                            isPossible = true
                        )
                    id++
                }
            }

            start++
        }

        return days
    }

    private fun setIsPossible(today: Int, day: Int) = today <= day

    fun setDate(dayInfo: DayInfo) {

        when {
            startDate.day == "" && endDate.day == "" -> {
                startDate = dayInfo
                setPickDate()
                setStartDateLabel(dayInfo)
            }

            startDate.day != "" && endDate.day == "" -> {
                checkDate(dayInfo)
            }

            startDate.day != "" && endDate.day != "" -> {
                setCancelDate()
            }

        }

    }

    private fun checkDate(dayInfo: DayInfo) = when {

        startDate.month >= dayInfo.month -> {
            checkDay(dayInfo)
        }

        else -> {
            endDate = dayInfo
            _pickState.value = true
            setPickDate()
            setEndDateLabel(dayInfo)
        }
    }

    private fun checkDay(dayInfo: DayInfo) = when (startDate.id >= dayInfo.id) {

        true -> {
            val list = getCopyList()

            list.forEach { data ->
                data.days[startDate.id]?.apply {
                    isChoice = false
                    isStart = false
                    isEnd = false
                    isChecked = false
                }
            }
            startDate = DayInfo(day = "", month = "")

            _calendar.value = list
        }

        false -> {
            endDate = dayInfo
            setPickDate()
            setEndDateLabel(dayInfo)
            _pickState.value = true
        }

    }

    private fun setPickDate() {

        val list = getCopyList()

        list.forEach { data ->

            data.days[startDate.id]?.apply {
                isStart = true
                isChoice = true
                isChecked = true
            }

            data.days[endDate.id]?.apply {
                isEnd = true
                isChoice = true
                isChecked = true
            }

            for (i in startDate.id..endDate.id) {
                data.days[i]?.isChecked = true
            }

        }
        _calendar.value = list
    }


    fun setCancelDate() {
        val list = getCopyList()

        list.forEach { data ->

            for (i in startDate.id..endDate.id) {
                data.days[i]?.apply {
                    isChoice = false
                    isStart = false
                    isEnd = false
                    isChecked = false
                }
            }

        }

        startDate = DayInfo(day = "", month = "")
        endDate = DayInfo(day = "", month = "")
        _pickState.value = false
        _calendar.value = list
        _label.value = ""
    }

    private fun getCopyList(): List<CalendarData> {
        val list = mutableListOf<CalendarData>()
        _calendar.value.forEach { data ->
            val days = mutableMapOf<Int, DayInfo>()
            data.days.forEach { value ->
                days[value.key] = value.value.copy()
            }
            list.add(CalendarData(data.header, days))
        }
        return list
    }

    private fun setStartDateLabel(startDate: DayInfo) {
        _label.value = "${startDate.month}월 ${startDate.day}일"
    }

    private fun setEndDateLabel(endDate: DayInfo) {
        _label.value = "${startDate.month}월 ${startDate.day}일 - ${endDate.month}월 ${endDate.day}일"
    }

}
