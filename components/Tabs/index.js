import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Tabs extends PureComponent {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
      })
    ).isRequired,
    onSelected: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      tabsIndex: 0,
    };
  }

  onSelectTabs = (index) => {
    return () => {
      const { onSelected } = this.props;
      this.setState({ tabsIndex: index });
      if (!!onSelected) {
        onSelected(index);
      }
    };
  };

  render() {
    const { tabsIndex } = this.state;
    const { tabs } = this.props;
    return (
      <div className="tabs-wrapper">
        <div className="tabs is-boxed is-medium">
          <ul>
            {tabs.map((tab, index) => {
              return (
                <li
                  key={index}
                  className={classnames({ 'is-active': index === tabsIndex })}
                  onClick={this.onSelectTabs(index)}
                >
                  <a>{tab.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tabs-content">
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className={classnames({ hide: index !== tabsIndex })}
              >
                {tab.content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
