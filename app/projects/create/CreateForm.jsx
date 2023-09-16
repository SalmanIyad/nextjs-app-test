"use client";

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function CreateForm() {
  const [project, setProject] = useState({
    id: 0,
    title: "",
    short_description: "",
    long_description: "",
    priority: "low",
    user_name: "",
    user_email: "",
    price: 0,
    type: "Web",
    date_created: "2023-09-14",
    deadline_date: "2023-09-14",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const newProject = {
      title: project.title,
      short_description: project.short_description,
      long_description: project.long_description,
      priority: project.priority,
      user_name: project.user_name,
      user_email: project.user_email,
      price: project.price,
      type: project.type,
      date_created: new Date().toISOString().split('T')[0],
      deadline_date: project.deadline_date,
    };
  
    try {
      const res = await fetch('http://nextjs-app-test-json-server.vercel.app/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
  
      if (res.status === 201) {
        router.refresh();
        router.push('/projects');
      } else {
        console.error('Failed to create project');
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      {/* title */}
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          name="title"
          onChange={handleChange}
          value={project.title}
        />
      </label>
      {/* short_description */}
      <label>
        <span>Short Description:</span>
        <input
          required
          type="text"
          name="short_description"
          onChange={handleChange}
          value={project.short_description}
        />
      </label>
      {/* long_description */}
      <label>
        <span>Long Description:</span>
        <textarea
          required
          name="long_description"
          onChange={handleChange}
          value={project.long_description}
        />
      </label>
      {/* priority */}
      <label>
        <span>Priority:</span>
        <select
          name="priority"
          onChange={handleChange}
          value={project.priority}
        >
          <option value="low" selected>Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      {/* user_name */}
      <label>
        <span>User Name:</span>
        <input
          required
          type="text"
          name="user_name"
          onChange={handleChange}
          value={project.user_name}
        />
      </label>
      {/* user_email */}
      <label>
        <span>User Email:</span>
        <input
          required
          type="email"
          name="user_email"
          onChange={handleChange}
          value={project.user_email}
        />
      </label>
      {/* price */}
      <label>
        <span>Price: $</span>
        <input
          required
          type="number"
          name="price"
          onChange={handleChange}
          value={project.price}
        />
      </label>
      {/* type */}
      <label>
        <span>Type:</span>
        <select
          name="type"
          onChange={handleChange}
          value={project.type}
        >
          <option value="Web" selected>Web</option>
          <option value="Mobile">Mobile</option>
          <option value="AI">AI</option>
          <option value="Software">Software</option>
        </select>
      </label>
      {/* deadline_date */}
      <label>
        <span>Deadline Date:</span>
        <input
          required
          type="date"
          name="deadline_date"
          onChange={handleChange}
          value={project.deadline_date}
        />
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Project</span>}
      </button>
    </form>
  );
}
