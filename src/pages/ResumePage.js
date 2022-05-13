import Resume from '../components/Resume'

import Layout from '../layouts/main';
import React from 'react';
import store from '../redux/store';



export const Resumepage =() => {
    return (
      <Layout>
        <div className="search-filter">
            <input className="profession" list='profession-list' placeholder='Add filter' />
            <datalist id='profession-list' className='sa'>
              <option value='a'/>
              <option value='b'/>
              <option value='c'/>
            </datalist>
          </div>
        {store.getState().resume.list.map((list) => {
          
            return (
              <Resume
                name={list.profession}
                salary={list.salary}
                pleace={list.pleace}
                short={list.shortDescription}
                body={list.body}
              />
            );
          
        })}

      </Layout>
    );
}