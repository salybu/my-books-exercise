import { Redirect } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import useToken from "../hooks/useToken";

function Signin() {
  // const token = useSelector<RootState, string | null>(
  //   (state) => state.auth.token
  // );
  const token = useToken();

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return <SigninContainer />;
}

export default Signin;
