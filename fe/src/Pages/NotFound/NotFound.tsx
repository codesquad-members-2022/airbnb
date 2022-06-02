import { NavLink } from "react-router-dom";
import { NotFoundContainer } from "./NotFound.styled";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404 Not Found</h1>
      <div>올바른 경로를 입력하세요.</div>
      <div>
        홈 : <NavLink to="/">홈으로 바로가기</NavLink>
      </div>
    </NotFoundContainer>
  );
}
