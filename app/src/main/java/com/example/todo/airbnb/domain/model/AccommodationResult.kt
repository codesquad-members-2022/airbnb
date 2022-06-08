package com.example.todo.airbnb.domain.model

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf

data class AccommodationResult(
    val id: Int,
    val image: String,
    val starRate: Float,
    val reviewCount: Int,
    val name: String,
    val fee: Int,
    val total: Int,
    var isFavorite: MutableState<Boolean> = mutableStateOf(false),
)