// import React from "react";
// import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../hooks/useToken";
// import { RootState } from "../types";

function Home() {
  // const token = useSelector<RootState, string | null>(
  //   (state) => state.auth.token
  // );
  const token = useToken();

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return <ListContainer />;
}

export default Home;
