import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { nome, tempo } = props;
  return (
    <div className="postHeader">
      <div>{nome}</div>
      <div>{tempo}</div>
    </div>
  );
};

PostHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
};

export default PostHeader;
