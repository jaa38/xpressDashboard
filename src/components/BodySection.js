import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class BodySection extends React.Component {
  render() {
    return (
      <div className='ui one column stackable grid'>
        <div className='thirteen wide column'>
          <a className='item'>
            <div className='ui fluid left icon input'>
              <input type='text' placeholder='Search posts'></input>
              <i className='search icon'></i>
            </div>
          </a>
        </div>
        <div className='two wide column'>
          <button className='ui left green basic button'>
            Tech Posts
            <i className='sync alternate icon'></i>
          </button>
        </div>
        <table class='ui single line celled padded table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Lilki</td>
              <td>September 14, 2013</td>
              <td>jhlilk22@yahoo.com</td>
            </tr>
            <tr>
              <td>Jamie Harington</td>
              <td>January 11, 2014</td>
              <td>jamieharingonton@yahoo.com</td>
            </tr>
            <tr>
              <td>Jill Lewis</td>
              <td>May 11, 2014</td>
              <td>jilsewris22@yahoo.com</td>
            </tr>
            <tr>
              <th colspan='5'>
                <div className='ui center aligned floated pagination menu'>
                  <a className='icon item'>
                    <i className='left chevron icon'></i>
                  </a>
                  <a className='item'>1</a>
                  <a className='item'>2</a>
                  <a className='item'>3</a>
                  <a className='item'>4</a>
                  <a className='icon item'>
                    <i className='right chevron icon'></i>
                  </a>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <div>
          <h4 className='ui left aligned header'>API Summary</h4>{' '}
        </div>
      </div>
    );
  }
}

export default BodySection;
