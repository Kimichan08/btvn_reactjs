import React from 'react';
import clsx from 'clsx';
import style from "../Category/Category.module.css";

class ItemCategory extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <li
                onClick={this.props.HandleClick}
                className={clsx({ [style.active]: this.props.data.status })}
            >
                {this.props.data.name}
            </li>
        );
    }
}

export default ItemCategory;