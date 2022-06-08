package com.team16.airbnb.common

import android.view.View
import android.widget.TextView
import androidx.databinding.BindingAdapter

@BindingAdapter("skipVisible")
fun setSkipVisible(skipView: TextView, state: Boolean) {
    when(state) {
        true -> skipView.visibility = View.GONE
        false -> skipView.visibility = View.VISIBLE
    }
}

@BindingAdapter("removeVisible")
fun setRemoveVisible(removeView: TextView, state: Boolean) {
    when(state) {
        true -> removeView.visibility = View.VISIBLE
        false -> removeView.visibility = View.GONE
    }
}
