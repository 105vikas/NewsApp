import React, { Component } from 'react'
import loading from './Loding.gif'

export default class Spiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
