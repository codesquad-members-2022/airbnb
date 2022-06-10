import React from 'react';
import {
  Hero,
  Footer,
  Near,
  NearTitle,
  NearList,
  NearItem,
  TravelImg,
  TravelDesc,
  TravelTitle,
  TravelDistance,
  AnyWhere,
  AnyWhereTitle,
  AnyWhereList,
  AnyWhereItem,
  Lodging,
  LodgingImg,
  LodgingTitle,
  Navigator,
  LNB,
  LNBList,
  LNBItem,
  LNBItemTitle,
  LNBItemLink,
  FNB,
  FNBList,
  FNBItem,
  FNBItemLink,
} from 'pages/Home/Home.styled';
import { TRAVEL_INFOS, ANYWHERE_INFOS, LNB_INFOS, FNB_INFOS } from 'constant';

export function Home(): JSX.Element {
  const travels = TRAVEL_INFOS.map(info => (
    <NearItem key={info.id}>
      <TravelImg src={info.src} alt={info.alt} />
      <TravelDesc>
        <TravelTitle>{info.destination}</TravelTitle>
        <TravelDistance>{info.distance}</TravelDistance>
      </TravelDesc>
    </NearItem>
  ));

  const anywheres = ANYWHERE_INFOS.map(info => (
    <AnyWhereItem key={info.id}>
      <Lodging>
        <LodgingImg src={info.src} alt={info.alt} />
        <LodgingTitle>{info.title}</LodgingTitle>
      </Lodging>
    </AnyWhereItem>
  ));

  const lnbs = LNB_INFOS.map(info => (
    <LNBList key={info.id}>
      <LNBItem>
        <LNBItemTitle>{info.title}</LNBItemTitle>
      </LNBItem>
      {info.link.map(text => (
        <LNBItem key={text}>
          <LNBItemLink>{text}</LNBItemLink>
        </LNBItem>
      ))}
    </LNBList>
  ));

  const fnbs = FNB_INFOS.map(info => (
    <FNBItem key={info.id}>
      <FNBItemLink>{info.link}</FNBItemLink>
    </FNBItem>
  ));
  return (
    <>
      <Hero src="/assets/images/hero-img.png" />
      <Footer>
        <Near>
          <NearTitle>가까운 여행지 둘러보기</NearTitle>
          <NearList>{travels}</NearList>
        </Near>
        <AnyWhere>
          <AnyWhereTitle>어디서나, 여행은 살아보는 거야!</AnyWhereTitle>
          <AnyWhereList>{anywheres}</AnyWhereList>
        </AnyWhere>
        <Navigator>
          <LNB>{lnbs}</LNB>
          <FNB>
            <FNBList>{fnbs}</FNBList>
          </FNB>
        </Navigator>
      </Footer>
    </>
  );
}
