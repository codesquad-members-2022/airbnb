package com.team16.airbnb.common

import android.widget.ImageView
import androidx.databinding.BindingAdapter
import coil.load
import coil.transform.RoundedCornersTransformation

@BindingAdapter("imageUrl")
fun roundedCornersImageLoad(imageView: ImageView, image: String) {
    imageView.load(image) {
        transformations(RoundedCornersTransformation(30f))
    }
}