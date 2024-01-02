import React from 'react'
import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import { Head } from '@inertiajs/react'


const List = ({listUsers, auth}) => {
  return (
    <div className='list'>
      <Head title='List'/>
      <Sidebar/>
      <div className="listContainer">
        <Navbar user={auth.user}/>
        <Datatable list={listUsers}/>
      </div>
    </div>
  )
}

export default List