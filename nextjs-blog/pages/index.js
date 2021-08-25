import Head from 'next/head'

export default function Home() {
    const registerUser = async event => {
      event.preventDefault()
      const emails = event.target.name.value.split(',').join('&')
  
      const res = await fetch(`http://localhost:8010/api/getcommonstudents?${emails}`)
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Emails</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Search Common Students</button>
      </form>
    )
}
