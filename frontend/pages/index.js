import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('')
  const [students, setStudents] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();
    const emails = email.split(',').join('&')
    const res = await fetch(`http://localhost:8010/api/getcommonstudents?${emails}`)
    const result = await res.json()
    console.log(result)
    setStudents(result.students)
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>  
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="use , as seperator"
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <table id="customers">
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>CREATEDAT</th>
            <th>UPDATEDAT</th>
          </tr>
          {students.map(student => (
            <tr>
              <td>{student.studentId}</td>
              <td>{student.email}</td>
              <td>{student.createdAt}</td>
              <td>{student.updatedAt}</td>
            </tr>
          ))}
        </table>
      </main>
    </div>
  );
}