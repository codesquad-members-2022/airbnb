package com.example.todo.airbnb.presentation.search.detail

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
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
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import coil.compose.rememberImagePainter
import com.example.todo.airbnb.R
import com.example.todo.airbnb.common.components.HandleImageResult
import java.text.DecimalFormat

@Composable
fun DetailScreen(navController: NavController) {
    DetailContent(onBack = { navController.navigateUp() })
}

@Composable
fun DetailContent(onBack: () -> Unit) {
    val dummyImage =
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"

    Column(
        modifier = Modifier
            .verticalScroll(rememberScrollState())
            .padding(bottom = 100.dp)
    ) {
        Box {
            LoadImage(dummyImage,
                Modifier
                    .fillMaxWidth()
                    .height(375.dp))
            Row(
                modifier = Modifier
                    .padding(start = 10.dp, top = 20.dp, end = 10.dp)
                    .fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                CircleButton(Icons.Default.ArrowBack,
                    "back",
                    onClick = { onBack() })
                Row {
                    CircleButton(Icons.Default.Share, "share", onClick = {})
                    Spacer(modifier = Modifier.width(10.dp))
                    CircleButton(Icons.Default.Favorite, "favorite", onClick = {})
                }
            }
        }
        Column(modifier = Modifier.padding(start = 10.dp, end = 10.dp)) {
            Spacer(modifier = Modifier.height(8.5.dp))
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = "Spacious and Comfortable cozy house #4",
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
                Text(text = "4.25")
                Spacer(modifier = Modifier.width(4.dp))
                Text(text = "후기 127개")
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = "서초구, 서울, 한국")

            Spacer(modifier = Modifier.height(8.dp))
            Spacer(modifier = Modifier
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
                LoadImage(dummyImage,
                    Modifier
                        .clip(RoundedCornerShape(50.dp))
                        .height(50.dp)
                        .width(50.dp))
            }

            Text(text = "최대인원 3명 원룸 침대 1개 욕실 1개")

            Spacer(modifier = Modifier.height(8.dp))
            Spacer(modifier = Modifier
                .height(1.dp)
                .fillMaxWidth()
                .background(Color.Gray)
            )
            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "강남역 5번 출구에서 도보로 이동가능합니다. 지하철, 버스 노선이 다양하고 맛집, 마트 등 주변 시설이 풍부합니다. 깨끗하고, 아늑한 ...",
                maxLines = 3,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
    BottomReservation()
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
fun BottomReservation() {
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
                Text(text = "w${DecimalFormat("#,###").format(82953)} / 박")
                Spacer(modifier = Modifier.height(10.dp))
                Text(text = "5월 25일 - 5월 28일")
            }
            BlackButton("예약하기")
        }
    }
}

@Composable
private fun BlackButton(name: String) {
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
        Text(text = name)
    }
}