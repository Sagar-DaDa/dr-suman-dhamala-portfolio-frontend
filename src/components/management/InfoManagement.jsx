import React, { useEffect } from "react";
import {
  buttonPrimary,
  dashboardRootDivStyle,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";

export default function InfoManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Info Management");
  }, []);
  return (
    <div className={dashboardRootDivStyle}>
      <p className="text-xl text-primary font-bold">
        {" "}
        <i className="fa-solid fa-circle-info w-8"></i>Portfolio Info
      </p>

      <form className={formStyle}>
        <p className="text-primary font-medium">Portfolio Name</p>
        <input
          className={`${inputStyle} w-96`}
          type="text"
          name="portfolioName"
          required
        />
        <button className={`${buttonPrimary} w-40`}>Apply</button>
      </form>

      

      
    </div>
  );
}
