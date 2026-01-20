import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Navbar from "../Navbar";

const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const fetchUserRepos = async () => {
      try {
        const res = await fetch(
          `http://localhost:3002/repo/user/${userId}`
        );
        const data = await res.json();
        setRepositories(
          Array.isArray(data.repositories) ? data.repositories : []
        );
      } catch {
        setRepositories([]);
      }
    };

    const fetchAllRepos = async () => {
      try {
        const res = await fetch("http://localhost:3002/repo/all");
        const data = await res.json();
        setSuggestedRepositories(Array.isArray(data) ? data : []);
      } catch {
        setSuggestedRepositories([]);
      }
    };

    fetchUserRepos();
    fetchAllRepos();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults(repositories);
    } else {
      setSearchResults(
        repositories.filter((repo) =>
          repo.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, repositories]);

  return (
    <>
      <Navbar />
      <section id="dashboard">
        <aside>
          <h3>Suggested Repositories</h3>
          {suggestedRepositories.map((repo) => (
            <div key={repo._id}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
            </div>
          ))}
        </aside>

        <main>
          <h2>Your Repositories</h2>

          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchResults.length === 0 && <p>No repositories found.</p>}

          {searchResults.map((repo) => (
            <div key={repo._id}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
            </div>
          ))}
        </main>

        <aside>
          <h3>Upcoming Events</h3>
          <ul>
            <li>Tech Conference - Dec 15</li>
            <li>Developer Meetup - Dec 25</li>
            <li>React Summit - Jan 5</li>
          </ul>
        </aside>
      </section>
    </>
  );
};

export default Dashboard;




