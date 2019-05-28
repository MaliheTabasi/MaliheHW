import React from 'react'
import ConvList from './ConvList'
import ConvListContainer from '../container/ConvListContainer'
import Chat from './Chat'

export default class Massenger extends React.Component {
  render () {
    return (
      <div className='whole'>
        <ConvListContainer />
        <Chat />
      </div>
    )
  }
}
