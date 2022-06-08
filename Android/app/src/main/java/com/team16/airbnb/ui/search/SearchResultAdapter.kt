package com.team16.airbnb.ui.search

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import coil.load
import com.team16.airbnb.data.model.SearchResult
import com.team16.airbnb.databinding.FragmentSearchResultBinding
import com.team16.airbnb.databinding.ItemSearchResultBinding

class SearchResultAdapter(private val roomClick: (roomId: Int) -> Unit) :
    ListAdapter<SearchResult, SearchResultAdapter.SearchResultViewHolder>(SearchResultDiffUtil) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SearchResultViewHolder {
        return SearchResultViewHolder(
            ItemSearchResultBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: SearchResultViewHolder, position: Int) {
        holder.bind(getItem(position), roomClick)
    }

    class SearchResultViewHolder(private val binding: ItemSearchResultBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(item: SearchResult, roomClick: (roomId: Int) -> Unit) {
            binding.item = item
            binding.ivRoomImage.load(item.imageUrl)
            binding.root.setOnClickListener {
                roomClick.invoke(item.roomId) // roomId로 상세 화면에 전달해서 해당 룸 정보 가져오도록 구현 예정
            }
        }
    }

    private object SearchResultDiffUtil : DiffUtil.ItemCallback<SearchResult>() {

        override fun areItemsTheSame(oldItem: SearchResult, newItem: SearchResult) =
            oldItem.roomId == oldItem.roomId

        override fun areContentsTheSame(oldItem: SearchResult, newItem: SearchResult) =
            oldItem == newItem

    }

}