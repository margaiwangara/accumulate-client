import React from 'react';

function ErrorHandler({ error }) {
  return (
    <>
      {Object.keys(error).length > 0 ? (
        <div className="alert alert-danger">
          {Array.isArray(error.message) ? (
            <ul className="list-unstyled p-0 m-0">
              {error.message.map((e, i) => (
                <li key={i} className="small">
                  {e}
                </li>
              ))}
            </ul>
          ) : (
            error.message
          )}
        </div>
      ) : null}
    </>
  );
}

export default ErrorHandler;
