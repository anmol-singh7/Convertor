import React from 'react';
import { combineReducers } from 'redux';
import headValues from './headValues';
export default combineReducers(
{
    values:headValues
}
)