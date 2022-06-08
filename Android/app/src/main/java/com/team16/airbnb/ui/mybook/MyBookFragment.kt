package com.team16.airbnb.ui.mybook

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.team16.airbnb.R
import com.team16.airbnb.common.DetailMoveListener
import com.team16.airbnb.data.model.bookList
import com.team16.airbnb.databinding.FragmentHomeBinding
import com.team16.airbnb.databinding.FragmentMyBookBinding

class MyBookFragment : Fragment(), DetailMoveListener {

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

        val adapter = MyBookAdapter(this)
        binding.rvBookList.adapter = adapter

        setBackButton()
        adapter.submitList(bookList.result)
    }

    private fun setBackButton() {
        binding.topAppBar.setNavigationOnClickListener {
            findNavController().navigate(R.id.homeFragment)
        }
    }

    override fun moveDetail() {
        findNavController().navigate(R.id.action_myBookFragment_to_detailMyBookFragment)
    }

}