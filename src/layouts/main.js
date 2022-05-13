import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useNavigate } from 'react-router';



export default  function Layout(props) {
    let navigate = useNavigate();
const [searchValue, setSearchValue] = useState('')
    return (
        <div>
      <header className="main-header">
        <div className="header-content ">
          <nav className="main-navigation">
            <Avatar>Job</Avatar>
            <a className="spoiler" href="#/">
              sssssssss
            </a>
            <a className="spoiler" href="#/">
              ssssssssffffssssssssssssssssssss
            </a>
            <a className="spoiler" href="#/">
              sssssssss
            </a>
            <a className="spoiler" href="#/">
              sssssssss
            </a>
          </nav>
          <div className="logo">
            <img src="/job.png" className="logo-img" alt="Logo" />
          </div>
          <div className="vacancy-resume">
            <div className="vacancy-list">
              <a className="vacancy-src" href="http://localhost:3000/vacancy">
                vacancy
              </a>
            </div>
            <div className="resume-list">
              <a className="resume-src" href="http://localhost:3000/resume">
                resume
              </a>
            </div>
          </div>
        </div>
        <div className="tagline">
          <p> Work anywhere. Work with anyone</p>
        </div>
        <div className="search">
          <input type="text" onChange={(e) => setSearchValue(e.target.value)} onKeyDown = {(e) => {
              if (e.key === 'Enter') {
                navigate('/search?query=' + searchValue)
          }
              
              }
          }/>
        </div>
        <div className="advertiser">
          <a className="advertiser-banner" href="#/" target="_blank">
            <div className="advertising">
              <Avatar
                src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteOK.com/assets/safetywing.png?1586507930"
                style={{ margin: 30 }}
              />
              <p className="advertiser-paragraf">
                Remote Health by SafetyWing
                <p className="advertiser-text">
                  Global Health incurance for hkgh ghkg khg
                </p>
              </p>
            </div>
            <button className="addition">Save 15%</button>
          </a>
        </div>
      </header>
      <body>
        <div className="main-body">
          {/* <div className="search-filter">
            <input className="profession" list='profession-list' placeholder='Add filter' />
            <datalist id='profession-list' className='sa'>
              <option value='a'/>
              <option value='b'/>
              <option value='c'/>
            </datalist>
          </div> */}
          
          <div className="ads-list">
            
           {props.children}

          </div>
        </div>
      </body>
    </div>
    )
}