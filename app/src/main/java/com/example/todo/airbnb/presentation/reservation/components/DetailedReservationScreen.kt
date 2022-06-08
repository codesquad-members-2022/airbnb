package com.example.todo.airbnb.presentation.reservation.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberImagePainter
import com.example.todo.airbnb.domain.model.Reservation
import java.text.DecimalFormat

@Composable
fun DetailedReservationScreen(
    reservation: Reservation,
    onClear: () -> Unit,
) {
    Column(
        modifier = Modifier
            .padding(start = 16.dp, end = 16.dp, top = 12.dp, bottom = 56.dp)
            .fillMaxWidth()
            .verticalScroll(rememberScrollState())
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
        Spacer(modifier = Modifier.height(24.dp))
        Text(
            text = reservation.locationName,
            color = Color(0xff333333),
            fontSize = 19.sp
        )
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = reservation.shortDescription,
            color = Color(0xff333333),
            fontSize = 16.sp
        )
        Spacer(modifier = Modifier.height(24.dp))
        CustomSpacer()
        Spacer(modifier = Modifier.height(24.dp))
        Text(
            text = "체크인",
            style = MaterialTheme.typography.body2,
            color = Color(0xff828282)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = reservation.checkIn,
            style = MaterialTheme.typography.body1,
            color = Color(0xff333333)
        )
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "체크아웃",
            style = MaterialTheme.typography.body2,
            color = Color(0xff828282)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = reservation.checkOut,
            style = MaterialTheme.typography.body1,
            color = Color(0xff333333)
        )
        Spacer(modifier = Modifier.height(24.dp))
        CustomSpacer()
        Spacer(modifier = Modifier.height(24.dp))
        Text(
            text = "간략 정보",
            style = MaterialTheme.typography.body2,
            color = Color(0xff828282)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "호스트: ${reservation.host}님",
            style = MaterialTheme.typography.body1,
            color = Color(0xff333333)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "집전체∙ 게스트${reservation.maximumPeople}명",
            style = MaterialTheme.typography.body1,
            color = Color(0xff333333)
        )
        val changeMoney = DecimalFormat("#,###")
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "₩${changeMoney.format(reservation.accommodationsFee)}",
            style = MaterialTheme.typography.body1,
            color = Color(0xff333333)
        )
        Spacer(modifier = Modifier.height(24.dp))
        Button(
            onClick = onClear,
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp)
                .clip(RoundedCornerShape(10.dp)),
            colors = ButtonDefaults.buttonColors(
                backgroundColor = Color(0xff333333),
                contentColor = Color(0xffffffff)
            ),
            contentPadding = PaddingValues(top = 14.dp, bottom = 14.dp)
        ) {
            Text(
                text = "예약 취소",
                style = MaterialTheme.typography.button
            )
        }
        Spacer(modifier = Modifier.height(32.dp))
    }
}

@Composable
fun CustomSpacer() {
    Spacer(
        modifier = Modifier
            .fillMaxWidth()
            .height(1.dp)
            .border(width = 1.dp, color = Color(0xffE0E0E0))
    )
}