package com.team16.airbnb.ui.search

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.team16.airbnb.data.model.Data
import com.team16.airbnb.data.model.NearInfo
import com.team16.airbnb.databinding.ItemPopularBinding
import com.team16.airbnb.databinding.ItemPopularHeaderBinding

private const val HEADER = 0
private const val BODY = 1

class PopularAdapter(
    private val startActivity: () -> Unit
): ListAdapter<Data, RecyclerView.ViewHolder>(PopularDiffUtil) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return when(viewType) {
            HEADER -> PopularHeaderViewHolder(ItemPopularHeaderBinding.inflate(LayoutInflater.from(parent.context), parent, false))
            else -> PopularViewHolder(ItemPopularBinding.inflate(LayoutInflater.from(parent.context), parent, false))
        }
    }

    override fun getItemViewType(position: Int): Int {
        return when(position) {
            0 -> HEADER
            else -> BODY
        }
    }

    override fun getItemCount(): Int {
        return currentList.size + 1
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        when(position) {
            0 -> (holder as PopularHeaderViewHolder)
            else -> (holder as PopularViewHolder).bind(getItem(position - 1) as NearInfo)
        }
    }

    inner class PopularViewHolder(private val binding: ItemPopularBinding): RecyclerView.ViewHolder(binding.root) {
        fun bind(item: NearInfo) {
            binding.item = item
            setOnClickItem()
        }

        private fun setOnClickItem() {
            itemView.setOnClickListener {
                startActivity()
            }
        }
    }

    class PopularHeaderViewHolder(private val binding: ItemPopularHeaderBinding): RecyclerView.ViewHolder(binding.root)

    private object PopularDiffUtil: DiffUtil.ItemCallback<Data>() {
        override fun areItemsTheSame(oldItem: Data, newItem: Data) =
            oldItem.hashCode() == newItem.hashCode()

        override fun areContentsTheSame(oldItem: Data, newItem: Data) =
            oldItem == newItem

    }
}