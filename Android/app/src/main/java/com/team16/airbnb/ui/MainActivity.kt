package com.team16.airbnb.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.databinding.DataBindingUtil
import androidx.navigation.fragment.findNavController
import androidx.navigation.ui.setupWithNavController
import com.team16.airbnb.R
import com.team16.airbnb.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        val navController = supportFragmentManager.findFragmentById(R.id.nav_host_fragment)?.findNavController()
        navController?.let{
            binding.bottomNavigation.setupWithNavController(it)
        }
    }
}