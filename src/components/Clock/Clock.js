import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.props.sessionLength * 60
        }
    }

    resetTimer(time=this.props.sessionLength) {
        let timeSeconds = time * 60;
        this.setState({
            timeRemaining: timeSeconds
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.props.timerState === 'running' && this.state.timeRemaining > 1) {
            this.setState({
                timeRemaining: this.state.timeRemaining - 1 // decrement by 1 second
            });
        } else if (this.props.timerState === 'running' && this.state.timeRemaining === 1) {
            this.setState({
                timeRemaining: this.state.timeRemaining - 1 // decrement by 1 second
            });
        } 
        else if (this.props.timerState === 'running' && this.state.timeRemaining <= 0) {
            this.playBeep();
            setTimeout(1000);
            this.props.handleTimerEnd();
        }
    }

    playBeep() {
        const sound = document.getElementById("beep");
        sound.play();
    }

    render() {
        // render correct play/pause icon
        var start_stop_icon;
        if (this.props.timerState === 'paused') {
            start_stop_icon = <i className="fa fa-play-circle fa-2x"></i>
        } else {
            start_stop_icon = <i className="fa fa-pause-circle fa-2x"></i>
        }
        // format minutes and seconds and add padding (e.g. 1 becomes 01)
        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }
        var minutes = pad(Math.floor(this.state.timeRemaining / 60));
        var seconds = pad(Math.floor(this.state.timeRemaining % 60));
        return (
            <div id="clock-container" className="rounded">
                <h3 id="timer-label">{this.props.label}</h3>
                <h2 id="time-left">{minutes}:{seconds}</h2>
                <div id="clock-controls">
                    <button id="start_stop" className="btn btn-success clockBtn" onClick={this.props.handleStartStopClick}>
                        {start_stop_icon}
                    </button>
                    <button id="reset" className="btn btn-danger clockBtn" onClick={this.props.handleResetClick}>
                        <i className="fa fa-undo fa-2x"></i>
                    </button>
                </div>
                <audio 
                    id="beep" 
                    preload="auto" 
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                    className="clip"
                />
            </div>
        );
    }
}

export default Clock;