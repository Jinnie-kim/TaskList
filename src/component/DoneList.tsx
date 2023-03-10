/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface TaskLists {
  id: string;
  task: string;
  description: string;
}

const taskLists: TaskLists[] = [
  {
    id: 'a1',
    task: 'TaskList 디자인 완성하기',
    description: '피그마에 그리기',
  },
  {
    id: 'a2',
    task: 'TaskList UI 마크업 하기',
    description: '컴포넌트 만들기',
  },
  {
    id: 'a3',
    task: 'TaskList 로직 만들기',
    description: 'api 통신하기',
  },
];

const DoneList = () => {
  return (
    <section css={taskListAreaStyle}>
      <h1 css={taskListTitleStyle}>Done...😽</h1>
      <ul>
        {taskLists.map((taskList) => {
          return (
            <li key={taskList.id} css={taskListStyle}>
              <RadioButtonCheckedRoundedIcon color="disabled" />
              <p>{taskList.task}</p>
              <button type="button" css={taskListButtonStyle}>
                <ExpandMoreIcon color="disabled" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const taskListAreaStyle = css`
  display: flex;
  flex-direction: column;
`;

const taskListTitleStyle = css`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 400;
`;

const taskListStyle = css`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #bdbdbd;
`;

const taskListButtonStyle = css`
  width: fit-content;
`;

export default DoneList;
