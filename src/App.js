import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import glamorous from 'glamorous';
import { ToiletList } from './components'
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Wrapper>
          <ToiletList />
        </Wrapper>
      </Provider>
    );
  }
}

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center'
})