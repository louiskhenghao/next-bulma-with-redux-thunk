import React, { Component } from 'react';
import Clock from 'components/Clock';

export default class ClockContainer extends Component {
  componentDidMount() {
    this.props.dispatchStartClock();
  }

  onStartTick = () => {
    this.props.dispatchTickClock();
  };

  onStopTick = () => {
    this.props.dispatchStopClock();
  };

  render() {
    const { clock } = this.props;
    return (
      <div className="mb20">
        <Clock lastUpdate={clock.get('lastUpdate')} />
        <div className="notification">
          The Clock is now {clock.get('status')}
          {clock.get('status') === 'start' &&
            ' but is not running, you can run the clock by clicking "Start Tick" button'}
        </div>
        <button className="button mr5" onClick={this.onStartTick}>
          Start Tick
        </button>
        <button className="button" onClick={this.onStopTick}>
          Stop Tick
        </button>
      </div>
    );
  }
}
