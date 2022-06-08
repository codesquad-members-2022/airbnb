package com.team16.airbnb

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import com.stfalcon.pricerangebar.model.BarEntry
import com.team16.airbnb.databinding.FragmentHomeBinding
import com.team16.airbnb.databinding.FragmentMoneyRangeBinding
import java.text.DecimalFormat
import java.util.ArrayList


class MoneyRangeFragment : Fragment() {

    private lateinit var binding: FragmentMoneyRangeBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        Log.d("AppTest", "MoneyRangeFragment/ onCreateView")

        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_money_range, container, false)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        Log.d("AppTest", "MoneyRangeFragment/ onViewCreated")

        val chartList = ArrayList<BarEntry>()

        for (i in 1..20) {
            val end = i * 50000f - 3000f
            val start = end - 44000f

            val count = (1..30).random().toFloat()

            chartList.add(BarEntry(start, 0f))
            chartList.add(BarEntry(start, count))
            chartList.add(BarEntry(end, count))
            chartList.add(BarEntry(end, 0f))

        }

        binding.rangeBarWithChart.setEntries(chartList)


        var start = "0"
        var end = "1,000,000"

        val decimalFormat = DecimalFormat("#,###")
        binding.rangeBarWithChart.onLeftPinChanged = { index, leftPinValue ->
            Log.d("AppTest", "leftpin / index : ${index}, value : ${leftPinValue}")

            start = decimalFormat.format(leftPinValue?.substring(0, leftPinValue.length - 2)?.toInt())
            binding.tietLeftpin.setText(start)

            binding.tvMoneyRange.text = getString(R.string.money_label_string, start, end)
        }
        binding.rangeBarWithChart.onRightPinChanged = { index, rightPinValue ->
            Log.d("AppTest", "rightpin / index : ${index}, value : ${rightPinValue}")

            end = decimalFormat.format(rightPinValue?.substring(0, rightPinValue.length - 2)?.toInt())
            binding.tietRightpin.setText(end)

            binding.tvMoneyRange.text = getString(R.string.money_label_string, start, end)
        }
    }


}