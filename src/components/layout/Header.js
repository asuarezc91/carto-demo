import React from "react";
import { connect } from "react-redux";
import HeaderToggle from "./header/HeaderToggle";
import Avatar from "./Avatar";
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <HeaderToggle className="toggle"/>
      <div className="as-toolbar__group">
        <div className="as-toolbar__item">
          <Avatar
            size="l"
            alt="Isthmus"
            icon="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LNBHPmcyIcNeWf3W50m%2Favatar.png?generation=1537815172519034&alt=media"
          />
          <h1 className="Tittle" align="center">Santa Monica Homes</h1>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

export default connect(mapStateToProps)(Header);

// <div className="as-toolbar__item as-body">
// <i className="as-icon as-icon-settings as-subheader as-m--0"></i>
// </div>

// <nav className="as-toolbar__actions">
// <ul>
//   <HeaderLink name="" link="/" />
//   <HeaderLink name="" link="/page" />
//   <HeaderLink name="" link="/help" />
// </ul>
// </nav>


// import HeaderLink from "./header/HeaderLink";