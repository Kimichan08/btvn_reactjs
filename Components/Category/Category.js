import clsx from "clsx";
import React from "react";
import ItemCategory from "../ItemCategory/ItemCategory";

class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:[
                {id:1, name:'Menu 1', status: false},
                {id:2, name:'Menu 2', status: false},
                {id:3, name:'Menu 3', status: false},
                {id:4, name:'Menu 4', status: false},
            ]
        }
    }
    itemActive(key){
        let _state = this.state.category;
        _state.map((item)=>{
            item.status = false;
        })
        _state[key].status = !_state[key].status;
        this.setState({
            category:_state
        })
    }

    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.category.map((item,key)=>{
                            return(
                                <ItemCategory data={item} HandleClick={ (e) => this.itemActive(key, e)}/>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default Category;