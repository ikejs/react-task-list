import React, { Component } from 'react';

class Task extends Component {

    renderName(name, completed) {
        return completed ? <td><del>{name}</del></td> : <td>{name}</td>
    }

    renderClassNames(completed) {
        return completed ? 'bg-four text-dark text-muted' : 'bg-two font-weight-bold'
    }

    render() {
        const { task, index } = this.props
        const { name, completed } = task

        
        return <tr 
            onClick={() => {
                this.props.toggleCompleted(index)
            }}
            className={this.renderClassNames(completed)}>
            {this.renderName(name, completed)}
            <td
                className="float-right col-md-2"
                onClick={() => {
                    this.props.delete(index)
                }}
            >
                <span className="fas fa-times offset-md-10" />
            </td>
        </tr>
    }
}

export default Task;
