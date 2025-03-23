import React from 'react';
import { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}>MarketingApp</div>;
};

export default MarketingApp;
