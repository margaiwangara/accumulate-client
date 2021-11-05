import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { useArticle } from '@/context/app/ArticleContext';
import { loadArticle } from '@/context/actions/article';

function ArticleListItem({ title, description, date, author, link }) {
  const { dispatch, state } = useArticle();

  const fetchArticle = (e) => {
    const article = state.data.filter((value, index) => value.link === link);

    dispatch(loadArticle(...article));
  };

  return (
    <>
      <div className="post-preview">
        <Link to={`/${link}`} onClick={fetchArticle}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{description}</h3>
        </Link>
        <p className="post-meta">
          Posted{' '}
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
          })}{' '}
          {/* <a href="#start-bootstrap"> {author.name} </a> */}
        </p>
      </div>
      <hr />
    </>
  );
}

export default ArticleListItem;
