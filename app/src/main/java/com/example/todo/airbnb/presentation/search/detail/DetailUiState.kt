package com.example.todo.airbnb.presentation.search.detail

import com.example.todo.airbnb.domain.model.AccommodationResult

sealed class DetailUiState {
    object Loading : DetailUiState()
    data class DetailAccommodation(val detailAccommodations: AccommodationResult) : DetailUiState()
}