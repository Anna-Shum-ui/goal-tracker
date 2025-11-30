// components/GoalItem.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoalItem from './GoalItem'; 
import { type Goal } from "../context/GoalsContext";

// Fictitious data (Mocks)
const mockGoal: Goal = {
  id: 'abc-123',
  title: 'Test Goal',
  description: 'Test description',
  done: false,
};

describe('GoalItem Test', () => {

  // Verify that the “Done” button calls onDone
  test('should call onDone when the "Done" button is clicked', () => {

    const mockOnDone = jest.fn(); // Spy function for checking calls
    const mockOnDelete = jest.fn(); 
    
    render(
      <GoalItem
        goal={mockGoal}
        onDone={mockOnDone}
        onDelete={mockOnDelete} 
      />
    );

    // Find the button labeled "Done"
    const doneButton = screen.getByText(/Done/i); 

    // Simulate a user click
    fireEvent.click(doneButton);

    // Verify that the onDone function was called exactly 1
    expect(mockOnDone).toHaveBeenCalledTimes(1);
    // Verification that it was called with our goal ID
    expect(mockOnDone).toHaveBeenCalledWith(mockGoal.id);
  });
});