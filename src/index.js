import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './style.scss';
import { content } from './content';

class App extends Component {
  state = {
    posts: content,
    newPost: null,
  }

  handleClick = (e) => {
    const { posts, newPost } = this.state;
    posts.push(newPost);
    this.setState({ posts });
    e.preventDefault();
  }

  handleChange = (e) => {
    const newPost = {
      texto: e.target.value,
      tempo: 'há 2 minutos',
      nome: 'Zé doido',
      imagem: 'helton.png',
    };
    this.setState({ newPost });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="root">
        <Header />
        {posts.map((post, index) => (
          <Post
            nome={post.nome}
            texto={post.texto}
            tempo={post.tempo}
            imagem={post.imagem}
            key={String(index)}
          />
        ))}
        <form onSubmit={this.handleClick}>
          <div>Novo Post: </div>
          <input type="text" onChange={this.handleChange} />

          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
