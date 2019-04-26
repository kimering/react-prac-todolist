import React, {Component, Fragment} from 'react';
import Menubar from './menubar';
import Contents from './contents';

class main extends Component {
    render() {
        console.log(this.props.match.params.title)
        return (
            <Fragment>
                <Menubar />
                <Contents title={this.props.match.params.title}/>
            </Fragment>
        );
    }
}

export default main;