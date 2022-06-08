package com.team16.airbnb.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.team16.airbnb.data.model.NearInfo
import com.team16.airbnb.data.repository.HomeRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor(private val repository: HomeRepository) : ViewModel() {

    private val _heroInfo = MutableStateFlow("")
    val heroInfo = _heroInfo

    private val _nearTripList = MutableStateFlow<List<NearInfo>>(emptyList())
    val nearTripList = _nearTripList

    private val _recommendTheme = MutableStateFlow<List<NearInfo>>(emptyList())
    val recommendTheme = _recommendTheme

    init {
        getNearTripList()
        getRecommendTheme()
    }

    private fun getHeroInfo() {
        _heroInfo.value
    }

    private fun getNearTripList() {
        viewModelScope.launch {
            repository.getNearInfo().collect{
                _nearTripList.value = it
            }
        }
    }

    private fun getRecommendTheme(){
        viewModelScope.launch {
            repository.getRecommendThem().collect{
                _recommendTheme.value = it
            }
        }
    }
}