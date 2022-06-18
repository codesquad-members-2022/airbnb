import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 720px;
  height: 1000px;
  position: relative;
`;

const SearchMap = styled.div`
  width: 100%;
  height: 100%;
`;

const ControlDiv = styled.div`
  width: auto;
  height: auto;
  z-index: 3;
  position: absolute;
  top: 10px;
  left: 360px;
`;
const ControlUI = styled.div`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  boxshadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 22px;
  text-align: center;
  display: flex;
`;

const ControlText = styled.div`
  color: rgb(25, 25, 25);
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 38px;
  padding-left: 5px;
  padding-right: 25px;
`;

const CheckWrapper = styled.div`
  margin-top: 7px;
  margin-right: 5px;
`;
export { CheckWrapper, ControlDiv, ControlText, ControlUI, MapWrapper, SearchMap };
