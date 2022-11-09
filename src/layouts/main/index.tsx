import React, { FC } from "react";
import { Outlet, Link } from 'react-router-dom';

// ui library antd
import { Button } from "antd";

// ----------------------------------------------------------------------
const Main:FC = () => (
    <>
      <header>
        <Link to="/">
          <Button>首页</Button>
        </Link>
        <Link to="/swap">
          <Button>swap</Button>
        </Link>
      </header> 
      <main><Outlet /></main>
    </>
  )

export default Main;