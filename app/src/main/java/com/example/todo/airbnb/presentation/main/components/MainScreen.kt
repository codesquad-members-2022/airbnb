package com.example.todo.airbnb.presentation.main.components

import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.todo.airbnb.presentation.reservation.ReservationViewModel
import com.example.todo.airbnb.presentation.search.SearchViewModel
import com.example.todo.airbnb.presentation.search.searchresult.ResultViewModel
import com.google.accompanist.pager.ExperimentalPagerApi

@ExperimentalPagerApi
@ExperimentalMaterialApi
@Composable
fun MainScreen(
    viewModel: SearchViewModel,
    reservationViewModel: ReservationViewModel,
    searchResultViewModel: ResultViewModel
) {

    val navController = rememberNavController()
    val bottomBarTabs = listOf(HomeSections.Search, HomeSections.WishList, HomeSections.Reservation)
    val bottomBarRoutes = bottomBarTabs.map { it.route }
    val shouldShowBottomBar: Boolean =
        (navController.currentBackStackEntryAsState().value?.destination?.route in bottomBarRoutes) or (navController.currentBackStackEntryAsState().value?.destination?.route == Destinations.searchResult)

    Scaffold(
        bottomBar = {
            if (shouldShowBottomBar) {
                BottomBar(
                    navController,
                    bottomBarTabs = bottomBarTabs
                )
            }
        }
    ) {
        BottomNavGraph(navController, viewModel, reservationViewModel, searchResultViewModel)
    }
}