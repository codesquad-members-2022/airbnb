package com.example.todo.airbnb.presentation.search.serachcondition

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.example.todo.airbnb.domain.model.Personnel
import com.example.todo.airbnb.presentation.search.SearchViewModel

@Composable
fun SearchConditionScreen(navController: NavController, viewModel: SearchViewModel) {
    ConditionContent(navController, viewModel)
}

@Composable
fun ConditionContent(navController: NavController, viewModel: SearchViewModel) {
    Scaffold(
        topBar = { ConditionTopBar(onBack = { navController.navigateUp() }) }
    ) {
        Content(
            location = viewModel.search.value?.location ?: "",
            checkIn = viewModel.search.value?.checkIn ?: "",
            checkOut = viewModel.search.value?.checkOut ?: "",
            minPrice = viewModel.search.value?.minPrice,
            maxPrice = viewModel.search.value?.maxPrice,
            guest = viewModel.search.value?.guest
        )
    }
}

@Composable
private fun Content(
    location: String,
    checkIn: String,
    checkOut: String,
    minPrice: Float?,
    maxPrice: Float?,
    guest: Personnel?,
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 40.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        ConditionText("위치", location, onClick = {})
        ConditionText("체크인/체크아웃", "$checkIn - $checkOut", onClick = {})
        ConditionText("요금",
            if (minPrice == null || maxPrice == null) "" else "W${minPrice} - W${maxPrice}",
            onClick = {}
        )
        ConditionText(
            "인원",
            "성인 ${guest?.adult ?: "0"}, 어린이 ${guest?.child ?: "0"}, 유아  ${guest?.baby ?: "0"}",
            onClick = {}
        )
    }
}

@Composable
private fun ConditionText(
    title: String,
    description: String,
    onClick: () -> Unit,
) {
    Column(
        modifier = Modifier
            .clip(RoundedCornerShape(topStart = 10.dp, topEnd = 10.dp))
            .width(350.dp)
            .height(55.dp)
            .background(Color(0xffE0E0E0))
            .clickable { onClick() },
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = title,
            modifier = Modifier.padding(start = 16.dp),
            fontSize = 12.sp
        )
        Text(
            text = description,
            modifier = Modifier.padding(start = 16.dp),
            fontSize = 16.sp
        )
    }
}

@Composable
private fun ConditionTopBar(onBack: () -> Unit) {
    Row(
        horizontalArrangement = Arrangement.SpaceBetween,
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        IconButton(onClick = { onBack() }) {
            Icon(
                imageVector = Icons.Default.ArrowBack,
                contentDescription = "Back Icon",
                tint = Color.Black,
            )
        }

        IconButton(onClick = {}) {
            Icon(
                imageVector = Icons.Default.Check,
                contentDescription = "Check Icon",
                tint = Color.Black,
            )
        }
    }
}