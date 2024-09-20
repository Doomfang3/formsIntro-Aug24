import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudentPage = ({ students, updateStudent }) => {
  const { studentId } = useParams()
  const currentStudent = students.find(student => student._id === studentId)
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({ ...currentStudent })

  const handleSubmit = event => {
    event.preventDefault()
    updateStudent({
      ...formValues,
    })
    navigate(`/students/${studentId}`)
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
      <h1>Update Student</h1>
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
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UpdateStudentPage
