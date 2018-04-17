import React, { Component } from 'react'

class List extends Component {
    render() {
        const items = this.props.items
        return (
            <ul>
                { items.map(item => <li>{item}</li>) }
            </ul>
        )
    }
}

export default List