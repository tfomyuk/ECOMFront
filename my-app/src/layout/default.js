import React from 'react'
import { Outlet } from 'react-router-dom'

function Default() {
  return (
    <>
      <header>
        <h1>Page Header</h1>
      </header>

      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Default


