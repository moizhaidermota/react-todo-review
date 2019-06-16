import React from 'react';

// const AddListEntry = () => {
//     return(
        
//     )

// };

class AddListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            text : ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    handleInput(e) {
        this.setState({
            text : e.target.value
        });
    }

    onSubmitChange(e) {
        e.preventDefault();
        this.props.addItem(this.state.text)

    }

    render() {
        return(
        <div>
            <form className="verticle" onSubmit={this.onSubmitChange}>
                <label>What to do???</label>
                <input type="text" onChange={this.handleInput}/>
                <button>OKAAAYYY</button>
            </form>
        </div>
        )
    }
}



export default AddListEntry;