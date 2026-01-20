import React, { useState } from "react";
import Navbar from "../Navbar";

const CreateRepo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState(true);

  const handleCreate = async (e) => {
    e.preventDefault();

    const owner = localStorage.getItem("userId");

    if (!owner) {
      alert("User not logged in");
      return;
    }

    if (!name.trim()) {
      alert("Repository name is required");
      return;
    }

    const payload = {
      owner,
      name,
      description,
      visibility,
      content: [],   // backend expects array
      issues: [],    // backend expects array
    };

    try {
      const res = await fetch("http://localhost:3002/repo/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      alert("Repository created successfully!");
      window.location.href = "/";
    } catch (err) {
      console.error("Create repo error:", err);
      alert("Failed to create repository");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Create a New Repository</h2>

        <form onSubmit={handleCreate}>
          <div style={{ marginBottom: "15px" }}>
            <label>Repository Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="my-awesome-repo"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description of the repository"
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="checkbox"
                checked={visibility}
                onChange={() => setVisibility(!visibility)}
              />{" "}
              Public Repository
            </label>
          </div>

          <button type="submit">Create Repository</button>
        </form>
      </div>
    </>
  );
};

export default CreateRepo;
