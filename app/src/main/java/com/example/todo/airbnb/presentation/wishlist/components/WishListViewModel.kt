package com.example.todo.airbnb.presentation.wishlist.components

import androidx.lifecycle.ViewModel
import com.example.todo.airbnb.data.repository.MainRepositoryImpl
import com.example.todo.airbnb.domain.model.AccommodationResult
import com.example.todo.airbnb.domain.repository.MainRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class WishListViewModel(
    private val repository: MainRepository = MainRepositoryImpl(),
) : ViewModel() {

    private val _wishList = MutableStateFlow<MutableList<AccommodationResult>>(mutableListOf())
    val wishList: StateFlow<List<AccommodationResult>> = _wishList.asStateFlow()

    fun init(value: List<AccommodationResult>) {
        val filterList = value.filter {
            it.isFavorite.value
        }
        _wishList.value = filterList.toMutableList()
    }
}