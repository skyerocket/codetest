import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('')
  const [students, setStudents] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();
    const emails = email.split(',').join('&')
    const res = await fetch(`http://localhost:8010/api/getcommonstudents?${emails}`)
    const result = await res.json()
    setStudents(result.students)
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>  
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="use , as seperator"
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <div>{students}</div>
      </main>
    </div>
  );
}