import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="TOZO HT2 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 60H Playtime, Hi-Res Audio Custom EQ via App Deep Bass Comfort Fit Ear Cups, for Home Office Travel"
            price={82.06}
            rating={2}
            image="https://m.media-amazon.com/images/I/71A2MkKuuWL._AC_SX522_.jpg"
          />
          <Product
            id="49538094"
            title="Cottonelle Ultra Clean Toilet Paper with Active CleaningRipples Texture, Strong Bath Tissue, 32 Family Mega Rolls (32 Family Mega Rolls = 176 Regular Rolls) (8 Packs of 4), 388 Sheets per Roll White"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/8113gHxytSL._AC_SX679_PIbundle-32,TopRight,0,0_SH20_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fender Player Stratocaster Plus Top Electric Guitar, with 2-Year Warranty, Aged Cherry Burst, Maple Fingerboard"
            price={577.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/517QbmjeAfL._AC_SX679_.jpg"
          />
          <Product
            id="90829332"
            title="
            Amcrest USB Microphone for Voice Recordings, Podcasts, Gaming, Online Conferences, Live Streaming, Cardioid Microphone with Adjustable Heavy Metal Stand, Windscreen and 6.5 ft USB Cable, AM430 "
            price={85.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/619xla1bliS._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Can Opener, Manual Can Opener with Durable Stainless Steel Blade Anti-slip Hand Grip & Large Turning Knob, Heavy Duty Can Opener Smooth Edge Food Safety for Seniors with Arthritis Hands Friendly"
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NKXJMrdzL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
