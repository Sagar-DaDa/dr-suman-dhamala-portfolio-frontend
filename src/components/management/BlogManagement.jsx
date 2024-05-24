import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/state';

export default function BlogManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Blog Management");
  }, []);
  return (
    <div>
      I am from BlogManagement.
    </div>
  )
}
