import { useNavigate } from "react-router-dom";

import NYANCAT_GIF from "@assets/nyancat+adventuretime.gif";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Not Found Page</h1>
      <img src={NYANCAT_GIF} alt="nyancat_gif" />
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default NotFound;
