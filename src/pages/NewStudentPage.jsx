/*  {
    "_id": "1",
    "firstName": "Christine",
    "lastName": "Clayton",
    "email": "christine.clay@example.com",
    "phone": "567-890-1234",
    "linkedinUrl": "https://linkedin.com/in/christineclaytonexample",
    "languages": ["English", "Dutch"],
    "program": "Web Dev",
    "background": "Computer Engineering",
    "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png",
    "cohort": "WD BER 2024-03",
    "projects": []
  } */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const NewStudentPage = ({ addNewStudent }) => {
  const navigate = useNavigate()

  /* const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isAccepted, setIsAccepted] = useState(false) */

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isAccepted: false,
    phone: '567-890-1234',
    linkedinUrl: 'https://linkedin.com/in/christineclaytonexample',
    languages: ['English', 'Dutch'],
    program: 'Web Dev',
    background: 'Computer Engineering',
    image:
      'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png',
    cohort: 'WD BER 2024-03',
    projects: [],
  })

  const handleSubmit = event => {
    event.preventDefault()
    const newId = uuidv4()
    // console.log({ firstName, lastName, email })
    addNewStudent({
      _id: newId,
      ...formValues,
    })
    navigate(`/students/${newId}`)
  }

  const handleChange = event => {
    console.log(event)
    const currentTarget = event.target.name
    let currentValue = event.target.value
    if (event.target.type === 'checkbox') {
      currentValue = event.target.checked
    }

    setFormValues({ ...formValues, [currentTarget]: currentValue })
  }

  return (
    <>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input required value={formValues.firstName} name='firstName' onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input required value={formValues.lastName} name='lastName' onChange={handleChange} />
        </label>
        <label>
          Email:
          <input
            required
            type='email'
            value={formValues.email}
            name='email'
            onChange={handleChange}
          />
        </label>
        <label>
          Accepts Terms
          <input
            type='checkbox'
            required
            checked={formValues.isAccepted}
            name='isAccepted'
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default NewStudentPage
