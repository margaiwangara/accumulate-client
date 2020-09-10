import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DefaultFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#twitter">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <FontAwesomeIcon icon={['fab', 'twitter']} inverse />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#facebook">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} inverse />
                    {/* <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i> */}
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#github">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <FontAwesomeIcon icon={['fab', 'github']} inverse />
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">
              Copyright &copy; Accumulate {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DefaultFooter;
