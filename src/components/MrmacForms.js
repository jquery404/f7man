import React, { useState } from 'react';

export default function MrmacForm() {

    const demo = "https://docs.google.com/forms/d/e/1FAIpQLSfQ1v_aEae06UsF-dBHZaFw7dScsaKMShl-zHxP7IVSOOBDPg/viewform?embedded=true";
    const [iframeSrc, setIframeSrc] = useState(demo);
    const [currentBtn, setCurrentBtn] = useState(1);

    var styles = {
        navBar: {
          margin: 0,
          fontSize: '.85rem',
          fontWeight: 700,
        },
    };

    const gotoPage = (id) => {
        setCurrentBtn(id);
        if(id === 1) setIframeSrc("https://docs.google.com/forms/d/e/1FAIpQLSfQ1v_aEae06UsF-dBHZaFw7dScsaKMShl-zHxP7IVSOOBDPg/viewform?embedded=true");
        else if(id === 2) setIframeSrc("https://docs.google.com/forms/d/e/1FAIpQLSdZO-rBGOZ9k-lwUPVAd04chCGEAkNztpOFQz0IjS5jkE2A5A/viewform?embedded=true");
        else if(id === 3) setIframeSrc("https://docs.google.com/forms/d/e/1FAIpQLSeHBG9M1pB-S_X-p05OzOOplFXQVKD63jLC3iVt3-12HLrvtw/viewform?embedded=true");
        else if(id === 4) setIframeSrc("https://main.d3hmutmb4n9wkp.amplifyapp.com/data/tlx.html");
        else if(id === 5) setIframeSrc("https://docs.google.com/forms/d/e/1FAIpQLSd4pHFj_pXIlrpVv1kioJaHQpmkG13DQ4faZRIBcpzS9Ume0A/viewform?embedded=true");
        else if(id === 6) setIframeSrc("https://docs.google.com/forms/d/e/1FAIpQLScdEi1dL2XrQ47XHuRHgbJ2jBW7oDyDvKGd_HlgbmT5ekNMXw/viewform?embedded=true");
    }
    
    return (
    <>
    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-2">
                <p style={styles.navBar}>Section 1</p>
                <button onClick={()=> gotoPage(1)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_1' ? 'btn-primary' : 'btn-default'} my-1 `}>Demo</button>
                <button onClick={()=> gotoPage(2)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_2' ? 'btn-primary' : 'btn-default'} my-1 a_2`}>Pre.SSQ</button>
                <hr/>
                
                <p style={styles.navBar}>Section 2</p>
                <button onClick={()=> gotoPage(3)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_3' ? 'btn-primary' : 'btn-default'} my-1 a_3`}>MRMAC</button>
                <button onClick={()=> gotoPage(4)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_4' ? 'btn-primary' : 'btn-default'} my-1 a_4`}>TLX</button>
                <button onClick={()=> gotoPage(5)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_5' ? 'btn-primary' : 'btn-default'} my-1 a_5`}>Post.SSQ</button>
                
                <hr/>
                <p style={styles.navBar}>Section 3</p>
                <button onClick={()=> gotoPage(6)} type="button" className={`btn btn-sm nav-link ${'a_' + currentBtn === 'a_6' ? 'btn-primary' : 'btn-default'} my-1 a_6`}>Pref.</button>
            </div>
            <div className="col=8">
                <iframe src={iframeSrc} width="640" height="800" frameBorder="0" title="iframe" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        </div>
    </div>
    </>
    )
};