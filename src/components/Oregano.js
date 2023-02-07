import React from 'react';
import LayoutOregano from './Layout/LayoutOregano';

export default function Oregano() {

    
    return (
    <>
      <LayoutOregano>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-6">
              <section className="resume-section" id="about">
                  <div className="resume-section-content">
                      <h1 className="mb-0">
                          The <span className="text-primary">Oregano Sage</span>
                      </h1>
                      
                      <p className="lead my-5">A happy and nutritious meal will not only lighten up your mood, but also bring joy in the toilet. Trust me, your tummy will thank you for it.</p>
                      <div className="social-icons">
                        <img src="assets/img/oreganosage/scallion.svg" className="img-fluid" alt="scallion" title="" />
                      </div>
                  </div>
              </section>
          
            </div>
            <div className="col-sm-6 sidecover"></div>

          </div>
            
        </div>
      </LayoutOregano>
    </>
    )
};