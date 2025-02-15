import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-menu">
      <div className="menu-logo">
        <img alt={props.imageAlt} src={props.imageSrc} className="menu-image" />
      </div>
      <div className="menu-menu-items">
        <div className="menu-bg-menu">
          <div className="menu-main-bg">
            <div className="menu-container1">
              <img
                alt={props.bgIconAlt}
                src={props.bgIconSrc}
                className="menu-bg-icon"
              />
              <span className="menu-bg-name1">
                {props.bgName5 ?? (
                  <Fragment>
                    <span className="menu-text23">Bank Guarantee</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="menu-container2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="menu-arrow1"
              >
                <path
                  d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="menu-list-bg">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className="menu-icon11"
            >
              <path
                d="M9.354 7.854a.5.5 0 0 0-.708-.708L7.234 8.558l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12.75a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5"
                fill="currentColor"
              ></path>
            </svg>
            <span className="menu-bg-name2">
              {props.bgName ?? (
                <Fragment>
                  <span className="menu-text12">List</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="menu-approval-bg">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className="menu-icon13"
            >
              <path
                d="M18 20.5h-5.732A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828l-.049-.04l-.036-.03a2 2 0 0 0-.219-.18a1 1 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v7.498a6.5 6.5 0 0 1 1.5-.422V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM13 17.5a6.5 6.5 0 0 1-.174 1.5h2.424A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75H9.004a6.5 6.5 0 0 1 2.496 1.846V13h3.75a.25.25 0 0 1 .25.25v1.25h-3.232c.244.47.433.972.558 1.5H15.5v1.25a.25.25 0 0 1-.25.25zm-1 0a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
                fill="currentColor"
              ></path>
            </svg>
            <span className="menu-bg-name3">
              {props.bgName1 ?? (
                <Fragment>
                  <span className="menu-bg-name7">
                    <span>Approval</span>
                    <br></br>
                    <span>Requests</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="menu-inventory-menu">
          <div className="menu-main-inventory">
            <div className="menu-container3">
              <img
                alt={props.inventoryIconAlt}
                src={props.inventoryIconSrc}
                className="menu-inventory-icon"
              />
              <span className="menu-inventory-name1">
                {props.inventoryName ?? (
                  <Fragment>
                    <span className="menu-inventory-name2">
                      <span>Inventory</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="menu-container4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="menu-arrow2"
              >
                <path
                  d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="menu-list-inventory">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className="menu-icon16"
            >
              <path
                d="M9.354 7.854a.5.5 0 0 0-.708-.708L7.234 8.558l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12.75a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5"
                fill="currentColor"
              ></path>
            </svg>
            <span className="menu-bg-name4">
              {props.bgName2 ?? (
                <Fragment>
                  <span className="menu-text17">List</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="menu-list-vendors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className="menu-icon18"
            >
              <path
                d="M9.354 7.854a.5.5 0 0 0-.708-.708L7.234 8.558l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12.75a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5"
                fill="currentColor"
              ></path>
            </svg>
            <span className="menu-bg-name5">
              {props.bgName3 ?? (
                <Fragment>
                  <span className="menu-text18">Vendors</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="menu-approval-inventory">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className="menu-icon20"
            >
              <path
                d="M18 20.5h-5.732A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828l-.049-.04l-.036-.03a2 2 0 0 0-.219-.18a1 1 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v7.498a6.5 6.5 0 0 1 1.5-.422V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM13 17.5a6.5 6.5 0 0 1-.174 1.5h2.424A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75H9.004a6.5 6.5 0 0 1 2.496 1.846V13h3.75a.25.25 0 0 1 .25.25v1.25h-3.232c.244.47.433.972.558 1.5H15.5v1.25a.25.25 0 0 1-.25.25zm-1 0a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
                fill="currentColor"
              ></path>
            </svg>
            <span className="menu-bg-name6">
              {props.bgName4 ?? (
                <Fragment>
                  <span className="menu-bg-name8">
                    <span>Approval</span>
                    <br></br>
                    <span>Requests</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="menu-container5">
        <svg width="56" height="56" viewBox="0 0 56 56" className="menu-icon22">
          <path
            d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906M28 14.5c4.477 0 8.039 3.938 8.039 8.672c0 5.039-3.54 8.883-8.04 8.836c-4.522-.047-8.038-3.797-8.038-8.836C19.914 18.437 23.5 14.5 28 14.5m14.25 27.375l.07.305c-3.61 3.843-8.953 6.047-14.32 6.047c-5.39 0-10.734-2.204-14.344-6.047l.07-.305c2.04-2.812 7.055-5.883 14.274-5.883c7.195 0 12.234 3.07 14.25 5.883"
            fill="currentColor"
          ></path>
        </svg>
        <span className="menu-text10">
          {props.text ?? (
            <Fragment>
              <span className="menu-text11">Sarthak</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  imageSrc: 'https://mpkhaitan.com/images/logo.png',
  imageAlt: 'image',
  text: undefined,
  bgName: undefined,
  bgName1: undefined,
  bgName2: undefined,
  bgName3: undefined,
  bgName4: undefined,
  bgIconSrc: '/bg-icon.svg',
  bgIconAlt: 'image',
  bgName5: undefined,
  inventoryIconSrc: '/inventory-icon.svg',
  inventoryIconAlt: 'image',
  inventoryName: undefined,
}

Menu.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  bgName: PropTypes.element,
  bgName1: PropTypes.element,
  bgName2: PropTypes.element,
  bgName3: PropTypes.element,
  bgName4: PropTypes.element,
  bgIconSrc: PropTypes.string,
  bgIconAlt: PropTypes.string,
  bgName5: PropTypes.element,
  inventoryIconSrc: PropTypes.string,
  inventoryIconAlt: PropTypes.string,
  inventoryName: PropTypes.element,
}

export default Menu
