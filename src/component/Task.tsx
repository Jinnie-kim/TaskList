/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Wrapper from '../Layout/Wrapper';
import TaskList from './TaskList';
import DoneList from './DoneList';
import TaskForm from './TaskForm';

const Task = () => {
  return (
    <section>
      <Wrapper>
        <div css={taskAreaStyle}>
          <TaskList />
          <DoneList />
        </div>
        <TaskForm />
      </Wrapper>
    </section>
  );
};

const taskAreaStyle = css`
  display: flex;
  height: 500px;
  margin-top: 50px;
  justify-content: space-between;
`;

export default Task;
