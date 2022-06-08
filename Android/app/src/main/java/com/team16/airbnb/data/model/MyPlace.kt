package com.team16.airbnb.data.model

import com.google.android.gms.maps.model.LatLng

data class MyPlace(
    val latLng: LatLng,
    val price: Int
)