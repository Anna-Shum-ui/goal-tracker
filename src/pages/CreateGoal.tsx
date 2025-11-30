//pages/CreateGoal.tsx
import { useForm } from "react-hook-form";
import { useGoals } from "../context/GoalsContext";
import { useNavigate } from "react-router-dom";

const CreateGoal = () => {
  const { addGoal } = useGoals();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const newGoal = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      done: false
    };

    addGoal(newGoal);
    navigate("/");
  };

  return (
    <div className="page-container">
      <h2 style={{textAlign: "center", marginBottom: '20px'}}>Create a goal</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Title"
          {...register("title", {required: true})} 
        />

        <textarea
          placeholder="Description"
          {...register("description")}
        />

        <div className="button-group"> 
          <button type="submit" className="primary-button">
            Save
          </button>

          <button type="button" onClick={() => navigate("/")} className="secondary-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGoal;