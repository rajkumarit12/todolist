import React from "react";
import TodoList from './TodoList'
import { getList, add } from '../api'

class TodoListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputText: ''
        }
        this.onChange = this.onChange.bind(this);
        this.addTodoHandler = this.addTodoHandler.bind(this);
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList() {
        getList().then(({ list = [] }) => {
            this.setState({ list })
        })
    }


    onChange(e) {
        const { value } = e.target;
        this.setState({
            inputText: value
        })
    }

    addTodoHandler(e) {
        const { inputText } = this.state;
        add(inputText).then(res =>
        this.fetchList());
    }


    render() {
        const { inputText, list } = this.state;
        return (
            <div>
                <input value={inputText} onChange={this.onChange} />
                <button onClick={this.addTodoHandler} >Add</button>
                <TodoList list={list} />
            </div>

        )
    }
}

export default TodoListContainer;