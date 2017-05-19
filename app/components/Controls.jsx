var React = require('react');

var Controls = React.createClass({
    PropTypes: {
    countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button secondary>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button primary>Start</button>
            }
        };

    return(
        <div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow">Clear</button>
        </div>
        
    )   
    }
});

module.exports = Controls;