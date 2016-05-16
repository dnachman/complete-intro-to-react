const React = require('react');
const ShowCard = require('./ShowCard');
const data = require('../public/data');

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows
        .map((show, index) => (
          <ShowCard {...show} />
      ))}
    </div>
  </div>
);

module.exports = Search;
