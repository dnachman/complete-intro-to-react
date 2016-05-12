var React = require('react');

var MyTitle = function (props) {
    return (
        div(null,
            h1({ style: {color: props.color} }, props.title)
            )
    );
};

module.exports = MyTitle;