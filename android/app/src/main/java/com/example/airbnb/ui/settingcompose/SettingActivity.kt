package com.example.airbnb.ui.settingcompose


import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import com.example.airbnb.R
import com.example.airbnb.databinding.ActivitySettingBinding
import com.example.airbnb.ui.MainActivity
import com.example.airbnb.ui.common.ButtonState
import com.example.airbnb.ui.placesearch.ACTIVITY_RESULT_OK
import com.example.airbnb.ui.theme.DivideGray
import com.example.airbnb.ui.theme.OffWhite
import com.example.airbnb.ui.theme.Primary
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

@AndroidEntryPoint
class SettingActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySettingBinding
    private val viewModel by viewModels<SettingViewModel>()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_setting)

        setTopBottomComposeView()
        listenHeadCountPage()
        listenPageMoving()

        viewModel.changeToNextFragment()
        setContentView(binding.root)
    }

    private fun setTopBottomComposeView() {
        binding.cvSettingTop.setContent {
            MyAppBar()
        }
        binding.cvSettingBottom.setContent {
            MyBottomBar()
        }
    }

    private fun listenHeadCountPage() {
        lifecycleScope.launch {
            repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.nowFragment.collect {
                    if (it is HeadCountPage) {
                        binding.cvHeadCountContents.setContent {
                            MyContents()
                        }
                    } else {
                        binding.cvHeadCountContents.setContent {
                            null
                        }
                    }
                }
            }
        }
    }

    override fun onBackPressed() {
        viewModel.changeToBeforeFragment()
    }

    private fun listenPageMoving() {
        lifecycleScope.launch {
            repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.nowFragment.collect {
                    if (it is NonePage) finish()
                    else {
                        it.changePage(
                            supportFragmentManager,
                            R.id.setting_fragment_container,
                            viewModel
                        )
                    }
                }
            }
        }
    }


    @Composable
    fun MyContents() {
        Column(modifier = Modifier.fillMaxWidth()) {
            MyContentsRow()
        }
    }

    @Composable
    fun MyContentsRow() {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 20.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "성인",
                    Modifier.padding(start = 16.dp, top = 16.dp),
                    color = Color.Black,
                    fontSize = 18.sp
                )
                Text(
                    text = "만 13세 이상",
                    Modifier.padding(start = 16.dp, top = 10.dp),
                    color = Color.Gray
                )
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(
                    onClick = { viewModel.setAdultQuantity(ButtonState.MINUS) },
                    enabled = viewModel.adultQuantity.collectAsState().value > 0
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_remove_circle_outline_24),
                        contentDescription = "minus button",
                        Modifier.size(40.dp)
                    )
                }
                Text(
                    text = viewModel.adultQuantity.collectAsState().value.toString(),
                    Modifier.padding(horizontal = 14.dp),
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold
                )
                IconButton(
                    onClick = { viewModel.setAdultQuantity(ButtonState.PLUS) },
                    Modifier.padding(end = 10.dp)
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_add_circle_outline_24),
                        contentDescription = "plus button",
                        Modifier.size(40.dp)
                    )
                }
            }
        }
        Divider(
            color = DivideGray,
            modifier = Modifier
                .fillMaxWidth()
                .width(1.dp)
                .padding(start = 14.dp, end = 14.dp)
        )
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 20.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "어린이",
                    Modifier.padding(start = 16.dp, top = 16.dp),
                    color = Color.Black,
                    fontSize = 18.sp
                )
                Text(
                    text = "만 2~12세",
                    Modifier.padding(start = 16.dp, top = 10.dp),
                    color = Color.Gray
                )
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(
                    onClick = { viewModel.setChildQuantity(ButtonState.MINUS) },
                    enabled = viewModel.childQuantity.collectAsState().value > 0
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_remove_circle_outline_24),
                        contentDescription = "minus button",
                        Modifier.size(40.dp)
                    )
                }
                Text(
                    text = viewModel.childQuantity.collectAsState().value.toString(),
                    Modifier.padding(horizontal = 14.dp),
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold
                )
                IconButton(
                    onClick = { viewModel.setChildQuantity(ButtonState.PLUS) },
                    Modifier.padding(end = 10.dp)
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_add_circle_outline_24),
                        contentDescription = "plus button",
                        Modifier.size(40.dp)
                    )
                }
            }
        }
        Divider(
            color = DivideGray,
            modifier = Modifier
                .fillMaxWidth()
                .width(1.dp)
                .padding(start = 14.dp, end = 14.dp)
        )
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 20.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "유아",
                    Modifier.padding(start = 16.dp, top = 16.dp),
                    color = Color.Black,
                    fontSize = 18.sp
                )
                Text(
                    text = "만 2세 미만",
                    Modifier.padding(start = 16.dp, top = 10.dp),
                    color = Color.Gray
                )
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(
                    onClick = { viewModel.setBabyQuantity(ButtonState.MINUS) },
                    enabled = viewModel.babyQuantity.collectAsState().value > 0
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_remove_circle_outline_24),
                        contentDescription = "minus button",
                        Modifier.size(40.dp)
                    )
                }
                Text(
                    text = viewModel.babyQuantity.collectAsState().value.toString(),
                    Modifier.padding(horizontal = 14.dp),
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold
                )
                IconButton(
                    onClick = { viewModel.setBabyQuantity(ButtonState.PLUS) },
                    Modifier.padding(end = 10.dp)
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_baseline_add_circle_outline_24),
                        contentDescription = "plus button",
                        Modifier.size(40.dp)
                    )
                }
            }
        }
    }


    @Composable
    fun MyAppBar() {
        TopAppBar(
            modifier = Modifier.height(180.dp),
            backgroundColor = OffWhite
        ) {
            Column {
                Row(
                    modifier = Modifier
                        .background(OffWhite)
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    val nowFragment by viewModel.nowFragment.collectAsState()
                    IconButton(onClick = { }) {
                        Icon(
                            painter = painterResource(id = R.drawable.ic_baseline_chevron_left_24),
                            contentDescription = "back button"
                        )
                    }
                    IconButton(onClick = {
                        if (nowFragment is HeadCountPage) {
                            val intent = Intent(this@SettingActivity, MainActivity::class.java)
                                .apply {
                                    this.putExtra("minRange", 10)
                                }
                            setResult(ACTIVITY_RESULT_OK, intent)
                            if (!isFinishing) finish()
                        }
                    }) {
                        Icon(
                            painter = painterResource(id = R.drawable.ic_baseline_check_24),
                            contentDescription = "check button",
                            tint = Primary
                        )
                    }
                }

                val explain by viewModel.topExplain.collectAsState()
                val content by viewModel.topContent.collectAsState()

                Text(
                    text = explain,
                    modifier = Modifier.padding(start = 70.dp),
                    fontSize = 14.sp
                )
                Text(
                    text = content,
                    modifier = Modifier.padding(start = 70.dp, top = 30.dp),
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }

    @Composable
    fun MyBottomBar() {
        BottomAppBar(
            modifier = Modifier.height(68.dp),
            backgroundColor = OffWhite
        ) {
            TextButton(
                onClick = { viewModel.changeToNextFragment() },
                modifier = Modifier.padding(start = 20.dp)
            ) {
                Text(text = getString(R.string.price_page_jump), color = Color.Black)
            }
            TextButton(
                onClick = { },
                modifier = Modifier.padding(start = 20.dp)
            ) {
                Text(text = getString(R.string.price_page_reset), color = Color.Black)
            }
        }
    }
}