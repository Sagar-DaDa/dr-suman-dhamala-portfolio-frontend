import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/state';

export default function ContactManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Contact Management");
  }, []);

  return (
    <div>
      I am from ContactManagement.
    </div>
  )
}
