import {createAction, handleActions} from 'redux-actions';
import {fromJS} from "immutable";

const CREATE_TODO = 'todo/CREATE_TODO'
const FINISH_TODO = 'todo/FINISH_TODO'
const DELETE_TODO = 'todo/DELETE_TODO'
const CREATE_TITLE = 'todo/CREATE_TITLE'
const DELETE_TITLE = 'todo/DELETE_TITLE'
const CHANGE_FOCUS = 'todo/CHANGE_FOCUS'

export const createTodo = createAction(CREATE_TODO);
export const finishTodo = createAction(FINISH_TODO);
export const deleteTodo = createAction(DELETE_TODO);


export const createTitle = createAction(CREATE_TITLE);
export const deleteTitle = createAction(DELETE_TITLE);

export const changeFocus = createAction(CHANGE_FOCUS);


const initialState = fromJS({
    focus: 0,
    todos: [
        {
            title: "today",
            focus: true,
            items: [
                {
                    name: "텀블러 사기",
                    important: false,
                    finished: false,
                },
                {
                    name: "에어팟 충전하기",
                    important: true,
                    finished: false,
                },
                {
                    name: "지갑 정리하기",
                    important: false,
                    finished: true,
                },
                {
                    name: "저녁 장보기",
                    important: true,
                    finished: true,
                }
            ]
        },
        {
            title: "tomorrow",
            focus: false,
            items: [
                {
                    name: "손목쿠션 빨기",
                    important: false,
                    finished: false,
                },
                {
                    name: "닭가슴살 사기",
                    important: true,
                    finished: true,
                },
                {
                    name: "에어팟 충전하기",
                    important: true,
                    finished: true,
                },
            ]
        },
        {
            title: "week",
            focus: false,
            items: [
                {
                    name: "가습기 청소하기",
                    important: false,
                    finished: false,
                },
                {
                    name: "액정필름 바꾸기",
                    important: false,
                    finished: true,
                },
            ]
        },
        {
            title: "month",
            focus: false,
            items: [
                {
                    name: "간식상자 채우기",
                    important: false,
                    finished: false,
                },
                {
                    name: "마우스 배터리 교체",
                    important: false,
                    finished: true,
                },
            ]
        },

    ],
})

export default handleActions({
    [CREATE_TODO]: (state, action) => {},
    [FINISH_TODO]: (state, action) => {
        const focus = state.get('focus')*1
        return state.setIn(['todos', focus, 'items', action.payload.index, 'finished'], !state.getIn(['todos', focus, 'items', action.payload.index, 'finished']))
    },
    [DELETE_TODO]: (state, action) => {

    },
    [CREATE_TITLE]: (state, action) => {
        console.log(action)
        console.log('title create')
    },
    [DELETE_TITLE]: (state, action) => {

    },
    [CHANGE_FOCUS]: (state, action) => {
        return state.set('focus', action.payload.index*1)
    },

}, initialState)