import React, { Component } from 'react';

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            time: null,
            split: [],
            isStoped: false,
            isRunning: false,
        }
    }

    getTimer = () => {

        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;

        if (this.state.isRunning || this.state.isStoped) {
            const now = new Date();
            const distance = now - this.state.time;

            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }
        return (
            <div>
                <div>
                    days : {days}
                </div>
                <div>
                    hours : {hours}
                </div>
                <div>
                    minutes : {minutes}
                </div>
                <div>
                    seconds : {seconds}
                </div>
            </div>
        )
    }

    onTimeToggle = () => {
        this.state.isRunning
        ? this.onStop()
        : this.onStart();
    }

    onStart = () => {
        const time = this.state.time
            ? this.state.time
            : new Date().getTime();

        this.interval = setInterval(() => {
            this.setState({
                isRunning: true,
                isStoped: false,
                time
            });
        }, 50);
    }

    onStop = () => {
        clearInterval(this.interval);
        this.setState({
            isRunning: false,
            isStoped: true,
            time: this.state.time
        });
    }

    onClear = () => {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.setState({
            time: null,
            isStoped: false,
            isRunning: false,
            split: []
        });
    }

    onSplit = () => {
        const time = this.getTime();

        this.setState({
            split: time
                    ? [...this.state.split, time]
                    : this.state.split
        });
    }

    getTime = () => {
        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;

        if (this.state.time) {
            const now = new Date();
            const distance = now - this.state.time;

            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return {
                days,
                hours,
                minutes,
                seconds
            }
        }
        return null;
    }

    render() {
        return (
            <div className="Home">
                --- Home ---
                <div>
                    <button
                        onClick={this.onTimeToggle}
                    > { this.state.isRunning ? 'Stop' : 'Start' } </button>
                    <button
                        onClick={this.onSplit}
                    > Split </button>
                    <button
                        onClick={this.onClear}
                    > Clear </button>
                </div>
                <div>
                    {this.getTimer()}
                </div>
                <div>
                    {
                        this.state.split.map((item, i) => {
                            return (
                              <div key={i}>
                                  days : {item.days} ,
                                  hours : {item.hours} ,
                                  minutes : {item.minutes} ,
                                  seconds : {item.seconds}
                              </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;