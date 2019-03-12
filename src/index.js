import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './style.scss';
import { content } from './content';

class App extends Component {
  state = {
    posts: content,
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="root">
        <Header />
        {posts.map(post => (
          <Post nome={post.nome} texto={post.texto} tempo={post.tempo} />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
