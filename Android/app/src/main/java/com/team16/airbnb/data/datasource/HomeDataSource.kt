package com.team16.airbnb.data.datasource

import com.team16.airbnb.R
import com.team16.airbnb.data.model.NearInfo
import com.team16.airbnb.data.network.HomeApi
import kotlinx.coroutines.flow.flow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class HomeDataSource @Inject constructor(private val api: HomeApi) {

    private val list = listOf<NearInfo>(
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 10분",
            "서울"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 20분",
            "부산"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 30분",
            "대구"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 40분",
            "대전"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 50분",
            "광주"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 45분",
            "분당"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "차로 70분",
            "호주"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "비행기로 1시간",
            "도쿄"
        ),
        NearInfo(
            "https://s.pstatic.net/shopping.phinf/20220516_23/83d3abbb-891d-41a3-ba14-909bb34f1e88.jpg",
            "기차로 30분",
            "독도"

        )
    )

    private val lastList = listOf<NearInfo>(
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "자연생활을 만끽할 수 있는 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "나혼자 산다 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "조용한 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "공포의 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "경관이 멋진 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "호캉스 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "우기, 제이, 한이 있는 숙취의 숙소"
        ),
        NearInfo(
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/T7Y4P736SLLCA6FU2HAHOQIISA.jpg",
            title = "국밥이 있는 해장 숙소"
        )
    )

    fun getNearInfo() = flow {
        emit(list)
    }

    fun getRecommendTheme() = flow {
        emit(lastList)
    }

    fun getHeroInfo() = flow {
        emit(R.drawable.hero_image)
    }
}