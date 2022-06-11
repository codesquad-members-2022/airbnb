import styled from 'styled-components';
import { Checkbox } from '@mui/material';

import { InfoProps } from 'components/HotelList/';
import { ReactComponent as StarIcon } from 'images/FE_숙소예약서비스/Property 1=star.svg';
import { ReactComponent as HeartIcon } from 'images/FE_숙소예약서비스/Property 1=heart.svg';

import { usePeriodState } from 'hooks/usePeriod';
import { toLocalString } from 'utils/helper';

type HotelProps = {
  onClickEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
  info: InfoProps;
};

function Hotel({ onClickEvent, info }: HotelProps) {
  const { checkIn, checkOut } = usePeriodState();
  const diffDate = checkIn.getTime() - checkOut.getTime();
  const reserveDays = Math.abs(diffDate / (1000 * 3600 * 24));

  const { id, imgUrl, name, maxPeople, feePerOneNight } = info;

  const TotlaCost = toLocalString(feePerOneNight * reserveDays);

  const altText = `${name}의 숙소 이미지`;

  return (
    <HotelWrap data-id={id}>
      <HotelImg onClick={onClickEvent} src={imgUrl} alt={altText} />
      <HotelInfo>
        <HotelInfoTop>
          <RocationAndTitle>
            <Rocation>충청남도 보령시</Rocation>
            <Title onClick={onClickEvent}>{name}</Title>
            <span className="maximum_people">최대 인원 {maxPeople}명</span>
          </RocationAndTitle>
          <Checkbox icon={<Heart />} checkedIcon={<FillHeart />} style={{ padding: 0 }} />
        </HotelInfoTop>
        <HotelInfoBottom>
          <Point>
            <Star />
            <Grade>4.8</Grade>
            <Review>(후기 n개)</Review>
          </Point>
          <Fee>
            <OneDayFee>
              <strong>₩{toLocalString(feePerOneNight)}</strong> / 박
            </OneDayFee>
            <TotalFee>총액 ₩{diffDate ? TotlaCost : toLocalString(feePerOneNight)}</TotalFee>
          </Fee>
        </HotelInfoBottom>
      </HotelInfo>
    </HotelWrap>
  );
}

const HotelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const HotelImg = styled.img`
  width: 50%;
  height: 200px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const HotelInfo = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HotelInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const RocationAndTitle = styled.div`
  width: 268px;

  .maximum_people {
    color: ${({ theme }) => theme.colors.grey2};
    ${({ theme }) => theme.fontStyles.normal12px};
  }
`;

const Rocation = styled.span`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fontStyles.normal12px};
`;

const Title = styled.h3`
  ${({ theme }) => theme.fontStyles.normal14px}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const Heart = styled(HeartIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.grey3};
  }
`;

const FillHeart = styled(Heart)`
  path {
    stroke: ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const HotelInfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Point = styled.div`
  display: flex;
  height: 17px;
  gap: 4px;
  align-items: center;
`;

const Star = styled(StarIcon)`
  width: 16px;
  height: 16px;
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const Grade = styled.div`
  ${({ theme }) => theme.fontStyles.normal12px}
`;

const Review = styled(Grade)`
  color: ${({ theme }) => theme.colors.grey3};
`;

const Fee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const OneDayFee = styled.h4`
  ${({ theme }) => theme.fontStyles.normal14px}
`;

const TotalFee = styled.span`
  ${({ theme }) => theme.fontStyles.normal12px}
  color: ${({ theme }) => theme.colors.grey3}
`;

export default Hotel;
