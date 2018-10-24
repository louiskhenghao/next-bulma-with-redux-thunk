import React, { PureComponent } from 'react';

class Clock extends PureComponent {
  pad = (n) => (n < 10 ? `0${n}` : n);

  format = (t) => {
    const hours = t.getUTCHours();
    const minutes = t.getUTCMinutes();
    const seconds = t.getUTCSeconds();
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  };

  render() {
    const { lastUpdate } = this.props;
    return (
      <div className="mb20">
        {this.format(new Date(lastUpdate))}
        <style jsx>
          {`
            div {
              padding: 15px;
              display: inline-block;
              color: #82fa58;
              font: 50px menlo, monaco, monospace;
              background-color: #000;
            }
            .light {
              background-color: #999;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Clock;
