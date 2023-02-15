import '../App.css';

import img01 from '../img/nat-1-large.jpg';
import img02 from '../img/nat-2-large.jpg';
import img03 from '../img/nat-3-large.jpg';
import img04 from '../img/nat-8.jpg';
import img05 from '../img/nat-9.jpg';
import videoMp4 from '../img/video.mp4';
import videoWebm from '../img/video.webm';
import Logo from '../img/logo-green-2x.png';

import Header from '../components/Header';
import Button from '../components/Button';
import Title from '../components/Title';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';



function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <main>
        <section className="section-about">      
          <Title text="Exciting tours for adveturous" />
          <div className="container-grid">
            <div className="container-grid__left">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti adipisci dolor totam quae saepe.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ab alias accusamus modi distinctio quia.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti adipisci dolor totam quae saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati earum cum natus perspiciatis placeat iure enim.
              </p>
              <Button href='#' className= 'btn-text' text= "Lear more &rarr;"/>
            </div>
            <div className="container-grid__right">
              <div className="composition">
                <img src={img01} alt="" className="composition__photo p1" />
                <img src={img02} alt="" className="composition__photo p2" />
                <img src={img03} alt="" className="composition__photo p3" />
            </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="flex-container">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"/>
              <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a voluptatibus ratione?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"/>
              <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a voluptatibus ratione?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"/>
              <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a voluptatibus ratione?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"/>
              <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a voluptatibus ratione?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>

        <section className="section-tours" id='section-tours'>        
          <Title text="Most popular tours"/>
          <div className="three-columns-grid">
            <div className="card c01" data-testid="cards">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--01"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--01">
                    The sea explorer
                  </span>                 
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 days tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-01" data-testid="backface">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <Button href='#popup' className='btn btn--white' text='Book now!'/>
                </div>
              </div>
            </div>
            <div className="card c02" data-testid="cards">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--02"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--02">
                    The forest hiker
                  </span>                 
                </h4>
                <div className="card__details">
                  <ul>
                    <li>7 days tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-02">
              <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$497</p>
                  </div>
                  <Button href='#popup' className='btn btn--white' text='Book now!'/>
                </div>
              </div>
            </div>
            <div className="card c03" data-testid="cards">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--03"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--03">
                    The forest hiker
                  </span>                 
                </h4>
                <div className="card__details">
                  <ul>
                    <li>5 days tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-03">
              <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$897</p>
                  </div>
                  <Button href='#popup' className='btn btn--white' text='Book now!'/>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <Button href='#section-tours' className='btn btn--green' text='Discover all tours'/>
          </div>
        </section>

        <section className="section-stories" id='stories'>
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={videoMp4} type="video/mp4"/>
              <source src={videoWebm} type="video/webm"/>
              Your browser is not supported. Get a new one, Dude!
            </video>
          </div>       
          <Title text="We make people genuinely happy"/>

          <div className="story">
            <figure className="story__shape">
              <img src={img04} alt="A girl on a boat" className="story__img" />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae aperiam excepturi voluptate quis autem tenetur beatae rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam sequi explicabo incidunt quos. Doloremque saepe, itaque modi nisi nihil hic cupiditate sed vitae corporis!
              </p>
            </div>
          </div>

          <div className="story">
            <figure className="story__shape">
              <img src={img05} alt="A boy on a mountain" className="story__img" />
              <figcaption className="story__caption">Jack Wilson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Wow My life is completely differente now
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae aperiam excepturi voluptate quis autem tenetur beatae rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam sequi explicabo incidunt quos. Doloremque saepe, itaque modi nisi nihil hic cupiditate sed vitae corporis!
              </p>
            </div>
          </div>
          <div className="story__btn" id='stories'>
            <Button href='#stories' className= 'btn-text' text= "Read all stories &rarr;"/>
          </div>

        </section>

        <section className="section-book">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <Title text="Start booking now" />
                <div className="form__group">
                  <input type="text" className="form__input" placeholder='Full Name' id='name' required />
                  <label htmlFor="name"  className="form__label">Full Name</label>                  
                </div>
                <div className="form__group">
                  <input type="email" className="form__input" placeholder='Email address' id='email' required />
                  <label htmlFor="email"className="form__label">Email address</label>
                </div>
                <div className="form_group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="small" name="size" />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-bottom"></span>
                      Small tour group
                    </label>
                  </div>
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="Large" name="size"/>
                    <label htmlFor="Large" className="form__radio-label">
                      <span className="form__radio-bottom"></span>
                      Large tour group
                    </label>
                  </div>                  
                </div>
                <div className="form__group">
                    <Button href='#popup' className= 'btn btn--green' text= "Next step &rarr;"/>
                </div>
              </form>              
            </div>
          </div>
        </section>
      </main> 
      <Footer /> 

      <div className="popup" id='popup'>
        <div className="popup__content">
          <div className="popup__left">
            <img src={img04} alt="Tour photo" className='popup__img'/>
            <img src={img05} alt="Tour photo" className='popup__img'/>
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">&times;</a>
            <h2 className="heading-secondary u-margin-bottom-small">Start Booking now</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nostrum quod veniam obcaecati nobis, facilis placeat id? Vitae voluptatum corporis eius? Ex ipsa consequuntur praesentium doloribus nesciunt quam fugit ducimus, dolores corporis placeat aliquid accusamus debitis labore molestias ipsum maxime dicta magnam soluta maiores ab enim. Doloremque, tenetur pariatur quod similique, esse minus hic non fugit tempore natus maxime! Consequuntur maxime neque id nihil debitis ullam suscipit eos minus qui, fugiat laboriosam reiciendis nobis animi fuga minima illum. Nesciunt, praesentium.
            </p>
            <Button href='#popup' className="btn btn--green" text="Book now"/>
          </div>
        </div>
      </div> 
    </>
  );
};

export default App;