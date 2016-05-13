const React = require('react');

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input type='text' className='search' placeholder='Search' />
      <a className='browse-all'>or Browse All</a>
    </div>
  </div>
);

module.exports = Landing;
