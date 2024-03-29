import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilledStar = styled.span`
  color: blue;
`;

const EmptyStar = styled.span`
  color: rgb(200, 200, 200);
`;

function StarRating({ rating, setRating }) {
  const stars = [];

  for (let i = 1; i <= rating; i += 1) {
    stars.push(
      <FilledStar
        key={i}
        onClick={() => {
          setRating(i);
        }}
      >
        ★
      </FilledStar>
    );
  }

  for (let i = rating + 1; i <= 5; i += 1) {
    stars.push(
      <EmptyStar
        key={i}
        onClick={() => {
          setRating(i);
        }}
      >
        ★
      </EmptyStar>
    );
  }

  return <span>{stars}</span>;
}

StarRating.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func.isRequired
};

StarRating.defaultProps = {
  rating: 0
};

export default StarRating;
