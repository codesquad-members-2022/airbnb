package com.team16.airbnb.ui.home

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment.Companion.CenterVertically
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.ViewCompositionStrategy
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import coil.compose.AsyncImage
import com.team16.airbnb.R
import com.team16.airbnb.data.model.NearInfo
import com.team16.airbnb.databinding.FragmentHomeBinding
import com.team16.airbnb.ui.theme.AirbnbTheme
import com.team16.airbnb.ui.theme.Airbnb_Black
import com.team16.airbnb.ui.theme.Airbnb_Primary
import com.team16.airbnb.ui.theme.Off_White
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class HomeFragment : Fragment() {

    private lateinit var binding: FragmentHomeBinding

    private val viewModel: HomeViewModel by viewModels()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        Log.d("AppTest", "HomeFragment/ onCreateView")

        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_home, container, false)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        Log.d("AppTest", "HomeFragment/ onViewCreated")

        binding.composeViewInHome.apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                Surface(
                    //modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    HomeView()
                }
            }
        }

    }



    @Composable
    fun HomeView() {

        Scaffold(
            topBar = {
                HomeAppbar()
            }
        ) {
            ScrollBoxes()
        }
    }

    @Composable
    fun HomeAppbar() {
        TopAppBar(
            title = {
                Text("어디로 여행하세요?")
            },
            actions = {
                IconButton(
                    onClick = {
                        findNavController().navigate(R.id.action_homeFragment_to_searchFragment)
                    }
                ) {
                    Icon(
                        painter = painterResource(
                            id = R.drawable.ic_search_select
                        ),
                        contentDescription = "search icon",
                        tint = Airbnb_Primary
                    )
                }
            },
            backgroundColor = Off_White
        )
    }

    @Composable
    fun NearTripView(info: List<NearInfo>) {
        LazyHorizontalGrid(
            modifier = Modifier
                .height(200.dp)
                .fillMaxWidth(),
            rows = GridCells.Fixed(2)
        ) {
            items(info) { info ->
                NearDestination(info = info)
            }
        }
    }

    @Composable
    fun ImageLoad(image: String) {
        AsyncImage(
            model = image,
            contentDescription = "image",
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.FillBounds
        )
    }

    @Composable
    fun NearDestination(info: NearInfo) {
        Row(
            modifier = Modifier
                .width(220.dp)
                .padding(16.dp, 0.dp, 16.dp, 0.dp)
                .wrapContentHeight()
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth(0.35f)
                    .align(CenterVertically)
                    .aspectRatio(1 / 1f)
            ) {
                ImageLoad(image = info.image)
            }

            Spacer(modifier = Modifier.width(16.dp))

            Column(
                modifier = Modifier
                    .wrapContentSize()
                    .align(CenterVertically)
            ) {
                Text(
                    text = "${info.name}",
                    fontSize = 19.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    "${info.distance}",
                    fontSize = 16.sp
                )
            }

        }

    }

    @Composable
    fun ScrollBoxes() {

        val nearInfoList: List<NearInfo> by viewModel.nearTripList.collectAsState(initial = emptyList())
        val recommendTheme: List<NearInfo> by viewModel.recommendTheme.collectAsState(initial = emptyList())

        Column(
            modifier = Modifier
                .background(Color.White)
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
        ) {

            Image(
                painter = painterResource(id = R.drawable.hero_image),
                contentDescription = "hero_image",
                modifier = Modifier.fillMaxSize(),
                contentScale = ContentScale.Crop
            )

            Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = "가까운 여행지 둘러보기",
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp, 0.dp),
                style = TextStyle(
                    color = Airbnb_Black,
                    fontWeight = FontWeight.Bold
                ),
                fontSize = 23.sp
            )

            Spacer(modifier = Modifier.height(5.dp))

            NearTripView(info = nearInfoList )

            Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = "어디에서나, 여행은\n살아보는거야",
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp, 0.dp),
                style = TextStyle(
                    color = Airbnb_Black,
                    fontWeight = FontWeight.Bold
                ),
                fontSize = 23.sp
            )

            Spacer(modifier = Modifier.height(24.dp))

            HomeLastView(info = recommendTheme)
        }
    }

    @Composable
    fun HomeLastView(info: List<NearInfo>) {
        LazyRow(
            modifier = Modifier
                .fillMaxWidth()
                .height(300.dp),
            horizontalArrangement = Arrangement.spacedBy(5.dp)
        ) {
            items(info) {
                LastViewItem(info = it)
            }
        }
    }

    @Composable
    fun LastViewItem(info: NearInfo) {
        Column(
            modifier = Modifier
                .wrapContentHeight()
                .width(230.dp)
                .padding(16.dp, 0.dp)
        ) {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .aspectRatio(242 / 294f),
                shape = RoundedCornerShape(8),
                elevation = 30.dp
            ) {
                ImageLoad(image = info.image)
            }

            Spacer(modifier = Modifier.height(10.dp))

            Text(text = info.title)

        }
    }

    @Preview(showBackground = true)
    @Composable
    fun DefaultPreview() {
        AirbnbTheme {
            Column(
                modifier = Modifier.fillMaxSize()
            ) {
                HomeView()
            }
        }
    }

}