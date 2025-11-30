//pages/Home.tsx
// This is the main screen, displaying the list of tasks and integrating an external API for quotes

import { Link } from "react-router-dom";
import { useGoals } from "../context/GoalsContext"; 
import GoalItem from "../components/GoalItem";
import { useEffect, useState } from "react";

const Home = () => {
  const { goals, toggleDone, removeGoal } = useGoals();
  // useState to manage the current quote text
  const [quote, setQuote] = useState("Loading quote..."); 

  useEffect(() => {
    // Fetch quote from public API
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setQuote(data.slip.advice))
      // Basic error handling for the fetch operation
      .catch(() => setQuote("Failed to load quote.")); 
  }, []); // This runs only once 

  return (
    <div className="page-container">
      <div 
        style={{ 
          marginBottom: 20, 
          textAlign: "center", 
          padding: '15px',           
          border: '1px solid #ccc',
          borderRadius: '4px',      
          backgroundColor: '#f9f9f9' 
        }}
      >
        <h3 style={{ marginBottom: '8px' }}>Quote of the day</h3> 
        <p>{quote}</p>
      </div>

      {/* Button to create new goal */}
      <div className="button-group"> 
        <Link to="/create">
          <button className="primary-button">Add a goal +</button>
        </Link>
      </div>
      
      <div style={{ marginTop: 20 }}>
        {/* I show a message if the goals array is empty */}
        {goals.length === 0 && <p style={{textAlign: "center"}}>No goals yet...</p>}

        {/* I map over the goals array to render a GoalItem component for each goal */}
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            onDone={toggleDone}
            onDelete={removeGoal}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
