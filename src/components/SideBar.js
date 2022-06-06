import React from 'react';
import Logo from '../img/Logo.png';

class SideBar extends React.Component {
  render() {
    return (
      <div className='ui left vertical menu'>
        <div className='ui container'>
          <div className='ui small image'>
            <img src={Logo} />
            <div className='ui cards'>
              <div className='card'>
                <div className='content'>
                  <i className='large user circle icon' />
                  <div className='meta'>Risk Administrator</div>
                  <div className='header'>Tajudeen Mustapha</div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large home icon'></i> Home
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large elementor icon'></i> Account
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large clone icon'></i> Beneficiary
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large credit card icon'></i> Payments
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large thumbs up icon'></i> Approvals
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large clone icon'></i> Reports
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large cog icon'></i> Settings
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large clone icon'></i> Audit Trail
                    </div>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <i className='large hand point left icon'></i> Log Out
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
