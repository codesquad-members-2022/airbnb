package com.example.todo.airbnb.presentation.search.detail

import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.Share
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import coil.compose.rememberImagePainter
import com.example.todo.airbnb.R
import com.example.todo.airbnb.common.components.HandleImageResult
import com.example.todo.airbnb.common.components.ToastMessage
import com.example.todo.airbnb.domain.model.AccommodationResult
import com.example.todo.airbnb.domain.model.Search
import com.example.todo.airbnb.presentation.main.components.Destinations
import com.example.todo.airbnb.presentation.search.SearchViewModel
import java.text.DecimalFormat

@Composable
fun DetailScreen(navController: NavController, searchViewModel: SearchViewModel, id: Int) {
    val viewModel = viewModel<DetailViewModel>()
    viewModel.getDetailAccommodation(id)
    when (val state = viewModel.detailUiState.value) {
        is DetailUiState.DetailAccommodation -> {
            DetailContent(
                accommodation = state.detailAccommodations,
                reservation = searchViewModel.searchUiState.value,
                onBack = { navController.navigateUp() },
                onClick = {
                    navController.navigate(Destinations.calendar) {
                        popUpTo(Destinations.calendar) { inclusive = true }
                    }
                }
            )
        }
        is DetailUiState.Loading -> {
            ToastMessage(context = LocalContext.current, text = "상세 데이터가 없습니다.")
        }
    }
}

@Composable
fun DetailContent(
    accommodation: AccommodationResult,
    reservation: Search,
    onBack: () -> Unit,
    onClick: () -> Unit,
) {
    Column(
        modifier = Modifier
            .verticalScroll(rememberScrollState())
            .padding(bottom = 100.dp)
    ) {
        Box {
            LoadImage(
                accommodation.image,
                Modifier
                    .fillMaxWidth()
                    .height(375.dp)
            )
            Row(
                modifier = Modifier
                    .padding(start = 10.dp, top = 20.dp, end = 10.dp)
                    .fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                CircleButton(Icons.Default.ArrowBack, "back", onClick = { onBack() })
                Row {
                    CircleButton(Icons.Default.Share, "share", onClick = {})
                    Spacer(modifier = Modifier.width(10.dp))
                    CircleButton(Icons.Default.Favorite, "favorite",
                        onClick = {}
                    )
                }
            }
        }
        Column(modifier = Modifier.padding(start = 10.dp, end = 10.dp)) {
            Spacer(modifier = Modifier.height(8.5.dp))
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = accommodation.name,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
            Row {
                Image(
                    imageVector = Icons.Default.Star,
                    contentDescription = "star image",
                    colorFilter = ColorFilter.tint(Color.Red)
                )
                Spacer(modifier = Modifier.width(5.5.dp))
                Text(text = "${accommodation.starRate}")
                Spacer(modifier = Modifier.width(4.dp))
                Text(text = "후기 ${accommodation.reviewCount}개")
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = accommodation.address)

            Spacer(modifier = Modifier.height(8.dp))
            Spacer(
                modifier = Modifier
                    .height(1.dp)
                    .fillMaxWidth()
                    .background(Color.Gray)
            )
            Spacer(modifier = Modifier.height(8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    Text(text = "레지던스 전체")
                    Text(text = "호스트: Jong님")
                }
                LoadImage(
                    accommodation.image,
                    Modifier
                        .clip(RoundedCornerShape(50.dp))
                        .height(50.dp)
                        .width(50.dp)
                )
            }

            Text(text = "최대인원 ${accommodation.maxPerson}명 원룸 ${accommodation.onRoom}개 침대 ${accommodation.bed}개 욕실 ${accommodation.bathRoom}개")

            Spacer(modifier = Modifier.height(8.dp))
            Spacer(
                modifier = Modifier
                    .height(1.dp)
                    .fillMaxWidth()
                    .background(Color.Gray)
            )
            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = accommodation.description,
                maxLines = 3,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
    BottomReservation(
        accommodation,
        reservation,
        text = if (reservation.isDefault()) "정보 입력하기" else "예약하기",
        onClick = { onClick() }
    )
}

@Composable
private fun CircleButton(icon: ImageVector, description: String, onClick: () -> Unit) {
    Button(
        onClick = { onClick() },
        colors = ButtonDefaults.buttonColors(
            backgroundColor = Color.White,
            contentColor = Color.Black
        ),
        shape = CircleShape
    ) {
        Icon(imageVector = icon, contentDescription = description)
    }
}


@Composable
private fun LoadImage(imageURL: String?, modifier: Modifier) {
    val painter = rememberImagePainter(data = imageURL)
    if (imageURL == null) {
        HandleImageResult(
            painterState = painter.state,
            onEmpty = {
                Image(
                    painter = painterResource(id = R.drawable.ic_error),
                    contentDescription = "Error Image",
                    modifier = modifier,
                    contentScale = ContentScale.FillBounds
                )
            }
        )
    } else {
        Image(
            painter = painter,
            contentDescription = "숙소 이미지",
            modifier = modifier,
            contentScale = ContentScale.FillBounds
        )
    }
}

@Composable
fun BottomReservation(
    accommodation: AccommodationResult,
    reservation: Search,
    text: String,
    onClick: () -> Unit,
) {
    Box(modifier = Modifier.fillMaxSize()) {
        Row(
            modifier = Modifier
                .background(Color.LightGray)
                .fillMaxWidth()
                .height(80.dp)
                .align(Alignment.BottomCenter),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(
                modifier = Modifier.padding(start = 10.dp)
            ) {
                if (text == "예약하기") {
                    Text(text = "w${DecimalFormat("#,###").format(accommodation.fee)} / 박")
                    Spacer(modifier = Modifier.height(10.dp))
                    Text(text = "${reservation.checkIn} - ${reservation.checkOut}")
                } else {
                    Text(text = "요금을 확인하려면\n날짜를 입력해주세요.")
                }
            }
            BlackButton(text, reservation, onClick = { onClick() })
        }
    }
}

@Composable
private fun BlackButton(name: String, reservation: Search, onClick: () -> Unit) {
    Button(
        onClick = { },
        colors = ButtonDefaults.buttonColors(
            backgroundColor = Color.Black,
            contentColor = Color.White
        ),
        modifier = Modifier
            .clip(RoundedCornerShape(10.dp))
            .padding(vertical = 8.dp, horizontal = 5.dp)
    ) {
        Text(
            text = name,
            modifier = Modifier.clickable {
                if (name == "예약하기") {
                    // TODO 예약하기로
                } else {
                    if (reservation.isDefault()) onClick()
                }
            }
        )
    }
}