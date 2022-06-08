package com.team16.airbnb.ui.wish

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.team16.airbnb.R
import com.team16.airbnb.data.model.wishList
import com.team16.airbnb.databinding.FragmentWishBinding


class WishFragment : Fragment() {

    private val binding: FragmentWishBinding by lazy {
        FragmentWishBinding.inflate(layoutInflater)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val adapter = WishAdapter()
        binding.rvWishList.adapter = adapter
        setBackButton()
        adapter.submitList(wishList)
    }

    private fun setBackButton() {
        binding.topAppBar.setNavigationOnClickListener {
            findNavController().navigate(R.id.homeFragment)
        }
    }
}