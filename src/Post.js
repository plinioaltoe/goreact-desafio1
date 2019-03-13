import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    nome, tempo, imagem, texto,
  } = props;
  return (
    <div className="post">
      <PostHeader nome={nome} tempo={tempo} imagem={imagem} />
      <hr />
      <div>{texto}</div>
    </div>
  );
};

Post.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};

export default Post;
