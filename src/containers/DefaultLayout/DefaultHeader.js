import React from 'react';
import { useArticle } from '@/context/app/ArticleContext';
import BannerImage from '@/assets/images/6.jpeg';
function DefaultHeader() {
  const { state } = useArticle();
  const banner = state.data.length > 0 ? state.data[0].image : BannerImage;

  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url('${banner}')`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              {state.data.length > 0 ? (
                <h2>{state.data[0].title}</h2>
              ) : (
                <h1>Welcome to Accumulate</h1>
              )}
              <span className="subheading">
                {state.data.length > 0
                  ? state.data[0].summary
                  : 'View latest news on latest web technologies with no hassle'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
