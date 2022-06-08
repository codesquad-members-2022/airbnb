import React from "react";
import styled from "styled-components";
import {ReactComponent as EmptyHeartIcon} from "../../../assets/emptyHeart.svg";
import {ReactComponent as FullHeartIcon} from "../../../assets/fullHeart.svg";
import {ReactComponent as FullStarIcon} from "../../../assets/fullStar.svg";
import {makePriceFormat} from "../../../helper/util";

const AccomodationListItem = ({img, location, relation, option1, option2, price, grade, review}) => {
    return (
        <ItemBox>
            <img src={img} />
            <ItemDetail>
                <FlexBox>
                    <ItemDetailLocation>{location}</ItemDetailLocation>
                    <IconBox>
                        <EmptyHeartIcon />
                        <FullHeartIcon style={{color: "#E84C60"}} />
                    </IconBox>
                </FlexBox>
                <ItemDetailRelation>{relation}</ItemDetailRelation>
                <ItemDetailOption>
                    {option1}
                    <br />
                    {option2}
                </ItemDetailOption>
                <FlexBox style={{flexGrow: "1"}} />
                <DetailPrice>₩{makePriceFormat(price)} / 박</DetailPrice>
                <FlexBox>
                    <EvaluatingBox>
                        <IconBox>
                            <FullStarIcon style={{color: "#E84C60"}} />
                        </IconBox>
                        <DetailGrade>{grade.toFixed(2)}</DetailGrade>
                        <DetailReview>(후기 {review}개)</DetailReview>
                    </EvaluatingBox>
                    <DetailTotalPrice>총액 ₩1,493,159</DetailTotalPrice>
                </FlexBox>
            </ItemDetail>
        </ItemBox>
    );
};

const ItemBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin()};
    img {
        width: 50%;
        height: 100%;
        border-radius: 10px;
    }
    padding: 24px 0;
`;

const ItemDetail = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    width: 50%;
    padding: 4px 0 4px 24px;
    gap: 8px;
`;

const FlexBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between")};
`;

const ItemDetailLocation = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between")};
    color: ${({theme}) => theme.color.gray3};
    font-size: 0.8rem;
    line-height: 17px;
`;

const IconBox = styled.div`
    color: ${({theme}) => theme.color.gray3};
    width: 24px;
    height: 18.23px;
`;

const ItemDetailRelation = styled.div`
    color: ${({theme}) => theme.color.gray1};
    font-size: 1.1rem;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
`;

const ItemDetailOption = styled.div`
    color: ${({theme}) => theme.color.gray3};
    font-size: 0.8rem;
    line-height: 17px;
`;

const DetailPrice = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-end")};
    color: ${({theme}) => theme.color.gray1};
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 20px;
`;

const EvaluatingBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")};
    gap: 4px;
`;

const DetailGrade = styled.div`
    color: ${({theme}) => theme.color.gray1};
    font-size: 1rem;
    line-height: 24px;
    padding: 8px 0 0 0;
`;

const DetailReview = styled.div`
    color: ${({theme}) => theme.color.gray3};
    font-size: 1rem;
    line-height: 24px;
    padding: 8px 0 0 0;
`;

const DetailTotalPrice = styled.div`
    color: ${({theme}) => theme.color.gray3};
    font-size: 1rem;
    line-height: 24px;
    padding: 8px 0 0 0;
    text-decoration: underline;
`;
export default AccomodationListItem;
