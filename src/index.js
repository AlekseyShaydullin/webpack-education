import * as $ from 'jquery';
import Post from '@models/Post';
import '@styles/styles.css';
// import json from '@assets/json.json';
// import xml from '@assets/data.xml';
import logo from '@assets/webpack-logo.png';
import csv from '@assets/data.csv';

const post = new Post('Post title', logo);

$('pre').html(post.toString());

// console.log('JSON: ', json);
// console.log('XML', xml);
// console.log('CSV', csv);