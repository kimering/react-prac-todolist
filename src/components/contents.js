import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as todoActions from '../modules';

class contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0,
            input: {
                important: false,
                text: "",
            }
        }
    }

    componentWillMount() {
        let index
        this.props.todos.map((each, i) => {
            if(each.get('title')===this.props.title) index = i
        })
        this.props.changeFocus({'index': index})
        this.setState({
            focus: index
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps !== this.props || nextState !== this.state) return true;
        else return false;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let index
        this.props.todos.map((each, i) => {
            if(each.get('title')===nextProps.title) index = i
        })
        this.props.changeFocus({'index': index})
        this.setState({
            focus: index
        })
    }

    componentWillUnmount() {

    }

    handleAdd = (e) => {
        console.log('handleAdd')

    }


    handleInputImportant = (e) => {
        console.log('spark')
        this.setState({
            ...this.state,
            input: {
                ...this.state.input,
                important: !this.state.input.important,
            }
        })
    }

    handleInputText = (e) => {
        console.log(e.target.value)
    }

    handleClickTodo = (e) => {
        this.props.finishTodo({'index': e.target.parentElement.id})
    }

    drawTodos = (index) => {
        return this.props.todos.getIn([index, 'items']).map((each, i) => {
            return (
                <div key={i} onClick={this.handleClickTodo} id={i}>
                    <h3 className={each.get('finished') ? 'finished-todo' : ''}>
                        <span
                            className={each.get('important') ? 'hide-emoji' : ''}
                            role="img" aria-label='important'
                        >
                            &#x2728;
                        </span>
                        {each.get('finished')
                           ? <span role="img" aria-label='confound'>&#x1F636;</span>
                           : <span role="img" aria-label='wink'>&#x1F609;</span>
                        }
                        {each.get('name')}
                    </h3>
                </div>
            )
        })
    }

    render() {
         console.log(this.props.todos.getIn([this.props.focus, 'title']))
        // console.log(this.props.todos.get(0))

        return (
            <div className="contents">
                <h1 className="contents-title">
                    {this.props.todos.getIn([this.props.focus, 'title'])}
                </h1>

                <div className=" form-group form-inline">
                    {/*{this.state.input.important*/}
                    {/*    ? <span className="emoji" role="img" aria-label='important' onClick={this.handleInputImportant}>*/}
                    {/*        &#x2728;*/}
                    {/*    </span>*/}
                    {/*    : <span className="emoji" role="img" aria-label='blank' onClick={this.handleInputImportant}>*/}
                    {/*        &#x2B1C;*/}
                    {/*    </span>*/}
                    {/*}*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    onChange={this.handleInputText}*/}
                    {/*    onKeyPress={this.handleInputEnter}*/}
                    {/*    className="form-width form-control "*/}
                    {/*/>*/}
                    {/*<button className="btn btn-default btn-margin" onClick={this.handleAdd}>Add</button>*/}
                </div>

                {this.drawTodos(this.state.focus)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    focus: state.get('focus'),
    todos: state.get('todos'),
})

const mapDispatchToProps = dispatch => ({
    finishTodo : (payload) => {dispatch(todoActions.finishTodo(payload))},
    changeFocus : (payload) => {dispatch(todoActions.changeFocus(payload))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(contents);