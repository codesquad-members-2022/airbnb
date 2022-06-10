package com.example.todo.airbnb.presentation.main

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.todo.airbnb.presentation.main.components.MainScreen
import com.example.todo.airbnb.presentation.reservation.ReservationViewModel
import com.example.todo.airbnb.presentation.search.SearchViewModel
import com.example.todo.airbnb.presentation.search.searchresult.ResultViewModel
import com.example.todo.airbnb.ui.theme.AirbnbTheme
import com.google.accompanist.pager.ExperimentalPagerApi

@ExperimentalPagerApi
@ExperimentalMaterialApi
class MainActivity : ComponentActivity() {

    private val viewModel: SearchViewModel by viewModels()
    private val reservationViewModel: ReservationViewModel by viewModels()
    private val searchResultViewModel: ResultViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AirbnbTheme(viewModel, reservationViewModel, searchResultViewModel)
        }
    }
}

@ExperimentalPagerApi
@ExperimentalMaterialApi
@Composable
fun AirbnbTheme(
    viewModel: SearchViewModel,
    reservationViewModel: ReservationViewModel,
    searchResultViewModel: ResultViewModel
) {
    AirbnbTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colors.background
        ) {
            MainScreen(
                viewModel = viewModel,
                reservationViewModel = reservationViewModel,
                searchResultViewModel = searchResultViewModel
            )
        }
    }
}