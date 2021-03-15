import {combineReducers} from 'redux';

import auth from './auth';
import posts from './posts';
import like from './like';
export const reducers=combineReducers({auth,posts,like});