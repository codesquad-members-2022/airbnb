package com.team16.airbnb.ui

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.team16.airbnb.databinding.FragmentHomeBinding
import com.team16.airbnb.databinding.FragmentMyBookBinding

class MyBookFragment : Fragment() {

    private val binding: FragmentMyBookBinding by lazy {
        FragmentMyBookBinding.inflate(layoutInflater)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
    }

}