import React from 'react'
import SearchName from './SearchName'
import SearchNavbar from './SearchNavbar'
import ListStudent from './ListStudent'

function HomePage() {
  return (
    <div className='row'>
        <h1 style={{textAlign: 'center'}}>Student management</h1>
        <div className='col-md-12'>
                <SearchName/>
        </div>
        <div className='col-md-3'>
            <SearchNavbar/>
        </div>
        <div className='col-md-9'>
            <ListStudent/>
        </div>
    </div>
  )
}

export default HomePage