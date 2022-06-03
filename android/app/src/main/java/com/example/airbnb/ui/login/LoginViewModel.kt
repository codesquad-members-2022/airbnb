package com.example.airbnb.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.airbnb.common.Constants
import com.example.airbnb.domain.Repository
import kotlinx.coroutines.launch

class LoginViewModel(private val repository: Repository) :ViewModel(){

    fun getAccessToken(){
        viewModelScope.launch {
            Constants.JWT= repository.getAccessToken()
        }
    }
}