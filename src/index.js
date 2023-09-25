import Post from '@models/Post';
import '@styles/styles.css';
// import json from '@assets/json.json';
// import xml from '@assets/data.xml';
import logo from '@assets/webpack-logo.png';
import csv from '@assets/data.csv';

const post = new Post('Post title', logo);

console.log('Post to string', post.toString());
// console.log('JSON: ', json);
// console.log('XML', xml);
console.log('CSV', csv);