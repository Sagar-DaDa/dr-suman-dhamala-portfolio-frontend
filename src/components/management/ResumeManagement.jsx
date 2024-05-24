import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/state';

export default function ResumeManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Resume Management");
  }, []);
  return (
    <div>
      I am ResumeManagement.
    </div>
  )
}
