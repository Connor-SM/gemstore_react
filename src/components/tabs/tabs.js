import React, { Component } from 'react';
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import Description from "./description/description.js";
import './tabs.css';
import Specs from './specs/specs.js';
import Reviews from './reviews/reviews.js';

export default class PanelTabs extends Component {
  handleClick = e => e.preventDefault();

  render() {
    return (
      <Tabs
        defaultIndex={0}
        selectedTabClassName="active"
      >
        <TabList>
          <ul className="nav nav-tabs">
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Description</a>
            </Tab>
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Specs</a>
            </Tab>
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Reviews</a>
            </Tab>
          </ul>
        </TabList>
        <TabPanel><Description product={this.props.product} /></TabPanel>
        <TabPanel><Specs /></TabPanel>
        <TabPanel><Reviews product={this.props.product} /></TabPanel>
      </Tabs>
    )
  }
}
