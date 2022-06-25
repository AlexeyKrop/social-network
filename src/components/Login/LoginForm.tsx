import React from 'react';

export const LoginForm = () => {
  return (
    <form action="#">
      <input type="text" placeholder={'login'}/>
      <input type="text" placeholder={'password'}/>
      <input type="checkbox"/>remember me
      <button>Enter</button>
    </form>
  );
};

