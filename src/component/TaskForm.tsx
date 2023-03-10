/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const TaskForm = () => {
  return (
    <form css={taskFormStyle}>
      <input
        type="text"
        placeholder="What’s your Today’s Task...? "
        css={taskFormInputStyle}
      />
      <button type="submit" css={taskFormButtonStyle}>
        Add Task
      </button>
    </form>
  );
};

const taskFormStyle = css`
  display: flex;
  gap: 10px;
  padding-top: 30px;
  align-items: center;
  border-top: 1px solid #000000;
`;

const taskFormInputStyle = css`
  flex-grow: 2;
  padding: 13px 0 10px 10px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 14px;
`;

const taskFormButtonStyle = css`
  width: fit-content;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 14px;
`;

export default TaskForm;
