package com.example.todo.airbnb.presentation.search.detail

import android.util.Log
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.todo.airbnb.data.repository.MainRepositoryImpl
import com.example.todo.airbnb.domain.repository.MainRepository
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch

class DetailViewModel(
    private val repository: MainRepository = MainRepositoryImpl(),
) : ViewModel() {

    private val _detailUiState = mutableStateOf<DetailUiState>(DetailUiState.Loading)
    val detailUiState: State<DetailUiState> get() = _detailUiState

    fun getDetailAccommodation(id: Int) = viewModelScope.launch {
        repository.getDetailAccommodation(id).collectLatest {
            Log.d("test", "getDetailAccommodation: $it")
            _detailUiState.value = DetailUiState.DetailAccommodation(it)
        }
    }
}