(this["webpackJsonpfcc-pomodoro-clock"]=this["webpackJsonpfcc-pomodoro-clock"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),c=(n(14),n(1)),l=n(2),o=n(5),h=n(4),m=n(3),d=(n(15),n(16),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={timeRemaining:60*a.props.sessionLength},a}return Object(l.a)(n,[{key:"resetTimer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.sessionLength,t=60*e;this.setState({timeRemaining:t})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){"running"===this.props.timerState&&this.state.timeRemaining>1||"running"===this.props.timerState&&1===this.state.timeRemaining?this.setState({timeRemaining:this.state.timeRemaining-1}):"running"===this.props.timerState&&this.state.timeRemaining<=0&&(this.playBeep(),setTimeout(1e3),this.props.handleTimerEnd())}},{key:"playBeep",value:function(){document.getElementById("beep").play()}},{key:"render",value:function(){var e;function t(e){return e<10?"0"+e.toString():e.toString()}e="paused"===this.props.timerState?s.a.createElement("i",{className:"fa fa-play-circle fa-2x"}):s.a.createElement("i",{className:"fa fa-pause-circle fa-2x"});var n=t(Math.floor(this.state.timeRemaining/60)),a=t(Math.floor(this.state.timeRemaining%60));return s.a.createElement("div",{id:"clock-container",className:"rounded"},s.a.createElement("h3",{id:"timer-label"},this.props.label),s.a.createElement("h2",{id:"time-left"},n,":",a),s.a.createElement("div",{id:"clock-controls"},s.a.createElement("button",{id:"start_stop",className:"btn btn-success clockBtn",onClick:this.props.handleStartStopClick},e),s.a.createElement("button",{id:"reset",className:"btn btn-danger clockBtn",onClick:this.props.handleResetClick},s.a.createElement("i",{className:"fa fa-undo fa-2x"}))),s.a.createElement("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",className:"clip"}))}}]),n}(s.a.Component)),u=(n(7),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{id:"session-container",className:"ctrl-outer"},s.a.createElement("h3",{id:"session-label"},"Session Length"),s.a.createElement("div",{id:"session-controls",className:"ctrl-inner"},s.a.createElement("button",{id:"session-decrement",className:"btn btn-secondary adjustBtn",onClick:this.props.handleClick},s.a.createElement("i",{className:"fa fa-chevron-down"})),s.a.createElement("h4",{id:"session-length"},this.props.sessionLength),s.a.createElement("button",{id:"session-increment",className:"btn btn-primary adjustBtn",onClick:this.props.handleClick},s.a.createElement("i",{className:"fa fa-chevron-up"}))))}}]),n}(s.a.Component)),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{id:"break-container",className:"ctrl-outer"},s.a.createElement("h3",{id:"break-label"},"Break Length"),s.a.createElement("div",{id:"break-controls",className:"ctrl-inner"},s.a.createElement("button",{id:"break-decrement",className:"btn btn-secondary adjustBtn",onClick:this.props.handleClick},s.a.createElement("i",{className:"fa fa-chevron-down"})),s.a.createElement("h4",{id:"break-length"},this.props.breakLength),s.a.createElement("button",{id:"break-increment",className:"btn btn-primary adjustBtn",onClick:this.props.handleClick},s.a.createElement("i",{className:"fa fa-chevron-up"}))))}}]),n}(s.a.Component),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={label:"Session",timerState:"paused",sessionLength:25,breakLength:5},a.handleStartStopClick=a.handleStartStopClick.bind(Object(o.a)(a)),a.handleResetClick=a.handleResetClick.bind(Object(o.a)(a)),a.handleUpDownClick=a.handleUpDownClick.bind(Object(o.a)(a)),a.handleTimerEnd=a.handleTimerEnd.bind(Object(o.a)(a)),a.clockElement=s.a.createRef(),a}return Object(l.a)(n,[{key:"handleStartStopClick",value:function(){"paused"===this.state.timerState?this.setState({timerState:"running"}):this.setState({timerState:"paused"})}},{key:"handleResetClick",value:function(){this.setState({label:"Session",timerState:"paused",sessionLength:25,breakLength:5},(function(){this.clockElement.current.resetTimer()}))}},{key:"handleTimerEnd",value:function(){return"Session"===this.state.label?(this.clockElement.current.resetTimer(this.state.breakLength),this.setState({label:"Break"})):(this.clockElement.current.resetTimer(this.state.sessionLength),this.setState({label:"Session"}))}},{key:"handleUpDownClick",value:function(e){if("paused"===this.state.timerState){var t=e.currentTarget.id;"break-increment"===t&&this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1},(function(){"Break"===this.state.label&&this.clockElement.current.resetTimer(this.state.breakLength)})),"break-decrement"===t&&this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1},(function(){"Break"===this.state.label&&this.clockElement.current.resetTimer(this.state.breakLength)})),"session-increment"===t&&this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1},(function(){"Session"===this.state.label&&this.clockElement.current.resetTimer(this.state.sessionLength)})),"session-decrement"===t&&this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1},(function(){"Session"===this.state.label&&this.clockElement.current.resetTimer(this.state.sessionLength)}))}}},{key:"render",value:function(){return s.a.createElement("div",{id:"container",className:"shadow-lg bg-white rounded"},s.a.createElement("h1",null,"Pomodoro Clock"),s.a.createElement("div",{id:"controls-container"},s.a.createElement(k,{breakLength:this.state.breakLength,handleClick:this.handleUpDownClick}),s.a.createElement(u,{sessionLength:this.state.sessionLength,handleClick:this.handleUpDownClick})),s.a.createElement(d,{ref:this.clockElement,label:this.state.label,handleTimerEnd:this.handleTimerEnd,timerState:this.state.timerState,sessionLength:this.state.sessionLength,breakLength:this.state.breakLength,handleStartStopClick:this.handleStartStopClick,handleResetClick:this.handleResetClick}))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e954ab04.chunk.js.map