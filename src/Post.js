import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const { nome, tempo, texto } = props;
  return (
    <div className="post">
      <PostHeader nome={nome} tempo={tempo} />
      <div>{texto}</div>
    </div>
  );
};

Post.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Post;
