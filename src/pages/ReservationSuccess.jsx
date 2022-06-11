import reservationSuccess from 'assets/reservationSuccess.PNG';
import Notice from 'components/Notice';

function ReservationSuccess() {
  return (
    <Notice
      imageURL={reservationSuccess}
      imageAlt="Reservation Success"
      content="✈️ 예약이 성공적으로 완료되었습니다."
    />
  );
}

export default ReservationSuccess;
