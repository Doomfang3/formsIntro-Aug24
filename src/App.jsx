import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import UserProfilePage from './pages/UserProfilePage'
import NewStudentPage from './pages/NewStudentPage'
import { useState } from 'react'
import studentsData from './assets/students.json'
import UpdateStudentPage from './pages/UpdateStudentPage'

function App() {
  const [students, setStudents] = useState(studentsData)

  const addNewStudent = newStudent => {
    setStudents([newStudent, ...students])
  }

  const updateStudent = updatedStudent => {
    setStudents(
      students.map(currentStudent => {
        if (currentStudent._id === updatedStudent._id) {
          return updatedStudent
        }
        return currentStudent
      })
    )
  }

  return (
    <div className='App relative z-20 pt-20'>
      <Navbar />

      <div className='pages'>
        <Routes>
          <Route path='/' element={<HomePage students={students} />} />
          <Route path='/students/new' element={<NewStudentPage addNewStudent={addNewStudent} />} />
          <Route path='/students/:studentId' element={<StudentDetailsPage students={students} />} />
          <Route
            path='/students/:studentId/update'
            element={<UpdateStudentPage students={students} updateStudent={updateStudent} />}
          />
          <Route path='/profile' element={<UserProfilePage />} />

          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
