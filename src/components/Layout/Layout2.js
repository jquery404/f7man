import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout2({children}) {

    return (
      <>
        <Header />
        <main style={{ color: 'blue', lineHeight : 10, padding: 20 }}>{children}</main>
        <Footer />
      </>
    )
}

export default Layout2;