import React from 'react';
import styled from 'styled-components';
import { pixelsToRem, fontSize } from '@/utils/styles';
import Bookmark from '@/assets/icons/bookmark.svg';

function ArticleListItem({ scale }) {
  return (
    <ArticleCard className={scale}>
      <div className="overlay">
        <div className="overlay-header">
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            laboriosam.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            maxime aliquam placeat molestias, beatae labore.
          </p>
        </div>
        <div className="overlay-footer">
          <div className="profile">
            <figure>
              <img src="https://source.unsplash.com/random" alt="avatar" />
            </figure>
            <div className="content">
              <h4>John Doe</h4>
              <h6>Aug 19</h6>
            </div>
          </div>
          <figure className="bookmarker">
            <img src={Bookmark} alt="bookmark" />
          </figure>
        </div>
      </div>
    </ArticleCard>
  );
}

const ArticleCard = styled.article`
  width: 100%;
  position: relative;
  background-image: url('https://source.unsplash.com/random');
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 ${pixelsToRem(3)} ${pixelsToRem(6)} rgba(25, 25, 24, 0.11);
  overflow: hidden;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(25, 25, 24, 0.4);
    color: var(--whiteColor);
    padding: ${pixelsToRem(15)};
    display: grid;
    grid-template-columns: auto;
    letter-spacing: 0.5px;
    align-content: end;
    gap: ${pixelsToRem(10)};
  }

  .overlay-header {
    display: grid;
    grid-template-colums: auto;
    gap: ${pixelsToRem(5)};
    h4 {
      ${fontSize(15)}
      font-weight: 600;
    }

    p {
      ${fontSize(11)}
      font-size: 600;
    }
  }

  .overlay-footer {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: ${pixelsToRem(5)};
    align-items: center;
  }

  .bookmarker {
    height: ${pixelsToRem(20)};
    width: ${pixelsToRem(20)};
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .profile {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: ${pixelsToRem(10)};

    figure {
      margin: 0;
      width: ${pixelsToRem(50)};
      height: ${pixelsToRem(50)};
      overflow: hidden;
      border-radius: 50%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .content {
      display: grid;
      grid-template-columns: auto;

      h4 {
        ${fontSize(15)}
        font-weight: 600;
      }

      h6 {
        ${fontSize(11)}
        font-weight: 600;
        letter-spacing: 0.5px;
        color: var(--lightGreyColor);
      }
    }
  }
`;
export default ArticleListItem;
