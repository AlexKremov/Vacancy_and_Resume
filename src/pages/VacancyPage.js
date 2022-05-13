import Vacancy from '../components/Vacancy'
import Layout from '../layouts/main';
import React, { useState } from 'react';
import store from '../redux/store';


export const Vacancypage =() => {
  const [filterhValue, setFilterValue] = useState('')
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

        {store.getState().vacancy.list.map((list) => {
          
            return (
              <Vacancy
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