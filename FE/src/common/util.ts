export class CustomDate {
  year: number;

  month: number;

  constructor(year: number, month: number) {
    this.year = year;
    this.month = month;
  }

  getFirstDayOfCurMonth() {
    // 해당 달의 1일에 요일 구하기
    return new Date(this.year, this.month - 1, 1).getDay();
  }

  getDatesOfCurMonth() {
    // 해당 달의 일수 구하기
    return new Date(this.year, this.month, 0).getDate();
  }
}
