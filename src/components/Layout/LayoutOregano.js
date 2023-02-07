import React from 'react';

import HeaderOregano from './Header/HeaderOregano';

import './css/LayoutOregano.css';

// https://preview.colorlib.com/theme/kusina/#
function LayoutOregano({children}) {

    return (
      <>
        <HeaderOregano />
        <main>{children}</main>
      </>
    )
}

export default LayoutOregano;