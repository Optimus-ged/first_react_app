import styled from "styled-components";
import img4 from "../../images/toph-4.svg";

export const Wrapper = styled.div`
  background: #ecf2f7;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: inline-block;
`;

export const ReviewTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  opacity: 0.9;
  text-align: center;
`;

export const ReviewUnderline = styled.div`
  height: 2px;
  background: #409fe2;
  opacity: 0.5;
  width: 100px;
  margin: 2px auto;
`;

export const AuthorWrapper = styled.div`
  background: #fff;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  min-width: 100px;
  padding: 30px 30px;
`;

export const BackgroundContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #409fe2;
  position: relative;
`;

export const ImgContainer = styled.div`
  background: grey;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
  position: absolute;
`;

export const CiteContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  background: #409fe2;
  position: absolute;
  top: 10px;
  left: 2px;
  padding: 4px;
`;

export const AuthorName = styled.p`
  color: #353c49;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Role = styled.p`
  color: #409fe2;
  font-size: 11px;
`;

export const AboutDev = styled.p`
  font-size: 11px;
  color: #73828b;
  text-align: center;
  line-height: 15px;
  margin-top: 20px;
  font-weight: 600;
`;

export const SupriseMeButton = styled.button`
  background: #e6f5f8;
  color: #409fe2;
  border: none;
  margin-top: 20px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;
