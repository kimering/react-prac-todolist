import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import * as todoActions from '../modules';

class menubar extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleNum: 0,
            title: '',
            items: [],
        }
    }


    componentWillMount() {
        // this.setState({
        //     title: this.props.todos
        // })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //
    // }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    componentWillUnmount() {
    }

    drawTitles = () =>  {
        return this.props.todos.map((each, index) => {
            return (
                <h2 key={index} onClick={this.chooseTitle} id={index}
                    className={this.props.focus === index ? 'focus-title' :'title'}
                >
                    <Link to={'/'+each.get('title')}>
                        {each.get('title')}
                    </Link>
                </h2>
            )
        })
    };

    chooseTitle = (e) => {
        // console.log(this.props.todos.getIn([0, 'focus']))
        this.props.changeFocus({'index': e.target.id})
    };

    handleInput = (e) => {


        console.log(e.target.value);
    };



    render() {
       // console.log(this.props.todos);
        return (
            <div className="sidebar">
                <div className='container'>
                    <h2>
                        Categories
                    </h2>
                    <div className="form-group form-inline has-warning">
                        {/*<span className="glyphicon glyphicon glyphicon-plus"/>*/}
                        {/*<input type="text" className="form-control" placeholder="new category" onChange={this.handleInput}/>*/}
                    </div>
                    {this.drawTitles()}

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.get('todos'),
    focus: state.get('focus')
});

const mapDispatchToProps = dispatch => ({
    createTitle : (payload) => {dispatch(todoActions.createTitle(payload))},
    changeFocus : (payload) => {dispatch(todoActions.changeFocus(payload))},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(menubar);