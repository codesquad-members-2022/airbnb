const accommodation = [
  {
    업소명: '호수여인숙',
    도로명주소: '인천광역시 미추홀구 장천로42번길 27 (숭의동)',
    경도: '126.6495476',
    위도: '37.45908773',
    price: 1295639,
  },
  {
    업소명: '복성여인숙',
    도로명주소: '인천광역시 미추홀구 인주대로 93-55 (용현동)',
    경도: '126.6478229',
    위도: '37.45775993',
    price: 566851,
  },
  {
    업소명: '서울여인숙',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 99 (주안동)',
    경도: '126.6775314',
    위도: '37.45791662',
    price: 882558,
  },
  {
    업소명: '용님여인숙',
    도로명주소: '인천광역시 미추홀구 경인로 338 (주안동)',
    경도: '126.677503',
    위도: '37.45817811',
    price: 677329,
  },
  {
    업소명: '수정여관',
    도로명주소: '인천광역시 미추홀구 한나루로 502 (주안동)',
    경도: '126.6676872',
    위도: '37.45172096',
    price: 1285361,
  },
  {
    업소명: '솔여인숙',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 78 (주안동)',
    경도: '126.6762213',
    위도: '37.45779573',
    price: 529269,
  },
  {
    업소명: '수정여인숙',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 23 (주안동)',
    경도: '126.6793044',
    위도: '37.46372584',
    price: 478559,
  },
  {
    업소명: '수림여인숙',
    도로명주소: '인천광역시 미추홀구 길파로35번길 5 (주안동)',
    경도: '126.6794058',
    위도: '37.46897953',
    price: 1166227,
  },
  {
    업소명: '영동여인숙',
    도로명주소: '인천광역시 미추홀구 석정로 371 (주안동)',
    경도: '126.6767505',
    위도: '37.46736354',
    price: 283066,
  },
  {
    업소명: '주안여관',
    도로명주소: '인천광역시 미추홀구 경인로 334-13 (주안동)',
    경도: '126.6771832',
    위도: '37.45822859',
    price: 558810,
  },
  {
    업소명: '대지모텔',
    도로명주소: '인천광역시 미추홀구 미추로 45 (숭의동)',
    경도: '126.646112',
    위도: '37.46393284',
    price: 330895,
  },
  {
    업소명: '다모아 모텔',
    도로명주소: '인천광역시 미추홀구 수봉로 6-21 (숭의동)',
    경도: '126.6555712',
    위도: '37.46567586',
    price: 551457,
  },
  {
    업소명: '동성여관',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 41 (주안동)',
    경도: '126.6825797',
    위도: '37.46190446',
    price: 1136042,
  },
  {
    업소명: '석바위모텔',
    도로명주소: '인천광역시 미추홀구 경인로435번길 6 (주안동)',
    경도: '126.6887881',
    위도: '37.45833802',
    price: 824950,
  },
  {
    업소명: '금성여관',
    도로명주소: '인천광역시 미추홀구 수봉북로 14-8 (도화동,276)',
    경도: '126.6630942',
    위도: '37.46425747',
    price: 695698,
  },
  {
    업소명: '미광장여관',
    도로명주소: '인천광역시 미추홀구 경원대로 911-3 (주안동)',
    경도: '126.6895982',
    위도: '37.46400407',
    price: 718039,
  },
  {
    업소명: '동아여관',
    도로명주소: '인천광역시 미추홀구 능해길 39 (숭의동,132)',
    경도: '126.6399008',
    위도: '37.45909351',
    price: 200989,
  },
  {
    업소명: '유진여인숙',
    도로명주소: '인천광역시 미추홀구 남주길147번길 85 (주안동,6)',
    경도: '126.6777139',
    위도: '37.45772665',
    price: 96101,
  },
  {
    업소명: '테마모텔',
    도로명주소: '인천광역시 미추홀구 경원대로 838-20 (주안동)',
    경도: '126.6901583',
    위도: '37.45730726',
    price: 569558,
  },
  {
    업소명: '옥천모텔',
    도로명주소: '인천광역시 미추홀구 석정로 419 (주안동)',
    경도: '126.6822538',
    위도: '37.46685498',
    price: 588424,
  },
  {
    업소명: '현대여인숙',
    도로명주소: '인천광역시 미추홀구 독배로432번길 11 (숭의동)',
    경도: '126.6497918',
    위도: '37.45840369',
    price: 419875,
  },
  {
    업소명: '신라여인숙',
    도로명주소: '인천광역시 미추홀구 석정로 383-3 (주안동)',
    경도: '126.6780625',
    위도: '37.46731433',
    price: 733200,
  },
  {
    업소명: '대도여인숙',
    도로명주소: '인천광역시 미추홀구 염창로 55-15 (주안동)',
    경도: '126.6800558',
    위도: '37.46623817',
    price: 973244,
  },
  {
    업소명: '화남여인숙',
    도로명주소: '인천광역시 미추홀구 독배로 449 (숭의동)',
    경도: '126.6482928',
    위도: '37.45947036',
    price: 833198,
  },
  {
    업소명: '아이비모텔',
    도로명주소: '인천광역시 미추홀구 경인로438번길 7 (주안동)',
    경도: '126.6887694',
    위도: '37.45744444',
    price: 910775,
  },
  {
    업소명: '낙원여관',
    도로명주소: '인천광역시 미추홀구 독배로434번길 10 (숭의동)',
    경도: '126.649639',
    위도: '37.45851442',
    price: 343266,
  },
  {
    업소명: '주안여인숙',
    도로명주소: '인천광역시 미추홀구 제일로 30-1 (도화동)',
    경도: '126.6735807',
    위도: '37.45867848',
    price: 1115492,
  },
  {
    업소명: '호텔 엘루이(HOTEL ELLUI)',
    도로명주소: '인천광역시 미추홀구 토금북로 2 (용현동)',
    경도: '126.6348331',
    위도: '37.45546816',
    price: 746208,
  },
  {
    업소명: '공원장여관',
    도로명주소: '인천광역시 미추홀구 수봉북로11번길 9 (도화동,328)',
    경도: '126.6640747',
    위도: '37.46452191',
    price: 902398,
  },
  {
    업소명: '행운장모텔',
    도로명주소: '인천광역시 미추홀구 주안중로 3 (주안동)',
    경도: '126.6824293',
    위도: '37.45881405',
    price: 692235,
  },
  {
    업소명: '연화장여관',
    도로명주소: '인천광역시 미추홀구 미추홀대로734번길 31-1 (주안동)',
    경도: '126.6822105',
    위도: '37.46322597',
    price: 483296,
  },
  {
    업소명: '청원여인숙',
    도로명주소: '인천광역시 미추홀구 인하로 295-3 (주안동,37)',
    경도: '126.6807775',
    위도: '37.44833077',
    price: 1181354,
  },
  {
    업소명: '호텔마루',
    도로명주소: '인천광역시 미추홀구 주안동로 14 (주안동)',
    경도: '126.6860718',
    위도: '37.45954378',
    price: 539054,
  },
  {
    업소명: '씨애틀 여관',
    도로명주소: '인천광역시 미추홀구 독배로498번길 20-1 (숭의동)',
    경도: '126.6445435',
    위도: '37.46239084',
    price: 1168452,
  },
  {
    업소명: '하얀장여관',
    도로명주소: '인천광역시 미추홀구 경인로156번길 7 (숭의동)',
    경도: '126.6598174',
    위도: '37.465878',
    price: 429643,
  },
  {
    업소명: '쓰리에스(3S) 호텔',
    도로명주소: '인천광역시 미추홀구 아암대로 73 (용현동)',
    경도: '126.6344994',
    위도: '37.45490571',
    price: 484765,
  },
  {
    업소명: '포클랜드모텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 8-1 (주안동)',
    경도: '126.6807283',
    위도: '37.46154222',
    price: 493415,
  },
  {
    업소명: '대지여관',
    도로명주소: '인천광역시 미추홀구 주안중로 24 (주안동)',
    경도: '126.6828527',
    위도: '37.46056575',
    price: 424912,
  },
  {
    업소명: '풍전장',
    도로명주소: '인천광역시 미추홀구 경인로325번길 22-6 (주안동)',
    경도: '126.6768238',
    위도: '37.45965544',
    price: 922224,
  },
  {
    업소명: '로맨스모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 62 (주안동)',
    경도: '126.6798206',
    위도: '37.46072264',
    price: 879850,
  },
  {
    업소명: '설악장여관',
    도로명주소: '인천광역시 미추홀구 미추홀대로719번길 7-27 (주안동,3)',
    경도: '126.6795193',
    위도: '37.46109403',
    price: 1419012,
  },
  {
    업소명: '로얄장여관',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 20 (주안동,4)',
    경도: '126.6790437',
    위도: '37.46338842',
    price: 389824,
  },
  {
    업소명: '테마모텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로719번길 7-11 (주안동)',
    경도: '126.6797563',
    위도: '37.46153356',
    price: 1422006,
  },
  {
    업소명: '힐튼장여관',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 113-16 (주안동)',
    경도: '126.6782453',
    위도: '37.45820041',
    price: 695883,
  },
  {
    업소명: '항도여관',
    도로명주소: '인천광역시 미추홀구 경인로 476 (주안동)',
    경도: '126.6927238',
    위도: '37.45880748',
    price: 954045,
  },
  {
    업소명: '티파니',
    도로명주소: '인천광역시 미추홀구 경인로435번길 7-14 (주안동)',
    경도: '126.6882277',
    위도: '37.45858153',
    price: 622661,
  },
  {
    업소명: '블루마린',
    도로명주소: '인천광역시 미추홀구 경인로41번길 41 (숭의동)',
    경도: '126.6465602',
    위도: '37.46592298',
    price: 144373,
  },
  {
    업소명: '장안모텔',
    도로명주소: '인천광역시 미추홀구 미추로35번길 13 (숭의동)',
    경도: '126.6459602',
    위도: '37.46282181',
    price: 429117,
  },
  {
    업소명: '이화장여관',
    도로명주소: '인천광역시 미추홀구 경인로142번길 9 (숭의동)',
    경도: '126.6580718',
    위도: '37.46572745',
    price: 488965,
  },
  {
    업소명: '용현장여관',
    도로명주소: '인천광역시 미추홀구 독배로403번길 12 (용현동)',
    경도: '126.6490485',
    위도: '37.45606436',
    price: 750486,
  },
  {
    업소명: '글로리텔',
    도로명주소: '인천광역시 미추홀구 경인로184번길 5 (도화동)',
    경도: '126.662959',
    위도: '37.46535919',
    price: 228674,
  },
  {
    업소명: '금강장여관',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 21 (주안동)',
    경도: '126.6791794',
    위도: '37.4636827',
    price: 405030,
  },
  {
    업소명: '베드스테이션',
    도로명주소: '인천광역시 미추홀구 미추홀대로734번길 25-11 (주안동)',
    경도: '126.6817259',
    위도: '37.46325557',
    price: 423665,
  },
  {
    업소명: '이레하우스',
    도로명주소: '인천광역시 미추홀구 경인로 333-15 (주안동)',
    경도: '126.6768531',
    위도: '37.45918961',
    price: 287745,
  },
  {
    업소명: '폭스',
    도로명주소: '인천광역시 미추홀구 주안로 91 (주안동)',
    경도: '126.679369',
    위도: '37.46460026',
    price: 306155,
  },
  {
    업소명: '호텔아미',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 46 (주안동)',
    경도: '126.6849715',
    위도: '37.45914413',
    price: 402679,
  },
  {
    업소명: '붐모텔',
    도로명주소: '인천광역시 미추홀구 주안서로 55 (주안동)',
    경도: '126.6777219',
    위도: '37.46368783',
    price: 1194114,
  },
  {
    업소명: '서울여인숙',
    도로명주소: '인천광역시 미추홀구 석바위로 59 (주안동)',
    경도: '126.6795615',
    위도: '37.46099828',
    price: 763543,
  },
  {
    업소명: '유성장모텔',
    도로명주소: '인천광역시 미추홀구 길파로 5-7 (주안동)',
    경도: '126.6789322',
    위도: '37.46622837',
    price: 187056,
  },
  {
    업소명: '대성모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 137 (주안동)',
    경도: '126.6880685',
    위도: '37.46000065',
    price: 1444840,
  },
  {
    업소명: '태원여인숙',
    도로명주소: '인천광역시 미추홀구 장천로24번길 23 (숭의동)',
    경도: '126.6482258',
    위도: '37.45921634',
    price: 1418221,
  },
  {
    업소명: '청운여인숙',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 113-8 (주안동)',
    경도: '126.6784174',
    위도: '37.45788714',
    price: 311915,
  },
  {
    업소명: '프라하모텔',
    도로명주소: '인천광역시 미추홀구 경인로435번길 10 (주안동)',
    경도: '126.6888287',
    위도: '37.45843859',
    price: 477447,
  },
  {
    업소명: '신일장여관',
    도로명주소: '인천광역시 미추홀구 인주대로 110 (용현동)',
    경도: '126.6491922',
    위도: '37.45632725',
    price: 506662,
  },
  {
    업소명: '아젤리아모텔',
    도로명주소: '인천광역시 미추홀구 아암대로53번길 11 (용현동)',
    경도: '126.6361308',
    위도: '37.45641831',
    price: 477610,
  },
  {
    업소명: '청화여관',
    도로명주소: '인천광역시 미추홀구 석바위로 14-13 (도화동)',
    경도: '126.6745548',
    위도: '37.46079178',
    price: 358291,
  },
  {
    업소명: '뉴파크장여관',
    도로명주소: '인천광역시 미추홀구 석바위로 14 (도화동)',
    경도: '126.6745569',
    위도: '37.46089',
    price: 890333,
  },
  {
    업소명: '파스텔',
    도로명주소: '인천광역시 미추홀구 경인로 333-11 (주안동)',
    경도: '126.6768391',
    위도: '37.45907496',
    price: 888857,
  },
  {
    업소명: '유정여인숙',
    도로명주소: '인천광역시 미추홀구 인주대로 181-2 (용현동)',
    경도: '126.6572939',
    위도: '37.45582132',
    price: 1408986,
  },
  {
    업소명: '에덴파크여관',
    도로명주소: '인천광역시 미추홀구 경인로41번길 29 (숭의동)',
    경도: '126.6467392',
    위도: '37.46539913',
    price: 312293,
  },
  {
    업소명: '근화장여관',
    도로명주소: '인천광역시 미추홀구 주안서로 58-1 (주안동)',
    경도: '126.6780929',
    위도: '37.46390536',
    price: 241913,
  },
  {
    업소명: '골드장여관',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 10 (주안동)',
    경도: '126.6832478',
    위도: '37.45975194',
    price: 132771,
  },
  {
    업소명: '궁전장',
    도로명주소: '인천광역시 미추홀구 독배로 427-36 (용현동)',
    경도: '126.6485119',
    위도: '37.4578337',
    price: 814723,
  },
  {
    업소명: '청남장여관',
    도로명주소: '인천광역시 미추홀구 인주대로104번길 5-7 (용현동)',
    경도: '126.6487219',
    위도: '37.45638433',
    price: 374258,
  },
  {
    업소명: '동양장여관',
    도로명주소: '인천광역시 미추홀구 독배로 427-70 (용현동)',
    경도: '126.6482785',
    위도: '37.45780534',
    price: 458300,
  },
  {
    업소명: '대원장여관',
    도로명주소: '인천광역시 미추홀구 인주대로123번길 13 (용현동)',
    경도: '126.6504531',
    위도: '37.45696494',
    price: 333136,
  },
  {
    업소명: '로즈힐',
    도로명주소: '인천광역시 미추홀구 아암대로91번길 9 (용현동)',
    경도: '126.6338188',
    위도: '37.45357669',
    price: 1327521,
  },
  {
    업소명: '호텔 이룸',
    도로명주소: '인천광역시 미추홀구 토금중로3번길 17 (용현동)',
    경도: '126.6345587',
    위도: '37.45517683',
    price: 462850,
  },
  {
    업소명: '용궁파크장여관',
    도로명주소: '인천광역시 미추홀구 독배로 427-34 (용현동)',
    경도: '126.6487338',
    위도: '37.45795275',
    price: 958276,
  },
  {
    업소명: '스위스모텔',
    도로명주소: '인천광역시 미추홀구 토금북로3번길 10 (용현동)',
    경도: '126.6355928',
    위도: '37.45591903',
    price: 562586,
  },
  {
    업소명: '제이모텔(J모텔)',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 29 (주안동)',
    경도: '126.6843468',
    위도: '37.45968325',
    price: 92449,
  },
  {
    업소명: '이화장여관',
    도로명주소: '인천광역시 미추홀구 석정로 484 (주안동)',
    경도: '126.6893588',
    위도: '37.46575428',
    price: 724040,
  },
  {
    업소명: '아이원모텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 35 (주안동)',
    경도: '126.6824138',
    위도: '37.46191861',
    price: 891608,
  },
  {
    업소명: '헤르츠호텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로734번길 25-16 (주안동)',
    경도: '126.6821225',
    위도: '37.46347774',
    price: 1032070,
  },
  {
    업소명: '하이피크 모텔',
    도로명주소: '인천광역시 미추홀구 경인로 333-23 (주안동)',
    경도: '126.676859',
    위도: '37.45940605',
    price: 1332528,
  },
  {
    업소명: '메트로',
    도로명주소: '인천광역시 미추홀구 경인로435번길 12 (주안동)',
    경도: '126.6888127',
    위도: '37.45855361',
    price: 999979,
  },
  {
    업소명: '아미가모텔',
    도로명주소: '인천광역시 미추홀구 토금남로 7 (용현동)',
    경도: '126.633604',
    위도: '37.45296136',
    price: 206274,
  },
  {
    업소명: '스위스여관',
    도로명주소: '인천광역시 미추홀구 숙골로 11 (도화동)',
    경도: '126.6683418',
    위도: '37.46454415',
    price: 486913,
  },
  {
    업소명: '풀하우스호텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로733번길 34 (주안동)',
    경도: '126.6782077',
    위도: '37.46323289',
    price: 389304,
  },
  {
    업소명: '우리여인숙',
    도로명주소: '인천광역시 미추홀구 동주길135번길 38-19 (주안동)',
    경도: '126.6828686',
    위도: '37.45778051',
    price: 394741,
  },
  {
    업소명: '힐링모텔',
    도로명주소: '인천광역시 미추홀구 인주대로131번길 6 (용현동)',
    경도: '126.6517112',
    위도: '37.4567916',
    price: 349538,
  },
  {
    업소명: '주안그린모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 124-15 (주안동)',
    경도: '126.6866775',
    위도: '37.45955809',
    price: 453477,
  },
  {
    업소명: '비밀의화원',
    도로명주소: '인천광역시 미추홀구 경원대로851번길 52 (주안동)',
    경도: '126.6863871',
    위도: '37.4589777',
    price: 732481,
  },
  {
    업소명: '에스모텔',
    도로명주소: '인천광역시 미추홀구 토금중로3번길 14 (용현동)',
    경도: '126.6347473',
    위도: '37.4547898',
    price: 625040,
  },
  {
    업소명: '풀하우스',
    도로명주소: '인천광역시 미추홀구 아암대로53번길 21 (용현동)',
    경도: '126.6366359',
    위도: '37.45614686',
    price: 371534,
  },
  {
    업소명: '에스호텔',
    도로명주소: '인천광역시 미추홀구 토금중로3번길 16 (용현동)',
    경도: '126.6348303',
    위도: '37.45489926',
    price: 603323,
  },
  {
    업소명: '루나모텔',
    도로명주소: '인천광역시 미추홀구 주안로 41 (주안동)',
    경도: '126.6742269',
    위도: '37.46450754',
    price: 846989,
  },
  {
    업소명: '에떼',
    도로명주소: '인천광역시 미추홀구 주안서로 46 (주안동)',
    경도: '126.6780686',
    위도: '37.46263802',
    price: 889295,
  },
  {
    업소명: '브랜드모텔',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 7 (주안동)',
    경도: '126.6783683',
    위도: '37.46375212',
    price: 731092,
  },
  {
    업소명: '온 오프(ON.OFF)',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 9 (주안동)',
    경도: '126.6785231',
    위도: '37.4637475',
    price: 1355778,
  },
  {
    업소명: '러블리모텔(lovely모텔)',
    도로명주소: '인천광역시 미추홀구 석바위로 114 (주안동)',
    경도: '126.685482',
    위도: '37.45988027',
    price: 820313,
  },
  {
    업소명: '에쿠스',
    도로명주소: '인천광역시 미추홀구 석바위로 134 (주안동)',
    경도: '126.6878017',
    위도: '37.45955169',
    price: 305349,
  },
  {
    업소명: '가담모텔',
    도로명주소: '인천광역시 미추홀구 경인로33번길 6 (숭의동)',
    경도: '126.6468803',
    위도: '37.46424653',
    price: 854735,
  },
  {
    업소명: '크라운모텔',
    도로명주소: '인천광역시 미추홀구 토금남로3번길 10 (용현동)',
    경도: '126.633656',
    위도: '37.45333751',
    price: 793490,
  },
  {
    업소명: '호텔빈(HOTEL B.I.N.)',
    도로명주소: '인천광역시 미추홀구 용오로 10 (용현동)',
    경도: '126.6365844',
    위도: '37.45640124',
    price: 1114341,
  },
  {
    업소명: '호텔나무',
    도로명주소: '인천광역시 미추홀구 낙섬서로49번길 30-4 (용현동)',
    경도: '126.6350329',
    위도: '37.45457372',
    price: 82691,
  },
  {
    업소명: '스타 모텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 21 (주안동)',
    경도: '126.6815854',
    위도: '37.46192539',
    price: 356501,
  },
  {
    업소명: '토마토호텔',
    도로명주소: '인천광역시 미추홀구 주안서로54번길 8 (주안동)',
    경도: '126.678411',
    위도: '37.46340076',
    price: 82331,
  },
  {
    업소명: '성민장모텔',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 7 (주안동)',
    경도: '126.6855098',
    위도: '37.45968239',
    price: 631281,
  },
  {
    업소명: '몽마르뜨',
    도로명주소: '인천광역시 미추홀구 경인로 333-18 (주안동)',
    경도: '126.6771544',
    위도: '37.45923089',
    price: 471384,
  },
  {
    업소명: '몽모텔',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 12 (주안동)',
    경도: '126.6851491',
    위도: '37.45951006',
    price: 180022,
  },
  {
    업소명: '쟈스민여관',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 53 (주안동)',
    경도: '126.6854571',
    위도: '37.45900235',
    price: 567519,
  },
  {
    업소명: '샤앤(N)장여관',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 51 (주안동)',
    경도: '126.6853456',
    위도: '37.45908098',
    price: 385381,
  },
  {
    업소명: '소피아',
    도로명주소: '인천광역시 미추홀구 석정로 95-9 (숭의동)',
    경도: '126.6458682',
    위도: '37.46774328',
    price: 78477,
  },
  {
    업소명: '황금장여관',
    도로명주소: '인천광역시 미추홀구 인주대로131번길 5 (용현동,52)',
    경도: '126.6514741',
    위도: '37.45673342',
    price: 710148,
  },
  {
    업소명: '지모텔(G모텔)',
    도로명주소: '인천광역시 미추홀구 토금북로18번길 11 (용현동)',
    경도: '126.6362552',
    위도: '37.4542916',
    price: 646066,
  },
  {
    업소명: '하와이',
    도로명주소: '인천광역시 미추홀구 토금중로3번길 18 (용현동)',
    경도: '126.6349037',
    위도: '37.45501229',
    price: 357848,
  },
  {
    업소명: '티파니여관',
    도로명주소: '인천광역시 미추홀구 한나루로 613-1 (도화동)',
    경도: '126.6722541',
    위도: '37.46089012',
    price: 387988,
  },
  {
    업소명: '제이스모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 77-8 (주안동)',
    경도: '126.6817706',
    위도: '37.46130483',
    price: 810102,
  },
  {
    업소명: '더자자호텔',
    도로명주소: '인천광역시 미추홀구 석바위로101번길 2 (주안동)',
    경도: '126.6843952',
    위도: '37.46080135',
    price: 1348775,
  },
  {
    업소명: '오로라여관',
    도로명주소: '인천광역시 미추홀구 인주대로 153 (용현동)',
    경도: '126.6543291',
    위도: '37.45652736',
    price: 1158478,
  },
  {
    업소명: '에덴파크여관',
    도로명주소: '인천광역시 미추홀구 인주대로 93-51 (용현동)',
    경도: '126.6479687',
    위도: '37.45772288',
    price: 488677,
  },
  {
    업소명: '호텔 프라하(Hotel Praha)',
    도로명주소: '인천광역시 미추홀구 토금북로 7 (용현동)',
    경도: '126.6354916',
    위도: '37.45549894',
    price: 99539,
  },
  {
    업소명: '인천 넘버25호텔 용현점',
    도로명주소: '인천광역시 미추홀구 토금북로18번길 8-33 (용현동)',
    경도: '126.6353218',
    위도: '37.45475481',
    price: 359148,
  },
  {
    업소명: '정원호텔',
    도로명주소: '인천광역시 미추홀구 아암대로107번길 10 (용현동)',
    경도: '126.6326787',
    위도: '37.45205793',
    price: 228099,
  },
  {
    업소명: '하얀궁전모텔',
    도로명주소: '인천광역시 미추홀구 아암대로107번길 14 (용현동)',
    경도: '126.6328774',
    위도: '37.4519643',
    price: 1012390,
  },
  {
    업소명: '시티모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 83 (주안동)',
    경도: '126.6824102',
    위도: '37.46124176',
    price: 496425,
  },
  {
    업소명: '팜파스 호텔',
    도로명주소: '인천광역시 미추홀구 경인로325번길 22-19 (주안동)',
    경도: '126.6771814',
    위도: '37.45988032',
    price: 368665,
  },
  {
    업소명: '별이 빛나는 밤에 호텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 30 (주안동)',
    경도: '126.6820591',
    위도: '37.46161897',
    price: 388965,
  },
  {
    업소명: '리베라모텔',
    도로명주소: '인천광역시 미추홀구 경인로435번길 7-30 (주안동)',
    경도: '126.6877997',
    위도: '37.45860545',
    price: 905302,
  },
  {
    업소명: '보성장여관',
    도로명주소: '인천광역시 미추홀구 석정로 95-19 (숭의동)',
    경도: '126.6456386',
    위도: '37.46779413',
    price: 1013841,
  },
  {
    업소명: '씨에프(CF)모텔',
    도로명주소: '인천광역시 미추홀구 아암대로53번길 10 (용현동)',
    경도: '126.6358478',
    위도: '37.45625841',
    price: 216482,
  },
  {
    업소명: '탑모텔',
    도로명주소: '인천광역시 미추홀구 수봉북로 4 (도화동)',
    경도: '126.6631865',
    위도: '37.46531101',
    price: 616023,
  },
  {
    업소명: '호텔가자(GAZA)',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 9 (주안동)',
    경도: '126.6832434',
    위도: '37.45999601',
    price: 138580,
  },
  {
    업소명: '다모아모텔',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 117 (주안동)',
    경도: '126.6785615',
    위도: '37.45788907',
    price: 416152,
  },
  {
    업소명: '황해모텔',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 5 (주안동)',
    경도: '126.6861581',
    위도: '37.45940813',
    price: 749688,
  },
  {
    업소명: '짱모텔',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 9 (주안동)',
    경도: '126.6863762',
    위도: '37.45934726',
    price: 144075,
  },
  {
    업소명: '파라다이스',
    도로명주소: '인천광역시 미추홀구 주안동로 25 (주안동)',
    경도: '126.6856766',
    위도: '37.46048212',
    price: 354644,
  },
  {
    업소명: '썸모텔',
    도로명주소: '인천광역시 미추홀구 독배로498번길 20 (숭의동)',
    경도: '126.6444186',
    위도: '37.46242884',
    price: 410586,
  },
  {
    업소명: '시네마Ⅰ(CINEMAⅠ)',
    도로명주소: '인천광역시 미추홀구 미추홀대로733번길 37 (주안동)',
    경도: '126.678064',
    위도: '37.46289417',
    price: 671547,
  },
  {
    업소명: '칼튼여관',
    도로명주소: '인천광역시 미추홀구 주안중로50번길 13-18 (주안동,5)',
    경도: '126.6837606',
    위도: '37.4634024',
    price: 1218528,
  },
  {
    업소명: '쉬리',
    도로명주소: '인천광역시 미추홀구 경원대로851번길 24 (주안동)',
    경도: '126.688022',
    위도: '37.4590496',
    price: 65252,
  },
  {
    업소명: '에스티 st.179',
    도로명주소: '인천광역시 미추홀구 주안중로 13 (주안동)',
    경도: '126.6824705',
    위도: '37.45952199',
    price: 414162,
  },
  {
    업소명: '수정여관',
    도로명주소: '인천광역시 미추홀구 경인로142번길 1 (숭의동)',
    경도: '126.6583079',
    위도: '37.46593798',
    price: 368855,
  },
  {
    업소명: '꿈의궁전',
    도로명주소: '인천광역시 미추홀구 인주대로123번길 9 (용현동)',
    경도: '126.6506394',
    위도: '37.45683232',
    price: 544954,
  },
  {
    업소명: '호텔여행',
    도로명주소: '인천광역시 미추홀구 한나루로 588 (도화동)',
    경도: '126.6723817',
    위도: '37.4584955',
    price: 1087615,
  },
  {
    업소명: '사이판모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 14-10 (도화동)',
    경도: '126.6744498',
    위도: '37.46068157',
    price: 442121,
  },
  {
    업소명: '터미널모텔',
    도로명주소: '인천광역시 미추홀구 능해길46번길 4 (용현동)',
    경도: '126.6398051',
    위도: '37.45865118',
    price: 1372241,
  },
  {
    업소명: '홈모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 143 (주안동)',
    경도: '126.6888629',
    위도: '37.45993931',
    price: 1487748,
  },
  {
    업소명: '베듀호텔 허브점',
    도로명주소: '인천광역시 미추홀구 경인로349번길 37 (주안동)',
    경도: '126.6788211',
    위도: '37.4604472',
    price: 296564,
  },
  {
    업소명: '에쿠스장여관',
    도로명주소: '인천광역시 미추홀구 독배로492번길 13 (숭의동)',
    경도: '126.6446177',
    위도: '37.46216716',
    price: 323340,
  },
  {
    업소명: '친친호텔',
    도로명주소: '인천광역시 미추홀구 제물량로4번길 42-12 (숭의동)',
    경도: '126.6395993',
    위도: '37.4625266',
    price: 365287,
  },
  {
    업소명: '프로포즈',
    도로명주소: '인천광역시 미추홀구 주안중로 45-1 (주안동)',
    경도: '126.6825805',
    위도: '37.46257752',
    price: 310803,
  },
  {
    업소명: '노블호텔',
    도로명주소: '인천광역시 미추홀구 수봉북로 4-1 (도화동)',
    경도: '126.6631428',
    위도: '37.46519772',
    price: 56795,
  },
  {
    업소명: '브라운도트 인천 주안역점',
    도로명주소: '인천광역시 미추홀구 주안중로43번길 10 (주안동)',
    경도: '126.6821269',
    위도: '37.4625508',
    price: 674056,
  },
  {
    업소명: '마리(MARI)',
    도로명주소: '인천광역시 미추홀구 미추홀대로733번길 22 (주안동)',
    경도: '126.6788993',
    위도: '37.46319972',
    price: 457963,
  },
  {
    업소명: '호텔 위드유',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 33 (주안동)',
    경도: '126.6822624',
    위도: '37.4619747',
    price: 1272836,
  },
  {
    업소명: '호텔마음',
    도로명주소: '인천광역시 미추홀구 주안중로50번길 13-14 (주안동)',
    경도: '126.6838097',
    위도: '37.46326044',
    price: 873030,
  },
  {
    업소명: '호텔 두루와(Hotel Duruwa)',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 20 (주안동)',
    경도: '126.6815081',
    위도: '37.46167533',
    price: 932101,
  },
  {
    업소명: '소마(SOMA)',
    도로명주소: '인천광역시 미추홀구 주안중로 4-1 (주안동)',
    경도: '126.6828595',
    위도: '37.4587734',
    price: 504175,
  },
  {
    업소명: '모텔 로아',
    도로명주소: '인천광역시 미추홀구 미추홀대로719번길 7-15 (주안동)',
    경도: '126.6797538',
    위도: '37.46132082',
    price: 1164572,
  },
  {
    업소명: '붐모텔',
    도로명주소: '인천광역시 미추홀구 미추로 39 (숭의동)',
    경도: '126.6462781',
    위도: '37.46339958',
    price: 972242,
  },
  {
    업소명: '넘버25 인천주안역점',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 29 (주안동)',
    경도: '126.6821199',
    위도: '37.46197071',
    price: 73936,
  },
  {
    업소명: '짝',
    도로명주소: '인천광역시 미추홀구 경원대로851번길 56 (주안동)',
    경도: '126.6861981',
    위도: '37.45908937',
    price: 624824,
  },
  {
    업소명: '호텔 위드',
    도로명주소: '인천광역시 미추홀구 미추홀대로698번길 16 (주안동)',
    경도: '126.6810913',
    위도: '37.4597329',
    price: 1443404,
  },
  {
    업소명: '에이스모텔',
    도로명주소: '인천광역시 미추홀구 아암대로53번길 15 (용현동)',
    경도: '126.6363018',
    위도: '37.45633027',
    price: 390182,
  },
  {
    업소명: '테마모텔',
    도로명주소: '인천광역시 미추홀구 경인로425번길 21 (주안동)',
    경도: '126.687283',
    위도: '37.4591191',
    price: 291002,
  },
  {
    업소명: '파티오 호텔',
    도로명주소: '인천광역시 미추홀구 주안중로 38 (주안동)',
    경도: '126.6829394',
    위도: '37.46166288',
    price: 238071,
  },
  {
    업소명: '호텔 홀인원',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 16 (주안동,45)',
    경도: '126.6851352',
    위도: '37.45939298',
    price: 331600,
  },
  {
    업소명: '호텔나무',
    도로명주소: '인천광역시 미추홀구 경인로435번길 7-8 (주안동)',
    경도: '126.6883799',
    위도: '37.45864131',
    price: 919928,
  },
  {
    업소명: '나이스호텔',
    도로명주소: '인천광역시 미추홀구 주안동로 9 (주안동)',
    경도: '126.6856591',
    위도: '37.45906857',
    price: 424689,
  },
  {
    업소명: '호텔 세븐(Hotel 7)',
    도로명주소: '인천광역시 미추홀구 석바위로 130 (주안동)',
    경도: '126.6869488',
    위도: '37.45956142',
    price: 903734,
  },
  {
    업소명: '디데이호텔(D-day Hotel)',
    도로명주소: '인천광역시 미추홀구 주안중로 48 (주안동)',
    경도: '126.6830103',
    위도: '37.46265048',
    price: 345000,
  },
  {
    업소명: '모아텔',
    도로명주소: '인천광역시 미추홀구 경원대로 838-24 (주안동)',
    경도: '126.6903095',
    위도: '37.45729234',
    price: 52933,
  },
  {
    업소명: '호텔 더블유',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 49 (주안동)',
    경도: '126.6884117',
    위도: '37.45940491',
    price: 504822,
  },
  {
    업소명: '호텔 썬플라워 투',
    도로명주소: '인천광역시 미추홀구 주안중로 22 (주안동)',
    경도: '126.6829499',
    위도: '37.46030094',
    price: 225828,
  },
  {
    업소명: '썸',
    도로명주소: '인천광역시 미추홀구 경인로425번길 26 (주안동)',
    경도: '126.6877125',
    위도: '37.45920583',
    price: 217150,
  },
  {
    업소명: '피아노모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 128 (주안동)',
    경도: '126.686974',
    위도: '37.45969375',
    price: 753596,
  },
  {
    업소명: '엘루이모텔',
    도로명주소: '인천광역시 미추홀구 석바위로96번길 13-3 (주안동)',
    경도: '126.6840626',
    위도: '37.46032014',
    price: 447369,
  },
  {
    업소명: '렉시호텔',
    도로명주소: '인천광역시 미추홀구 석바위로96번길 19 (주안동)',
    경도: '126.6839821',
    위도: '37.45996501',
    price: 682073,
  },
  {
    업소명: '그랜드모텔',
    도로명주소: '인천광역시 미추홀구 경인로325번길 22-25 (주안동)',
    경도: '126.6773328',
    위도: '37.45984803',
    price: 973868,
  },
  {
    업소명: '페이지46',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 42 (주안동)',
    경도: '126.6879902',
    위도: '37.45923053',
    price: 670344,
  },
  {
    업소명: '오라모텔',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 43 (주안동)',
    경도: '126.6880799',
    위도: '37.45948215',
    price: 595428,
  },
  {
    업소명: '씨앤',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 45 (주안동)',
    경도: '126.688262',
    위도: '37.4594783',
    price: 582692,
  },
  {
    업소명: '글래드(GLAD)',
    도로명주소: '인천광역시 미추홀구 경인로325번길 22-11 (주안동)',
    경도: '126.6769829',
    위도: '37.45991474',
    price: 454583,
  },
  {
    업소명: 'H호텔',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 8 (주안동)',
    경도: '126.6850863',
    위도: '37.4597619',
    price: 1208353,
  },
  {
    업소명: '로즈모텔',
    도로명주소: '인천광역시 미추홀구 석바위로96번길 4 (주안동)',
    경도: '126.6835643',
    위도: '37.46073264',
    price: 650335,
  },
  {
    업소명: '로지호텔',
    도로명주소: '인천광역시 미추홀구 주안중로 32 (주안동)',
    경도: '126.68302',
    위도: '37.46126088',
    price: 954834,
  },
  {
    업소명: '나인호텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로697번길 9-3 (주안동)',
    경도: '126.6795217',
    위도: '37.45959593',
    price: 675017,
  },
  {
    업소명: '호텔식스(HOTEL 6)',
    도로명주소: '인천광역시 미추홀구 주안중로43번길 11 (주안동)',
    경도: '126.6822408',
    위도: '37.46219133',
    price: 631847,
  },
  {
    업소명: '굿타임모텔',
    도로명주소: '인천광역시 미추홀구 경인로435번길 7-18 (주안동)',
    경도: '126.688093',
    위도: '37.4585919',
    price: 982462,
  },
  {
    업소명: '(주)맛미유앤아이',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 25 (주안동)',
    경도: '126.6819335',
    위도: '37.46199174',
    price: 723789,
  },
  {
    업소명: '테마모텔',
    도로명주소: '인천광역시 미추홀구 한나루로586번길 95 (주안동)',
    경도: '126.6772608',
    위도: '37.45794895',
    price: 456248,
  },
  {
    업소명: '핑크모텔',
    도로명주소: '인천광역시 미추홀구 석바위로 77-11 (주안동)',
    경도: '126.6815532',
    위도: '37.46134893',
    price: 979173,
  },
  {
    업소명: '호텔 주노',
    도로명주소: '인천광역시 미추홀구 경원대로851번길 43 (주안동)',
    경도: '126.6868674',
    위도: '37.45872291',
    price: 451680,
  },
  {
    업소명: '블리츠호텔',
    도로명주소: '인천광역시 미추홀구 석바위로96번길 6 (주안동)',
    경도: '126.6835533',
    위도: '37.46061593',
    price: 687468,
  },
  {
    업소명: '크리스탈',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 17 (주안동)',
    경도: '126.6867543',
    위도: '37.45927799',
    price: 681312,
  },
  {
    업소명: '호텔써클',
    도로명주소: '인천광역시 미추홀구 토금중로3번길 28 (용현동)',
    경도: '126.6352154',
    위도: '37.45530022',
    price: 685824,
  },
  {
    업소명: '석류모텔',
    도로명주소: '인천광역시 미추홀구 아암대로53번길 19 (용현동)',
    경도: '126.636512',
    위도: '37.45624757',
    price: 986376,
  },
  {
    업소명: '마운틴',
    도로명주소: '인천광역시 미추홀구 수봉북로 16 (도화동)',
    경도: '126.6633522',
    위도: '37.46402962',
    price: 441478,
  },
  {
    업소명: '신라장여관',
    도로명주소: '인천광역시 미추홀구 경인로438번길 5 (주안동)',
    경도: '126.6887817',
    위도: '37.45755962',
    price: 602835,
  },
  {
    업소명: '프로방스 호텔',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 24 (주안동)',
    경도: '126.681712',
    위도: '37.461653',
    price: 697533,
  },
  {
    업소명: '나자리오',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 11 (주안동)',
    경도: '126.6854343',
    위도: '37.45949289',
    price: 429626,
  },
  {
    업소명: '실버',
    도로명주소: '인천광역시 미추홀구 석바위로114번길 9 (주안동)',
    경도: '126.6855071',
    위도: '37.45960165',
    price: 156261,
  },
  {
    업소명: '호텔 에이치이(Hotel H.E)',
    도로명주소: '인천광역시 미추홀구 경인로33번길 22 (숭의동)',
    경도: '126.646631',
    위도: '37.46492785',
    price: 923558,
  },
  {
    업소명: '그리스모텔',
    도로명주소: '인천광역시 미추홀구 석바위로96번길 8 (주안동)',
    경도: '126.6835334',
    위도: '37.46048523',
    price: 400827,
  },
  {
    업소명: '썬플라워 관광호텔',
    도로명주소: '인천광역시 미추홀구 주안중로 22-1 (주안동)',
    경도: '126.6829865',
    위도: '37.46041862',
    price: 55686,
  },
  {
    업소명: '피카소모텔',
    도로명주소: '인천광역시 미추홀구 미추로 45-13 (숭의동)',
    경도: '126.6458013',
    위도: '37.46381595',
    price: 402029,
  },
  {
    업소명: '�史Ｅ�',
    도로명주소: '인천광역시 미추홀구 미추홀대로722번길 40 (주안동)',
    경도: '126.682571',
    위도: '37.46168369',
    price: 415610,
  },
  {
    업소명: '이-호텔(E-호텔)',
    도로명주소: '인천광역시 미추홀구 석바위로 72 (주안동)',
    경도: '126.681054',
    위도: '37.46089095',
    price: 574821,
  },
  {
    업소명: '마네모네',
    도로명주소: '인천광역시 미추홀구 주안중로16번길 8 (주안동)',
    경도: '126.6831052',
    위도: '37.45975796',
    price: 100144,
  },
  {
    업소명: '거창여인숙',
    도로명주소: '인천광역시 미추홀구 경인로380번길 3-1 (주안동)',
    경도: '126.6823397',
    위도: '37.45800074',
    price: 79894,
  },
  {
    업소명: '편리한생활숙박룸',
    도로명주소: '인천광역시 미추홀구 연송로 124 (도화동)',
    경도: '126.6582813',
    위도: '37.47534648',
    price: 648082,
  },
  {
    업소명: '파스텔',
    도로명주소: '인천광역시 미추홀구 주안서로 58 (주안동)',
    경도: '126.678079',
    위도: '37.46378548',
    price: 763558,
  },
  {
    업소명: '힐리빙하우스',
    도로명주소: '인천광역시 미추홀구 주안서로 50 (주안동)',
    경도: '126.6780641',
    위도: '37.46322285',
    price: 795586,
  },
  {
    업소명: '코리아빌',
    도로명주소: '인천광역시 미추홀구 경원대로851번길 51 (주안동)',
    경도: '126.686372',
    위도: '37.45877322',
    price: 212703,
  },
  {
    업소명: '렉스',
    도로명주소: '인천광역시 미추홀구 경인로 333-26 (주안동)',
    경도: '126.6771308',
    위도: '37.4593985',
    price: 506356,
  },
  {
    업소명: '우리레지던스',
    도로명주소: '인천광역시 미추홀구 인중로26번길 6-16 (숭의동)',
    경도: '126.640591',
    위도: '37.46340441',
    price: 1237856,
  },
  {
    업소명: '청춘호텔',
    도로명주소: '인천광역시 미추홀구 주안동로12번길 31 (주안동)',
    경도: '126.6872801',
    위도: '37.45941949',
    price: 222933,
  },
  {
    업소명: '럭스',
    도로명주소: '인천광역시 미추홀구 주안동로 16 (주안동)',
    경도: '126.6860536',
    위도: '37.45965879',
    price: 293229,
  },
];

const ITEMS = [
  {
    imageURL: 'https://api.lorem.space/image/house?w=330&h=200',
    local: '서초구의 아파트 전체',
    desc: 'Spacious and Comfortable cozy house #4',
    option: '최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개 주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어',
    price: { perNight: 82953, total: 1493159 },
    grade: 4.8,
    reviewCnt: 127,
  },
  {
    imageURL: 'https://api.lorem.space/image/house?w=330&h=200',
    local: '서초구의 아파트 전체',
    desc: 'Spacious and Comfortable cozy house #4',
    option: '최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개 주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어',
    price: { perNight: 82953, total: 1493159 },
    grade: 4.8,
    reviewCnt: 127,
  },
  {
    imageURL: 'https://api.lorem.space/image/house?w=330&h=200',
    local: '서초구의 아파트 전체',
    desc: 'Spacious and Comfortable cozy house #4',
    option: '최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개 주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어',
    price: { perNight: 82953, total: 1493159 },
    grade: 4.8,
    reviewCnt: 127,
  },
  {
    imageURL: 'https://api.lorem.space/image/house?w=330&h=200',
    local: '서초구의 아파트 전체',
    desc: 'Spacious and Comfortable cozy house #4',
    option: '최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개 주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어',
    price: { perNight: 82953, total: 1493159 },
    grade: 4.8,
    reviewCnt: 127,
  },
];

export { accommodation, ITEMS };
