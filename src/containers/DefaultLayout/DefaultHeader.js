import React from 'react';
import { useArticle } from '@/context/app/ArticleContext';
import BannerImage from '@/assets/images/6.jpeg';

function DefaultHeader() {
  const { state } = useArticle();

  let display = {
    image: BannerImage,
    title: 'Welcome to Habari',
    subtitle: 'View latest news on web and mobile technologies with no hassle',
  };

  if (Object.keys(state.article || {}).length) {
    display['image'] = state.article.image;
    display['title'] = state.article.title;
    display['subtitle'] = state.article.summary;
  }

  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url('${display.image}')`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              {Object.keys(state.article || {}).length ? (
                <h2>{display.title}</h2>
              ) : (
                <h1>{display.title}</h1>
              )}
              <span className="subheading">{display.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
