package com.team16.airbnb.data.model

sealed class Data

data class  Header(
    val title: String
):Data()

data class NearInfo(
    val image: String,
    val distance: String = "",
    val name: String = "",
    val title: String = ""
): Data()

