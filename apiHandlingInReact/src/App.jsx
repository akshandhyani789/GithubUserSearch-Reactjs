import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './Componants/SearchBar'
import UserCard from './Componants/UserCard'

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");



 useEffect(() => {
  const cleanQuery = query.trim();
  if (cleanQuery.length <2) {
    setUser(null);
    setError(null);
    return;
  }

  const headers = import.meta.env.VITE_GITHUB_TOKEN
  ? { Accept: "application/vnd.github+json",
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, }
  : {};

const controller = new AbortController();

  const timer = setTimeout(() => {
    
    setLoading(true);
    
    fetch(`https://api.github.com/users/${cleanQuery}`, {
    signal: controller.signal,
  headers,
})
    .then((res) => {
      if (res.status === 403) {
    throw new Error("API limit reached. Try later.");
  }
      if (!res.ok){
         throw new Error("User not found");
      }
      return res.json();
    })
    .then((data) => {
      setUser(data);
      setError(null);
    })
    .catch((err) => {
      if (err.name !== "AbortError") {
    setError(err.message);
    setUser(null);
  }
    })
    .finally(() => {
      setLoading(false);
    });
  }, 600);


  return () => {
    clearTimeout(timer);
    controller.abort();
  };
}, [query]);



  return (
    <>
  <div className="flex flex-col items-center gap-4 mt-10 w-full">
    <i className="fa-brands fa-github text-6xl leading-none"></i>

    <h2 className="text-2xl font-bold py-4">
      GitHub User Search
    </h2>

    <p>Search for GitHub users and view their profiles</p>

    <SearchBar query={query} setQuery={setQuery} />
    <UserCard user={user} loading={loading} error={error} />
  </div>
</>

  )
}

export default App
