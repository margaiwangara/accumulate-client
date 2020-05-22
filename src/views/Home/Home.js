import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import loading from '@/utils/app';
import { fetchArticles } from '@/context/actions/article';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';

function Home() {
  const [limit, setLimit] = useState(10);
  const { dispatch, state } = useArticle();
  const { dispatch: errorDispatch } = useError();

  useEffect(() => {
    fetchArticles(dispatch, errorDispatch, limit);
  }, [limit, dispatch, errorDispatch]);

  return (
    <HomeContainer>
      <React.Suspense fallback={loading()}>
        <div className="row mt-5">
          {state.data && Object.keys(state.data).length > 0 ? (
            <>
              <React.Suspense fallback={loading()}>
                {state.data.map((d, i) => (
                  <div className="col-md-6 h-100" key={i}>
                    <div className="card bg-dark text-white shadow-sm">
                      <img src={d.image} alt={d.title} />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h4 className="card-header">
                          <Link to={`/${d.link}`} className="link">
                            {d.title}
                          </Link>
                        </h4>
                        <div className="media">
                          <img
                            src={d.authors[0].gravatar}
                            alt="author-gravatar"
                            height="50"
                            width="50"
                            className="rounded-circle"
                          />
                          <div className="media-body align-self-center">
                            <h6 className="my-0 ml-2 text-capitalize font-weight-bold">
                              {d.authors[0].name}
                            </h6>
                            <h6 className="text-muted mb-0 mt-1 ml-2 text-capitalize font-weight-bold">
                              {formatDistanceToNow(new Date(d.datePublished), {
                                addSuffix: true,
                              })}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Suspense>
              <div className="col-md-12 mt-2 mb-5">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setLimit(limit < state.count ? limit + 10 : state.count)
                      }
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Nothing to show here</p>
          )}
        </div>
      </React.Suspense>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .card {
    max-height: 300px;
    overflow: hidden;
  }
`;
export default Home;
