import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import { Head } from '@inertiajs/react';

const Home = ({auth}) => {
  return (
    <div className="home">
        <Head title="Dashboard" />
        <Sidebar/>
        <div className="homecontainer">
          <Navbar user={auth.user}/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
          </div>
          <div className="listContainer">
              <div className="listTitle">Latest Schtick</div>
              <List/>
          </div>
        </div>
    </div>
  )
}

export default Home