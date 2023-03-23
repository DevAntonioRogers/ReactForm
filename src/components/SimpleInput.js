import { useRef, useState } from 'react'

const SimpleInput = (props) => {

  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enterNameIsValid, setEnterNameIsValid] = useState(false)


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)


  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    if (enteredName.trim() === '') {
      setEnterNameIsValid(false)
      return;
    }

    setEnterNameIsValid(true)
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
        {!enterNameIsValid && <p className='error-text'>Name is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
