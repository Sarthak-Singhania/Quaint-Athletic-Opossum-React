import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Quaint Athletic Opossum</title>
        <meta property="og:title" content="Quaint Athletic Opossum" />
      </Helmet>
      <Menu
        text={
          <Fragment>
            <span className="home-text10">Sarthak</span>
          </Fragment>
        }
        bgName={
          <Fragment>
            <span className="home-text11">List</span>
          </Fragment>
        }
        bgName1={
          <Fragment>
            <span className="home-bg-name1">
              <span>Approval</span>
              <br></br>
              <span>Requests</span>
              <br></br>
            </span>
          </Fragment>
        }
        bgName2={
          <Fragment>
            <span className="home-text16">List</span>
          </Fragment>
        }
        bgName3={
          <Fragment>
            <span className="home-text17">Vendors</span>
          </Fragment>
        }
        bgName4={
          <Fragment>
            <span className="home-bg-name2">
              <span>Approval</span>
              <br></br>
              <span>Requests</span>
              <br></br>
            </span>
          </Fragment>
        }
        bgName5={
          <Fragment>
            <span className="home-text22">Bank Guarantee</span>
          </Fragment>
        }
        inventoryName={
          <Fragment>
            <span className="home-inventory-name">
              <span>Inventory</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Menu>
      <div className="home-content">
        <div className="home-container2">
          <svg width="48" height="48" viewBox="0 0 24 24">
            <path
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              fill="currentColor"
            ></path>
          </svg>
          <input type="text" placeholder="Search" className="home-textinput" />
        </div>
        <div className="home-container3"></div>
      </div>
    </div>
  )
}

export default Home
