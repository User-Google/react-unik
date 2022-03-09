import React, { Component } from "react";

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

const daysOfWeek = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
]

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      day: new Date().getDate(),
      dayOfWeek: new Date().getDay(),
      month: new Date().getMonth(),

    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      day: new Date().getDate(),
      dayOfWeek: new Date().getDay(),
      month: new Date().getMonth(),
    });
  }
  render() {
    return <a href = 'https://time-master.ru/organizer/' target={'_blank'}>
      <p className="App-clock">{this.state.time}</p>
      <h2>{this.state.day}/{months[this.state.month]}</h2>
      <h6>День недели: {daysOfWeek[this.state.dayOfWeek]}</h6>
    </a>;
  }
}

export default Clock;