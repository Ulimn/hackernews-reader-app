import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <li>{this.props.item.title}</li>
        )
    }
}
