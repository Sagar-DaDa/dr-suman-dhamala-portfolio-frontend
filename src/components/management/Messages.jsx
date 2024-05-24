import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";

export default function Messages() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Messages");
  }, []);
  return <div>I am from Messages.</div>;
}
