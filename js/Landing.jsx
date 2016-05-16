const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input type='text' className='search' placeholder='Search' />
      <Link to='/search' className='browse-all'>or Browse All</Link>
    </div>
  </div>
);

module.exports = Landing;
