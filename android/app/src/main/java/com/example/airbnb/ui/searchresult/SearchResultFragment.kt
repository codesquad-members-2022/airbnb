package com.example.airbnb.ui.searchresult

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import com.example.airbnb.R
import com.example.airbnb.databinding.FragmentSearchResultBinding
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

@AndroidEntryPoint
class SearchResultFragment : Fragment() {

    private lateinit var binding: FragmentSearchResultBinding
    private val viewModel: SearchResultViewModel by viewModels()
    private lateinit var searchResultPagingAdapter: SearchResultPagingAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_search_result, container, false)
        binding.lifecycleOwner = viewLifecycleOwner
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        viewModel.loadSearchResult()

        searchResultPagingAdapter = SearchResultPagingAdapter()
        binding.rvSearchResult.adapter = searchResultPagingAdapter
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.searchResult.collect {
                    Log.d("Fragment", it.toString())
                    searchResultPagingAdapter.submitData(it)
                }
            }
        }
    }
}