import React from "react";

export default class Forcastday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { day } = this.props;
    if (!day) return null;
    return (
      <div className="forcastday-container">
        <div className="image">
          <img src={day.condition.icon} />
        </div>
        <div className = "text">Min: {day.mintemp_c}</div>
        <div className = "text">Max: {day.maxtemp_c}</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    );
  }
}