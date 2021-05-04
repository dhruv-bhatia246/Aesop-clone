import './App.css';
import 'tachyons';
import React from 'react';
import Navbar from "./Components/Navbar";
import image from "./Chat.png";
import image1 from "./Aesop1.png";
import image2 from "./Aesop2.webp";
import image3 from "./Aesop3.webp";
import image4 from "./Aesop4.webp";
import image5 from "./Aesop5.webp";
import image6 from "./Aesop6.webp";
import image7 from "./Aesop7.webp";
import image8 from "./right.png";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import video1 from "./Vitamin-c.mp4";
import image9 from "./image9.jpg";
import image10 from "./image10.jpg";
import store1 from "./store1.jpg";
import store2 from "./store2.webp";
import store3 from "./store3.jpg";
import "react-responsive-carousel/lib/styles/carousel.css";
var Carousel1 = require('react-responsive-carousel').Carousel;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class App extends React.Component{
  render() {
    return (
      <div>
      <div className="top-0" id="div1">
        <p className="bg-dark-gray white tc pa3 mt0 top-0">Enjoy complimentary standard shipping on all orders. &nbsp;&nbsp; +</p>
        <Navbar />
      <h5 className='f2 ma4 w-10 v-top tc dib pt5'>Aesop</h5>
      <p className='ma5 pt4 w-20 dib'>Mother's Day<br/>
      <p className='f3'>Affection, bottled</p>
      <p>Offering renewed thanks with every pour, dollop and lather, our suggested gifts for caregivers of all varieties include satisfying body cleansers, softening hand balms, and gentle formulations for the skin.
      <button className="btn f7 link bg-transparent dib pa3 mb5 ma1 mt5 ml0 btn">Discover gifts for mother figures &nbsp;&nbsp; <img src={image8} alt="" className='right'/>
      </button> 
      </p>
      </p>
      </div>
      <img src={image} className='chat' alt=""/>
      <Carousel responsive={responsive} focusOnSelect={true} className="mv5 mh2" partialVisible={true} focusOnSelect={true} infinite={true} showDots={true}>
        <div className="tc"><img src={image1} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image2} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image3} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image4} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image5} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image6} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image7} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
      </Carousel>
      <div className="mt5 pt5">
        <span className="dib w-40 v-top mh0 ph5 border-box">
          <p className="f6 b dib">Vitamin C for day and night</p>
          <p className="f3 dib">Supporting the architecture of the skin</p>
          <p className="f5 dib">Vitamin C is essential for enhancing the skin’s resilience. Suited to use both morning and evening, this potent ingredient offers significant benefits when paired with time and dedication.</p>
          <button className="btn f6 tc link bg-transparent dib pa3 ph2 mv2 w-70 mb5 ma1 mt5 ml0 btn">Discover more about Vitamin C &nbsp;&nbsp;&nbsp; <img src={image8} alt="" className='right pl4'/></button>
        </span>
        <span className="w-60 dib">
          <video src={video1} autoPlay={true} loop={true} className="w-100 dib"></video>
        </span>
      </div>
      <div className="mv6 pv3">
      <Carousel responsive={responsive} focusOnSelect={true} className="mv5 mh2" partialVisible={true} focusOnSelect={true} infinite={true} showDots={true}>
        <div className="tc"><img src={image1} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image2} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image3} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image4} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image5} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image6} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
        <div className="tc"><img src={image7} alt="" className="car-img"/><p className='tc f5 b'>Rōzu Eau de Parfum</p><p>Richly nourishing hydration for overnight use</p></div>
      </Carousel>
      </div>
      <div className="mt5 pt5">
        <span className="dib w-40 v-top mh0 ph5 border-box">
          <p className="f6 b dib">Knowledge is Power</p><br/>
          <p className="f3 dib">Aesop on Vitamins</p>
          <p className="f5 dib">The science behind some of the ingredients we return to time and again for their unique characteristics—be they soothing, calming, balancing, nourishing or anti-oxidant.</p>
          <button className="btn f6 tc link bg-transparent dib pa3 ph2 mv2 w-60 mb5 ma1 mt5 ml0 btn">Discover Vitamins &nbsp;&nbsp;&nbsp; <img src={image8} alt="" className='right pl5'/></button>
        </span>
        <span className="w-60 dib">
          <img src={image9}></img>
        </span>
      </div>
      <div className="mt5 pt5">
      <span className="w-60 dib">
          <img src={image10}></img>
        </span>
        <span className="dib w-40 v-top mh0 ph5 border-box">
          <p className="f6 b dib">Facial Appointments</p><br/>
          <p className="f3 dib">Composure for the skin and senses</p>
          <p className="f5 dib">For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
          <button className="btn f6 tc link bg-transparent dib pa3 ph2 mv3 w-60 mb5 ma1 mt5 ml0 btn">Learn More &nbsp;&nbsp;&nbsp; <img src={image8} alt="" className='right pl6'/></button>
        </span>
      </div>

      <div className="mt5 pt5">
        <span className="dib w-40 v-top mh0 ph5 border-box">
          <p className="f6 b dib">Knowledge is Power</p><br/>
          <p className="f3 dib">Aesop on Vitamins</p>
          <p className="f5 dib">The science behind some of the ingredients we return to time and again for their unique characteristics—be they soothing, calming, balancing, nourishing or anti-oxidant.</p>
          <button className="btn f6 tc link bg-transparent dib pa3 ph2 mv2 w-60 mb5 ma1 mt5 ml0 btn">Discover Vitamins &nbsp;&nbsp;&nbsp; <img src={image8} alt="" className='right pl5'/></button>
        </span>
        <span className="w-60 dib">
        <Carousel1 showArrows={true} autoPlay={true} infiniteLoop={true} showIndicators={true} showStatus={true}>
                <div>
                    <img src={store1} />
                    <p>Aesop K11 Musea</p>
                </div>
                <div>
                    <img src={store2} />
                    <p>Aesop New Town Plaza</p>
                </div>
                <div>
                    <img src={store3} />
                    <p>Aesop Hollywood Road</p>
                </div>
            </Carousel1>
        </span>
      </div>

      <div className="mt7 mb6 ph6 tc">
      <p className="f3">‘Sunlight fell upon the wall; the wall received a borrowed splendour.’</p>
      <p className="f6 b">Jalāl ad-Dīn Muhammad Rūmī</p>
      </div>

      <div className="div1 pa4 white f6">
        <span className="w-40 dib pa4 pl2 border-box v-top white">
          <input type="text" placeholder="Email Address                                                                                                     &nbsp;&rarr;" className="bg-transparent white b--white ba pa2 w-100 br2"></input>
          <input type='checkbox' id="checkbox" className="ma1 mt3"></input>
          <label for="checkbox">
          <span>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy.</span></label>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
          <p className="b">Orders and Support</p>
        <hr></hr>
        <p>Contact Us &#8599;</p><p>FAQs &#8599;</p><p>Delivery and Returns &#8599;</p><p>Terms and Conditions</p>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
          <p className="b">Services</p>
          <hr></hr>
          <p>Live Assistance</p><p>Corporate Gifts</p><p>Facial Appointments</p>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
          <p className="b">Loaction Preferences</p>
          <hr></hr>
          <p>Shipping: Hong Kong (S.A.R.)</p><p>Language: English</p>
        </span>
      </div>

      <div className="div1 pa4 pt0 white f6">
        <span className="w-40 dib pa4 pl2 pt0 border-box v-top white">
          <p className="f5 b">Sustainability</p>
          <hr></hr>
          <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
          <p className="b">About</p>
        <hr></hr>
        <p>Our Story</p><p>Foundation &#8599;</p><p>Careers</p><p>Privecy Policy</p><p>Accessibility</p>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
          <p className="b">Social Media</p>
          <hr></hr>
          <p>Instagram &#8599;</p><p>Twitter &#8599;</p><p>LinkedIn &#8599;</p><p>WeChat</p><p>Weibo &#8599;</p>
        </span>
        <span className="w-20 dib pa2 border-box v-top">
        </span>
      </div>
      <div className="div1 pa2 ph4 mt1 white f6">
        <p>&#169; Aesop</p>
      </div>
      </div>
  );
  }
}

export default App;
