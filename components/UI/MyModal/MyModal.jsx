import React from 'react';
import cl from './MyModal.module.css';
import { Paper } from '@mui/material';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div width={3 / 4} height={3 / 4} sx={{ padding: 4 }}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
