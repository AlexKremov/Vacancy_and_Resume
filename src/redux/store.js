import { createStore } from 'redux';
import vacancyReducer from './vacancyReducer';
import resumeReducer from './resumeReducer';
import { combineReducers } from 'redux';


const store = createStore(
  combineReducers({
    vacancy: vacancyReducer,
    resume: resumeReducer,
 
  })
);

export default store;