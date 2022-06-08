package com.team16.airbnb.ui.mybook

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.team16.airbnb.common.DetailMoveListener
import com.team16.airbnb.data.model.MyBookData
import com.team16.airbnb.databinding.ItemMyBookBinding

class MyBookAdapter(private val listener: DetailMoveListener) :
    ListAdapter<MyBookData.Result, MyBookAdapter.MyBookViewHolder>(MyBookDiffUtil) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyBookViewHolder {
        return MyBookViewHolder(
            ItemMyBookBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: MyBookViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class MyBookViewHolder(private val binding: ItemMyBookBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(item: MyBookData.Result) {
            binding.item = item
            setItemClick()
        }

        private fun setItemClick() {
            itemView.setOnClickListener {
                listener.moveDetail()
            }
        }
    }

    private object MyBookDiffUtil : DiffUtil.ItemCallback<MyBookData.Result>() {
        override fun areItemsTheSame(
            oldItem: MyBookData.Result,
            newItem: MyBookData.Result
        ): Boolean {
            return oldItem.roomId == newItem.roomId
        }

        override fun areContentsTheSame(
            oldItem: MyBookData.Result,
            newItem: MyBookData.Result
        ): Boolean {
            return oldItem == newItem
        }

    }
}