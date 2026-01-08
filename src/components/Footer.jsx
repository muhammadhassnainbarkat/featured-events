function Footer() {
  return (
    <footer id="contact" className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>About</h5>
            <p>
              This platform helps users discover local events and register easily.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: hr@dynamics360.net</p>
            <p>Phone: +92 339 411 1994</p>
            <p>Address: Gulberg Greens, Islamabad</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#events" className="text-light text-decoration-none">Events</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-3">
          <small>© {new Date().getFullYear()} Dynamics360. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
