package com.team16.airbnb.ui.search

import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import com.team16.airbnb.R
import com.team16.airbnb.databinding.FragmentSearchBinding
import com.team16.airbnb.ui.MainActivity
import com.team16.airbnb.ui.home.HomeViewModel
import com.team16.airbnb.ui.search.detail.DetailSearchActivity
import kotlinx.coroutines.launch

class SearchFragment : Fragment() {

    private lateinit var binding: FragmentSearchBinding
    private val viewModel: HomeViewModel by activityViewModels()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_search, container, false)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setBackButton()
        setEraseButton()
        setEditText()
        setPopularList()
    }

    private fun setBackButton() {
        binding.ivBack.setOnClickListener {
            activity?.onBackPressed()
        }
    }

    private fun setEraseButton() {
        binding.ivEraseText.setOnClickListener {
            Log.d("AppTest", "erase clicked")
            binding.etSearch.setText("")
        }
    }

    private fun setEditText() {
        binding.etSearch.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {

            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {

            }

            override fun afterTextChanged(s: Editable?) {
                Log.d("AppTest", "text len : ${s.toString().length}")
                if (s.toString().isNotEmpty()) {
                    binding.ivEraseText.visibility = View.VISIBLE

                    // 검색어 기준 정보 가져오기

                } else {
                    binding.ivEraseText.visibility = View.INVISIBLE

                    // 검색어 x 인 경우 리스트 보여주기

                }
            }

        })
    }

    private fun setPopularList() {

        val adapter = PopularAdapter{
           val intent = Intent(requireActivity(), DetailSearchActivity::class.java)
           // startActivity(intent)
            (requireActivity() as MainActivity).resultLauncher.launch(intent)
        }

        binding.rvSearchList.adapter = adapter

        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.nearTripList.collect {
                    adapter.submitList(it)
                }
            }
        }

    }

}