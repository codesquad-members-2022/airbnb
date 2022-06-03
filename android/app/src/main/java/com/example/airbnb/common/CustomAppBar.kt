package com.example.airbnb.common

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.view.LayoutInflater
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.databinding.DataBindingUtil
import com.example.airbnb.R
import com.example.airbnb.databinding.CustomAppbarBinding

class CustomAppBar(context: Context, attrs: AttributeSet?) :
    ConstraintLayout(context, attrs) {

    private lateinit var binding: CustomAppbarBinding

    init {
        binding = DataBindingUtil.inflate(
            LayoutInflater.from(context),
            R.layout.custom_appbar,
            this,
            true
        )
        getAttrs(attrs)
    }

    @SuppressLint("Recycle")
    private fun getAttrs(attrs: AttributeSet?) {
        val typedArray = context.obtainStyledAttributes(attrs, R.styleable.CustomAppBar)

        setTitleText(typedArray.getString(R.styleable.CustomAppBar_titleText))
        setBodyText(typedArray.getString(R.styleable.CustomAppBar_bodyText))
    }

    private fun setTitleText(titleText: String?) {
        binding.tvPriceRange.text = titleText
    }

    private fun setBodyText(bodyText: String?) {
        binding.tvPrice.text = bodyText
    }

}