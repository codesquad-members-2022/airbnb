package com.example.todo.airbnb.presentation.reservation.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import coil.compose.rememberImagePainter
import com.example.todo.airbnb.domain.model.Reservation
import com.example.todo.airbnb.presentation.reservation.ReservationViewModel

@Composable
fun ReservationScreen(
    navController: NavController,
    viewModel: ReservationViewModel,
) {
    viewModel.getReservationList()
    val reservation = viewModel.reservation.collectAsState().value
    val index = viewModel.itemIndex.value
    Scaffold(
        topBar = {
            ReservationTopAppBar(
                itemIndexNullCheck = {
                    if (index == null) navController.navigateUp()
                    else viewModel.clearItemIndex()
                }
            )
        },
    ) {
        if (index == null) {
            LazyColumn(
                modifier = Modifier
                    .padding(start = 16.dp, end = 16.dp, bottom = 70.dp)
                    .fillMaxWidth(),
                state = rememberLazyListState(),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                items(
                    count = reservation.size
                ) { index ->
                    ReservationItem(
                        reservation[index],
                        updateItemIndex = { viewModel.updateItemIndex(index) }
                    )
                }
            }
        } else {
            DetailedReservationScreen(
                reservation[index],
                onClear = {
                    viewModel.clearReservationList(index)
                    viewModel.clearItemIndex()
                }
            )
        }

    }
}

@Composable
private fun ReservationTopAppBar(
    itemIndexNullCheck: () -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .height(70.dp)
            .background(Color(0xffF5F5F7)),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(
                onClick = itemIndexNullCheck
            ) {
                Icon(
                    imageVector = Icons.Default.ArrowBack,
                    contentDescription = "Back Icon",
                    tint = Color.Black,
                )
            }
            Text(
                text = "예약",
                modifier = Modifier
                    .width(272.dp)
                    .height(24.dp)
                    .padding(start = 32.dp),
                fontSize = 20.sp
            )
        }
    }
}

@Composable
private fun ReservationItem(
    reservation: Reservation,
    updateItemIndex: () -> Unit,
) {
    fun dateTextConverter(text: String) =
        text.split(" ").let { "${it[0]} ${it[1]} ${it[2]}" }
    Column(
        modifier = Modifier
            .padding(top = 12.dp)
            .fillMaxWidth()
            .clickable { updateItemIndex() }
    ) {
        Image(
            painter = rememberImagePainter(data = reservation.image),
            contentDescription = "숙소 이미지",
            modifier = Modifier
                .height(160.dp)
                .clip(RoundedCornerShape(10.dp))
                .fillMaxWidth(),
            contentScale = ContentScale.FillBounds,
        )
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "${dateTextConverter(reservation.checkIn)} - ${dateTextConverter(reservation.checkOut)}",
            color = Color(0xff828282),
            fontSize = 14.sp
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = reservation.locationName,
            color = Color(0xff333333),
            fontSize = 19.sp
        )
        Spacer(modifier = Modifier.height(5.dp))
        Text(
            text = reservation.shortDescription,
            color = Color(0xff333333),
            fontSize = 16.sp
        )
    }
}