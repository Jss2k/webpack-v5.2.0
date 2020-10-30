import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import '@/styles/styles.css'
import WebpackLogo from './assets/webpack-logo'

const post =  new Post('webpack title 1', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('Post to String: ', post.toString())

// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)
import('lodash').then( _ => {
  console.log('Lodash', _.random(0, 42, true))
})