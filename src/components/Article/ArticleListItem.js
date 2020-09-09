import React from 'react';
import styled from 'styled-components';
import { pixelsToRem, fontSize } from '@/utils/styles';
import Bookmark from '@/assets/icons/bookmark.svg';
import { formatDistanceToNow } from 'date-fns';

function ArticleListItem({ title, description, date, author }) {
  return (
    <>
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{description}</h3>
        </a>
        <p className="post-meta">
          Posted{' '}
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
          })}{' '}
          by
          <a href="#start-bootstrap"> {author.name} </a>
        </p>
      </div>
      <hr />
    </>
  );
}

export default ArticleListItem;
