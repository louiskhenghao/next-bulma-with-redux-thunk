import React, { PureComponent } from 'react';
import Posts from 'containers/Posts/connector';
import Tabs from 'components/Tabs';
import styles from './styles';
import { tabs } from 'config';

export default class Home extends PureComponent {
  // ====================== RENDER
  render() {
    return (
      <div id="home" className="container full-height-min">
        <Tabs tabs={tabs} />
        <Posts />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
