import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import office from "./images/office.jpg";

function App() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <div className="container">
      <header id="home">
        <img src={logo} className="logo" alt="fourfourtyeight logo" />

        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </header>
      <div className="about" id="about">
        <h1> Vend It Your Way</h1>

        <div className="about-info">
          <img
            src={office}
            className="office"
            alt="vending machine in office break room"
          />
          <p className="about-p">
            4FourtyEight Vending is about reinnovating an industry with your own
            footprint. Our goal is to help your business become more profitible.
            Allowing your customers the chance to have a one stop shop for all
            their needs and stored in a convenient place! Even accessible 24
            hours with extra safety features! Contact us now for a free
            consulation!
          </p>
        </div>
      </div>

      <section className="form-cont" id="contact">
        <h1> Contact Us</h1>
        <form action="asahmed93@gmail.com" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="business">Business Name</label>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" />
          <input type="submit" value="Submit" />
        </form>
      </section>

      <footer>
        <div class="fotter-list">
          <ul>
            <li>4FORTYEIGHTGROUP LLC</li>
            <li>
              1507 Benning Rd NE <br /> Suite D31
            </li>
            <li>Wash., D.C. 20002</li>
            <li>
              <a href="mailto:Kahlid.clagett@icloud.com">
                Khalid.claggett@icloud.com
              </a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="logo" className="footer-logo" />
      </footer>
    </div>
  );
}

export default App;
