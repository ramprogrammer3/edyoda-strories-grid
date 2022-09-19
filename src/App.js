import React from 'react'
import Header from './components/Header'
import LatestPost from './components/LatestPost'
class App extends React.Component{

  render(){
    return(
      <>
        <Header />
        <LatestPost />
      </>
    )
  }
}

export default App