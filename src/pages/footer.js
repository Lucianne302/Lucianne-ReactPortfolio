import React from 'react';
import { Link } from 'react-router-dom';

// var Router = require('react-router');
// var Link = Router.Link;
// var Navigation = require('react-router').Navigation;


// var Footer = React.createClass({

//   mixins: [Navigation],

//   render: function () {
    const footer = (props) => {
    return (
    <footer>
        <hr />
      <div id="credits">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5">
              {/* <li>&copy; 2015</li> */}
              {/* <li><Link to="contact">Contact Me!</Link></li> */}
              <li>LinkedIn: <Link>https://www.linkedin.com/in/lucianne-vazquez-mba-76421679</Link></li>
              <li>GitHub: <Link>https://github.com/Lucianne302</Link></li>
            </div>
            {/* <div className="col-md-5" id="social-networks">
              <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-vimeo-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
              <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
      );
    }

export default footer;