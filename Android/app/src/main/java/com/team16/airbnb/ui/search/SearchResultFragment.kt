package com.team16.airbnb.ui.search

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.team16.airbnb.data.model.SearchResult
import com.team16.airbnb.databinding.FragmentSearchResultBinding
import com.team16.airbnb.ui.search.map.MapActivity
import com.team16.airbnb.ui.search.roomdetail.RoomDetailActivity

class SearchResultFragment : Fragment() {

    private lateinit var binding: FragmentSearchResultBinding
    private lateinit var searchResultAdapter: SearchResultAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentSearchResultBinding.inflate(layoutInflater)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        searchResultAdapter = SearchResultAdapter{
            val intent = Intent(requireActivity(), RoomDetailActivity::class.java)
            intent.putExtra("roomId", it)
            startActivity(intent)
        }
        binding.rvSearchResultList.adapter = searchResultAdapter

        setSampleData()
        setGoToMap()
    }

    private fun setSampleData(){
        val sampleDataList = ArrayList<SearchResult>()
        sampleDataList.add(SearchResult("https://cdn.travie.com/news/photo/202102/21745_10249_2656.jpg", 82000,
            4.75, 65, 1, "Spacious and Comfortable cozy house #4", 1400000))

        sampleDataList.add(SearchResult("https://cdn.travie.com/news/photo/202102/21745_10249_2656.jpg", 92000,
            4.80, 127, 2, "Happy and Comfortable cozy house #4", 1500000))

        searchResultAdapter.submitList(sampleDataList.toList())
    }

    private fun setGoToMap(){
        binding.cvGotoMap.setOnClickListener {
            val intent = Intent(requireActivity(), MapActivity::class.java)
            startActivity(intent)
        }
    }
}