package com.example.airbnb.ui.calendar

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import org.joda.time.LocalDate

class CalendarViewModel : ViewModel() {

    private val _checkInStatedFlow = MutableStateFlow<LocalDate?>(null)
    val checkInStatedFlow: StateFlow<LocalDate?> = _checkInStatedFlow

    private val _checkOutStatedFlow = MutableStateFlow<LocalDate?>(null)
    val checkOutStatedFlow: StateFlow<LocalDate?> = _checkOutStatedFlow

    //클릭한 날짜 정보 viewModel까지 가져오는 테스트
    fun saveDate(dateTime: LocalDate) {
        saveFirstSelectedDay(dateTime)
    }

    private fun saveFirstSelectedDay(dateTime: LocalDate) {
        viewModelScope.launch {
            with(_checkInStatedFlow) {
                this.value?.let {
                    when {
                        it.isEqual(dateTime) -> {
                            this.emit(dateTime)
                            _checkOutStatedFlow.emit(dateTime)
                            println("체크인 ${this.value}")
                            println("체크아웃 ${_checkOutStatedFlow.value}")
                            return@launch
                        }
                        it.isAfter(dateTime) -> {
                            this.emit(dateTime)
                            _checkOutStatedFlow.emit(null)
                            println("체크인 ${this.value}")
                            println("체크아웃 ${_checkOutStatedFlow.value}")
                            return@launch
                        }
                        else -> {
                             _checkOutStatedFlow.emit(dateTime)
                            println("체크인 ${this.value}")
                            println("체크아웃 ${_checkOutStatedFlow.value}")
                            return@launch
                        }
                    }
                } ?: this.emit(dateTime)
                println("체크인 ${this.value}")
                println("체크아웃 ${_checkOutStatedFlow.value}")
                return@launch
            }
        }
    }


}