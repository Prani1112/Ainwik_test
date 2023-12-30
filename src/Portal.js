import React from 'react';
import ReactDOM from 'react-dom';

const Portal= () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Lorem ipsum heading</h1>
      <p>Lorem</p>
    </div>,
    document.getElementById('portal-root') 
  );et                                                                                                                                                                                                                                                                                                                                       
};

export default Portal;