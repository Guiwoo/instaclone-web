import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 7px 0px;
  font-weight: 600;
  width: 100%;
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    margin-left: 5px;
    color: ${(props) => props.theme.accent};
  }
`;
const Seperator = styled.div`
  margin: 15px 0px 20px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 2px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    color: #8e8e8e;
  }
`;
const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => (
  <Container>
    <Wrapper>
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size={"4x"} />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Seperator>
          <div></div>
          <span>or</span>
          <div></div>
        </Seperator>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </TopBox>
      <BottomBox>
        <span>Don't have an account ?</span> <Link to="/sign-up">Sign up</Link>
      </BottomBox>
    </Wrapper>
  </Container>
);

export default Login;