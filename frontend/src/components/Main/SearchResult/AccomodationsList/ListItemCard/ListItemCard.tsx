import { numToWon } from "utils/utils";

const ListItemCard = ({
  name,
  address,
  imagePath,
  price,
  reviewScore,
  reviewCount,
  type,
  numberAdult,
  numberChild,
  numberBed,
  numberBathroom,
  kitchen,
  hairDryer,
  wirelessInternet,
  airConditioner,
  id,
}: ListItemCardProps) => {
  return (
    <li className="accomodations-item" key={id}>
      <div className="thumbnail">
        <img src={imagePath} alt="숙소 이미지 썸네일" />
      </div>
      <div className="item-info">
        <div className="info-desc-wrap ">
          <div className="info-text-wrap">
            <p className="info-desc item">
              {address}의 {type}
            </p>
            <p className="info-name item">{name}</p>
            <p className="info-desc item">
              {numberAdult}
              {numberChild}
              {numberBed}
              {numberBathroom}
              {kitchen}
              {hairDryer}
              {wirelessInternet}
              {airConditioner}
            </p>
          </div>
          <div className="info-wish-button">🧡</div>
        </div>
        <div className="info-price-wrap">
          <p className="info-price">₩{numToWon(Number(price))} / 박</p>
          <div className="info-review-total-area">
            <div className="info-review item">
              ⭐ {reviewScore}
              <span className="info-review-count">(후기 {reviewCount}개)</span>
            </div>
            <div className="info-total-price item">
              ₩{numToWon(Number(price))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItemCard;

interface ListItemCardProps {
  name?: string;
  imagePath?: string;
  address?: string;
  price?: number;
  reviewScore?: number;
  reviewCount?: number;
  type?: string;
  numberAdult?: number;
  numberChild?: number;
  numberBed?: number;
  numberBathroom?: number;
  kitchen?: boolean;
  hairDryer?: boolean;
  wirelessInternet?: boolean;
  airConditioner?: boolean;
  id?: number;
}
