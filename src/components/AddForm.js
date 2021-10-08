import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, errorMessage } from './../actions';


const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });
    const [ error, setErrorMessage ] = useState("");

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === '' || state.position === '' || state.nickname === '') {
            setErrorMessage(error)
        } else {
            setState(props)
        }
    } 
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label data-testid="errorAlert" htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={props.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label data-testid="errorAlert" htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={props.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label data-testid="errorAlert" htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={props.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label data-testid="errorAlert" htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={props.description} name="description" id="description" />
            </div>
            {
                error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
            }
            <button onClick={handleSubmit}>Submit Smurf</button>
        </form>
    </section>);
    }
    const mapStateToProps = state => {
        return {
            smurf: state.smurf,
            isLoading: state.isLoading,
            error: state.error
        };
    };

export default connect(mapStateToProps, { addSmurf, errorMessage })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.