import React from 'react';
import { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';

const DashboardApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default DashboardApp;
