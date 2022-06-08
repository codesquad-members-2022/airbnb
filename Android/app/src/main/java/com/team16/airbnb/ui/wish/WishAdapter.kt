package com.team16.airbnb.ui.wish

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.team16.airbnb.data.model.SearchResult
import com.team16.airbnb.data.model.WishData
import com.team16.airbnb.databinding.ItemWishBinding

class WishAdapter: ListAdapter<WishData.ResultData, WishAdapter.WishViewHolder>(WishDiffUtil) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): WishViewHolder {
        return WishViewHolder(ItemWishBinding.inflate(LayoutInflater.from(parent.context), parent, false))
    }

    override fun onBindViewHolder(holder: WishViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    class WishViewHolder(private val binding: ItemWishBinding): RecyclerView.ViewHolder(binding.root) {
        fun bind(item: WishData.ResultData) {
            binding.item = item
        }
    }

    private object WishDiffUtil: DiffUtil.ItemCallback<WishData.ResultData>() {
        override fun areItemsTheSame(oldItem: WishData.ResultData, newItem: WishData.ResultData) =
            oldItem.roomId == newItem.roomId

        override fun areContentsTheSame(oldItem: WishData.ResultData, newItem: WishData.ResultData) =
            oldItem == newItem

    }
}