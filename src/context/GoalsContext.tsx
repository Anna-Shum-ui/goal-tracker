//context/GoalsContext.tsx
import { createContext, useState, useContext, useEffect } from "react";

// Structure of a goal
export interface Goal {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

// What the context provides
interface GoalsContextType {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  removeGoal: (id: string) => void;
  toggleDone: (id: string) => void;
}

// Create context
export const GoalsContext = createContext<GoalsContextType | null>(null);

export const GoalsProvider = ({ children }: any) => {
  // Load initial goals from localStorage if any
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  // Add a new goal
  const addGoal = (goal: Goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]); 
  };

  // Remove goal by id
  const removeGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  // Mark goal done/undone
  const toggleDone = (id: string) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, removeGoal, toggleDone }}>
      {children}
    </GoalsContext.Provider>
  );
};

// Custom hook to use the context
export const useGoals = () => useContext(GoalsContext)!;
