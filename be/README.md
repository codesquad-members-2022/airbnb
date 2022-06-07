## 1주차 수요일 리뷰 요청

### 진행 내용
#### AWS 인프라 구성
+ AWS 신규 VPC 생성 및 ec2 서브넷과 db 서브넷 구성
+ RDS(MySQL) 생성 및 환경 설정(Timezone, character set 등)
+ GitHub Action 및 Docker를 통한 배포(학습 중)

#### 애플리케이션
+ 도메인 모델링 및 테이블 설계(진행 중)
  + 이와 관련 프론트 엔드 팀원들과도 논의 지속 중

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> ```
> ![image](https://user-images.githubusercontent.com/82401504/170213984-0840cf7b-9cdd-4f20-8687-2c3065dde66b.png)

## 2주차 금요일 리뷰 요청

### 진행 내용
#### 애플리케이션
+ 도메인 모델링 및 테이블 설계(진행 중)
  + 이와 관련 프론트 엔드 팀원들과도 논의 지속 중
+ 체크인 및 체크아웃 일자 기반 1박 가격별 숙소 개수 조회 API 기능 구현(완료)
  + Repository, Service, Controller 코드 작성 
  + JPQL 활용 데이터 조회 및 처리
  + <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![image](https://user-images.githubusercontent.com/82401504/170532752-c9123e86-ede3-4307-a8f9-cc0ceebf0acb.png)

## 2주차 화요일 리뷰 요청

### 진행 내용
#### 애플리케이션
+ Github Actions 및 Docker를 통한 Spring boot 웹 앱 무중단 자동 배포(완료)
  + 동일한 방법으로 React 앱 자동 배포 작업 진행 중 
+ 체크인 및 체크아웃 일자 기반 1박 가격별 숙소 개수 조회 API 기능 보완
  + 사용자 현재 위치 기준 반경 1km 내 숙소 검색 조건 추가
  + mysql geometry 함수 사용
+ 사용자 입력 정보 기반 숙소 정보 조회 API 기능 구현(초안)
  + Repository, Service, Controller 등 코드 작성 
+ <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![img_1.png](img_1.png)

## 2주차 금요일 리뷰 요청

### 진행 내용
#### 인프라(완료)
+ Github Actions 및 Docker를 통한 Nginx 및 React 앱 무중단 자동 배포(완료)
  + 배포 URL : http://3.36.67.143/
+ 최종 작업 현황
  - [x] AWS VPC를 학습하고 ec2 서브넷과 db 서브넷을 구분 생성한다.

  - [x] 웹서버와 데이터베이스를 분리한다. 데이터베이스는 RDS 또는 EC2를 사용하되 불필요한 요금이 발생하지 않도록 구성에 주의한다.

  - [x] 데이터베이스 port는 웹 서버에게만 개방한다.

  - [x] 배포 서버에는 항상 동작하고 있는 버전이 배포되어 있어야 한다. 지정 브랜치를 이용해서 서비스를 배포한다.

  - [x] GitHub Action을 학습하고 이를 이용해 배포를 진행한다.

  - [x] Docker를 학습하고 도커 이미지를 이용해 배포를 진행한다.

  - [x] 가능하면 매일 배포가 가능하도록 협업 및 배포 전략을 구성해 본다.

  - [x] 웹서버는 NginX와 tomcat을 연동하고 80포트만 개방한다.
+ owner 권한 없이 리포지토리 settings에 접근할 수 없으므로 별도의 리포지토리에서 배포 브랜치 관리 중
  + https://github.com/ikjo93/airbnb-deploy

#### 애플리케이션(진행 중)
+ 사용자 입력 정보 기반 숙소 정보 조회 API 기능 리팩토링
  + 의미가 불분명한 매직 넘버 상수로 선언
  + 사용자 현재 위치 좌표 미 전송 시 Default 서울 시청 좌표로 숙소 검색
  + 좌표 값 Default 값 선언 위해 쿼리스트링 값 추출 시 기존 ModelAttribute 방식에서 RequestPram 애노테이션 방식으로 변경
+ Github OAuth 연동 기능 구현
  + TODO : JWT을 통한 로그인 인증 기능 구현
+ <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 도메인 모델과 테이블 설계
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![image](https://user-images.githubusercontent.com/82401504/171779598-ffd07a5d-2568-4843-8b3d-92326490e782.png)

## 3주차 수요일 리뷰 요청

### 진행 내용
#### 애플리케이션
+ 숙소 예약 API 기능 구현(완료)
+ 깃허브 OAuth를 통한 로그인 인증, JWT을 통한 `로그인 검증`, `로그아웃`, `액세스 토큰 재발행` 기능 구현(완료)
  + 로그인 완료 후 클라이언트에 access(응답 헤더로) 및 refresh(쿠키로) 토큰 발급
    + refresh 토큰은 레디스(redis)에 저장
  + 로그아웃 요청 시 레디스에 저장된 refresh 토큰을 삭제하고 기존 access 토큰은 레디스에 블랙리스트로 지정(추후 로그인 검증 시 활용)
  + 액세스 토큰 재발행 요청 시 refresh 토큰 만료 시간 검증 
+ <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 로그인 및 로그인 검증 흐름 예시
```
1. 클라이언트 -> 서버 : Github OAuth 연동 로그인 요청(with 인증 코드)

2. 서버 -> 클라이언트 : access token 및 refresh token 응답
 - 응답 헤더 access_token에 access token 값 할당
 - 쿠키 refresh_token에 refresh token 값 할당
  ※ 서버는 refresh token을 레디스(redis)에 별도 저장

3. 클라이언트 -> 서버 : 숙소 예약 요청
 - 요청 헤더 Authorization에 "Bearer {access token 값}" 할당

4. (서버가 검증한 결과 access token이 만료된 경우) 서버 -> 클라이언트 : access token 만료 메시지 응답
 ※ (access token이 만료되지 않은 경우) 서버 -> 클라이언트 : 숙소 예약 정상 처리 메시지 응답

5. 클라이언트 -> 서버 : access token 갱신 요청
 - 쿠키 refresh_token에 refresh token 값 할당
 ※ 리액트 단에서 보유하고 있는 access token 만료 기한 자체 검증 후 서버에 갱신 요청
  - 참고자료 1 : https://www.bezkoder.com/react-logout-token-expired/
  - 참고자료 2 : http://naver.me/FCLUz6ZE

6. 서버 -> 클라이언트 : 갱신된 access token 응답
 - 응답 헤더 access_token에 access token 값 할당

7. 클라이언트 -> 서버 : 로그아웃 요청

8. 서버 -> 클라이언트 : 로그아웃 정상 처리 메시지 응답
 - 클라이언트가 보낸 refresh token에 대한 정보를 레디스에서 삭제
 - 클라이언트가 보낸 access token에 대한 정보를 레디스에 저장(블랙 리스트)하는데, 이때 해당 데이터의 만료 시간은 해당 access token의 남은 만료 시간으로 설정
```

#### 인프라 아키텍처
> ![image](https://user-images.githubusercontent.com/82401504/172468079-244b8df4-3464-49f1-8649-b454028d9101.png)

#### 도메인 모델과 테이블 설계
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Reservation : ReservationPrice = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 예약가격(ReservationPrice): 예약가격은 예약과 일대일 관계로서 예약과 관련된 가격 정보(숙박 가격, 청소비, 서비스 수수료, 최종 예약 가격 등)를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![image](https://user-images.githubusercontent.com/82401504/172059828-e07aebf7-4094-4cfa-9e52-cf9aade52492.png)
