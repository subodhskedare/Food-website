import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    render(){
        const {name} = this.props
        const {count} = this.state

        
        return (
            <div>
            <h1>User Information</h1>
            <h2>Name : {name}</h2>
            <h2>Count : {count}</h2>
            <button onClick= {() =>{
                this.setState ({
                    count : this.state.count + 1
                })
            }}>Count++</button>
            <h2>Profile : Full Stack Class based</h2>
            </div>
        )
    }
}

export default UserClass;