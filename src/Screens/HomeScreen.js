import React from 'react'
import ComingSoon from '../components/ComingSoon'
import Loader from '../components/Loader'

function HomeScreen() {
  return (
    <div>
      <ComingSoon />
        <div className="loader-container">
          <Loader />
        </div>{" "}
    </div>
  )
}

export default HomeScreen
