package com.example.todo.airbnb.presentation.search.main

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.todo.airbnb.data.Travel
import com.example.todo.airbnb.domain.model.Search
import com.example.todo.airbnb.presentation.main.components.Destinations
import com.example.todo.airbnb.presentation.search.SearchViewModel

@ExperimentalMaterialApi
@Composable
fun SearchScreen(viewModel: SearchViewModel, navController: NavController) {
    SearchMainScreen(navController, viewModel)
}

@ExperimentalMaterialApi
@Composable
fun SearchMainScreen(navController: NavController, viewModel: SearchViewModel) {
    val searchWidgetState by viewModel.searchWidgetState
    val searchTextState by viewModel.searchTextState
    val travelLocations = viewModel.travelLocation.collectAsState().value
    val searchLocations = viewModel.searchLocations.collectAsState().value
    Scaffold(
        topBar = {
            MainAppBar(
                searchWidgetState = searchWidgetState,
                searchTextState = searchTextState,
                onTextChange = { viewModel.updateSearchText(newValue = it) },
                onCloseClicked = { viewModel.updateSearchText(newValue = "") },
                onSearchClicked = { viewModel.getSearchLocations(searchTextState) },
                onOpenTriggered = { viewModel.updateSearchWidgetState(newValue = SearchWidgetState.OPEN) },
                onCloseTriggered = { viewModel.updateSearchWidgetState(newValue = SearchWidgetState.CLOSED) },
            )
        }
    ) {
        when (searchWidgetState) {
            is SearchWidgetState.CLOSED -> {
                Column(
                    modifier = Modifier.verticalScroll(rememberScrollState())
                ) {
                    LoadMainImage()
                    TravelScreen(viewModel = viewModel, navController = navController)
                    AccommodationsScreen(viewModel = viewModel)
                }
            }
            is SearchWidgetState.OPEN -> {
                when {
                    searchTextState.isEmpty() -> SearchList(
                        navController,
                        travelLocations,
                        onAddReservation = { locationName ->
                            viewModel.addReservation(
                                Search
                                    .defaultOf()
                                    .copy(
                                        location = locationName
                                    )
                            )
                        }
                    )
                    else -> SearchList(
                        navController,
                        searchLocations,
                        onAddReservation = { locationName ->
                            viewModel.addReservation(
                                Search
                                    .defaultOf()
                                    .copy(
                                        location = locationName
                                    )
                            )
                        }
                    )
                }
                BackHandler {
                    viewModel.updateSearchWidgetState(SearchWidgetState.CLOSED)
                }
            }
        }
    }

}

@ExperimentalMaterialApi
@Composable
private fun SearchList(
    navController: NavController,
    travelLocations: List<Travel>,
    onAddReservation: (String) -> Unit,
) {
    LazyColumn(
        modifier = Modifier
            .padding(start = 16.dp, bottom = 60.dp, top = 32.dp, end = 16.dp)
    ) {
        if (!travelLocations.isNullOrEmpty()) {
            item {
                Text(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 24.dp),
                    text = "근처의 인기 여행지",
                    style = MaterialTheme.typography.h6
                )
            }
            items(travelLocations) { location ->
                Row(
                    modifier = Modifier
                        .clickable {
                            onAddReservation(location.name)
                            navController.navigate(Destinations.calendar)
                        }
                        .fillMaxWidth()
                ) { MakeItem(location = location) }
                Spacer(modifier = Modifier.height(16.dp))
            }
        }
    }
}