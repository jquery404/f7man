import React from 'react';

export default function HeaderOregano() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">The Oregano Sage</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/oreganosage/cover.png" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about"><img src="assets/img/oreganosage/ic_about.svg" width= "36px" alt="ic_about" title="" /></a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience"><img src="assets/img/oreganosage/ic_menu.svg" width= "36px" alt="ic_menu" title="" /></a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education"><img src="assets/img/oreganosage/ic_recipe.svg" width= "36px" alt="ic_recipe" title="" /></a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills"><img src="assets/img/oreganosage/ic_contact.svg" width= "36px" alt="ic_contact" title="" /></a></li>
                </ul>
            </div>
        </nav>
    )
}

