import * as $ from 'jquery';
import React from 'react';
import { render } from 'react-dom'
import Post from '@models/Post';
import '@styles/styles.css';
import '@styles/less.less';
import '@styles/sass.scss';
import './babel'
// import json from '@assets/json.json';
// import xml from '@assets/data.xml';
// import csv from '@assets/data.csv';
import logo from '@assets/webpack-logo.png';

const post = new Post('Post title', logo);
// $('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack обучение</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <hr />
    <div className="card">
      <h2>Sass</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))

// console.log('JSON: ', json);
// console.log('XML', xml);
// console.log('CSV', csv);