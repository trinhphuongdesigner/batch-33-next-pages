import Image from 'next/image';
import React from 'react';

function Footer(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center b25 text-light text-uppercase pt-1">
          <div className="col-12 col-md">
            <a href="" className="nav-link  text-light h5">
              contact us
            </a>
          </div>
          <div className="col-12 col-md">
            <a href="" className="nav-link  text-light h5">
              Live chat
            </a>
          </div>
          <div className="col-12 col-md ">
            <a href="" className="nav-link text-light h5">
              shipping
            </a>
          </div>
          <div className="col-12 col-md ">
            <a href="" className="nav-link text-light h5">
              term & conditions
            </a>
          </div>
        </div>

        <div className="row b25 text-center">
          <div className="col d-none d-md-block">
            <ul className="list-group list-group-flush rounded-bottom">
              <li className="list-group-item text-light bg-dark font-weight-bold">
                <a href="#body-start" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="#depart" className="text-decoration-none text-light">
                  Shop by Department
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="#special" className="text-decoration-none text-light">
                  Special Offers
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="#newOffers" className="text-decoration-none text-light">
                  New
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="#weTogether" className="text-decoration-none text-light">
                  We are in this together
                </a>
              </li>
            </ul>
          </div>
          <div className="col d-none d-md-block">
            <ul className="list-group list-group-flush rounded-bottom">
              <li className="list-group-item text-light bg-dark font-weight-bold">
                <a href="" className="text-decoration-none text-light">
                  Group
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link1
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link2
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link3
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link4
                </a>
              </li>
            </ul>
          </div>
          <div className="col d-none d-md-block">
            <ul className="list-group list-group-flush rounded-bottom">
              <li className="list-group-item text-light bg-dark font-weight-bold">
                <a href="" className="text-decoration-none text-light">
                  Group
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link1
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link2
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link3
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link4
                </a>
              </li>
            </ul>
          </div>
          <div className="col d-none d-md-block">
            <ul className="list-group list-group-flush rounded-bottom">
              <li className="list-group-item text-light bg-dark font-weight-bold">
                <a href="" className="text-decoration-none text-light">
                  Group
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link1
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link2
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link3
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link4
                </a>
              </li>
            </ul>
          </div>
          <div className="col d-none d-md-block">
            <ul className="list-group list-group-flush rounded-bottom">
              <li className="list-group-item text-light bg-dark font-weight-bold">
                <a href="" className="text-decoration-none text-light">
                  Group
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link1
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link2
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link3
                </a>
              </li>
              <li className="list-group-item text-light bg-dark">
                <a href="" className="text-decoration-none text-light">
                  link4
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row b25 text-light">
          <div className="col-12 text-center pt-3 pb-1">
            <a href="#">
              {' '}
              <Image
                className=" mr-2 ml-2"
                src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
                loading="lazy"
                width="30"
                height="30"
                alt='picture'
              />
            </a>
            <a href="#">
              <Image
                className=" mr-2 ml-2"
                src="https://i1.wp.com/www.fashionrevolution.org/wp-content/uploads/2019/07/kisspng-social-media-marketing-youtube-instagram-photograp-instagram-logo-icon-png-5b875849ea5482.8768584615355966179598.png?fit=512%2C512&ssl=1"
                loading="lazy"
                width="30"
                height="30"
                alt='picture'
              />
            </a>
            <a href="#">
              <Image
                className=" mr-2 ml-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_%282017%29.svg/1200px-YouTube_social_white_circle_%282017%29.svg.png"
                loading="lazy"
                width="30"
                height="30"
                alt='picture'
              />
            </a>
            <a href="#">
              <Image
                className=" mr-2 ml-2"
                src="https://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png"
                loading="lazy"
                width="30"
                height="30"
                alt='picture'
              />
            </a>
          </div>
          <div className="col-12 text-center pt-1 pb-3">&copy; Bishal roy</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
