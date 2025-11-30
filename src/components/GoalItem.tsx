//components/GoalItem.tsx
import { type Goal } from "../context/GoalsContext"; // Предполагая, что вы используете 'type'

interface GoalItemProps {
  goal: Goal;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
}

const GoalItem = ({ goal, onDone, onDelete }: GoalItemProps) => {
  
  const containerClass = goal.done ? "goal-item goal-item-done" : "goal-item";
  const doneButtonClass = goal.done ? "secondary-button" : "primary-button";

  return (
    <div className={containerClass}>
      <h3 className="goal-title">
        {goal.title} {goal.done && "🎉"}
      </h3>
      <p className="goal-description">{goal.description}</p>

      <div className="button-group-inline">
        <button 
          onClick={() => onDone(goal.id)} 
          className={`${doneButtonClass} goal-button`} 
        >
          {goal.done ? "Cancel" : "Done"}
        </button>

        <button 
          onClick={() => onDelete(goal.id)} 
          className="secondary-button delete-button goal-button" 
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalItem;