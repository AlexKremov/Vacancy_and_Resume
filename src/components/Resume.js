import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Resume =(props) => {
    return (
        <details className="ads-resume">
              <summary className="ads-resume-header">
                <div className="ads-resume-info">
                  <Avatar
                    src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteOK.com/assets/safetywing.png?1586507930"
                    style={{ margin: 30 }}
                  />
                  <div className="profession-info">
                    <p className="profession-name">{props.name}</p>
                    <p className="pleace">{props.pleace}</p>
                    <p className="salary">{props.salary}</p>
                  </div>
                  <p className="profession-short-description">
                    {props.short}
                  </p>
                </div>
                <button
                  className="button-aply"
                  onclick="location.href='https://mui.com/';"
                >
                  Aply
                </button>
              </summary>
              <div className="ads-resume-body">
                {props.body}
              </div>
            </details>
    )
}

export default Resume;