package com.team16.airbnb.ui.calendar

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.*
import com.team16.airbnb.common.DateChoiceListener
import com.team16.airbnb.data.model.CalendarData
import com.team16.airbnb.databinding.ItemCalendarBinding

class CalendarAdapter(
    private val listener: DateChoiceListener
    ): ListAdapter<CalendarData, CalendarAdapter.CalendarViewHolder>(CalendarDiffUtil) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CalendarViewHolder {
        return CalendarViewHolder(ItemCalendarBinding.inflate(LayoutInflater.from(parent.context), parent, false))
    }

    override fun onBindViewHolder(holder: CalendarViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class CalendarViewHolder(private val binding: ItemCalendarBinding): RecyclerView.ViewHolder(binding.root) {
        fun bind(calendarData: CalendarData) {
            binding.item = calendarData
            setAdapter(calendarData)
        }

        private fun setAdapter(calendarData: CalendarData) {
            val dayAdapter = DayAdapter(listener)
            val lm = GridLayoutManager(binding.root.context,7)
            
            binding.tvCalendarDay.apply {
                adapter = dayAdapter
                layoutManager = lm
            }

            dayAdapter.submitList(calendarData.days.values.toList())
        }
    }

    private object CalendarDiffUtil: DiffUtil.ItemCallback<CalendarData>() {

        override fun areItemsTheSame(oldItem: CalendarData, newItem: CalendarData) =
        oldItem.header == newItem.header

        override fun areContentsTheSame(oldItem: CalendarData, newItem: CalendarData) =
            oldItem == newItem

    }

}