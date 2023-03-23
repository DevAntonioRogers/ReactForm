import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enterNameTouched, setEnteredNameTouched] = useState(false)

  const enterNameIsValid = enteredName.trim !== ''
  const nameInputIsInvalid = !enterNameIsValid && enterNameTouched


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredNameTouched(true)

    if (!enterNameIsValid) {
      return;
    }

    setEnteredName('')
    setEnteredNameTouched(false)
  }



  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameInputBlurHandler} value={enteredName} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className='error-text'>Name is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
