import React from 'react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

const AuthApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
