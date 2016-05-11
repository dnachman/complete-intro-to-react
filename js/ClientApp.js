var React = require('React');
var ReactDOM = require('ReactDOM');
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = function (props) {
    return (
        div(null,
            h1({ style: {color: props.color} }, props.title)
            )
    );
};

var MyTitleFact = React.createFactory(MyTitle);

var MyFirstComponent = (
    div(null,
        MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
        MyTitleFact({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
        MyTitleFact({title: 'Props are the best!', color: 'peru'})
    )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
