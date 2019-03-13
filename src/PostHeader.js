import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { nome, tempo, imagem } = props;
  const imgPath = `/images/${imagem}`;
  return (
    <div className="postHeader">
      <img src={imgPath} alt="Poker Face" />
      <div>
        <div className="postName">{nome}</div>
        <div className="postTempo">{tempo}</div>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};

export default PostHeader;
