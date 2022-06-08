package com.example.todo.airbnb.domain.model

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf

data class AccommodationResult(
    val id: Int,
    val image: String = "",
    val starRate: Float = 0f,
    val reviewCount: Int = 0,
    val name: String = "",
    val fee: Int = 0,
    val total: Int = 0,
    val address: String = "",
    val maxPerson: Int = 0,
    val onRoom: Int = 0,
    val bed: Int = 0,
    val bathRoom: Int = 0,
    val description: String = "",
    var isFavorite: MutableState<Boolean> = mutableStateOf(false),
)