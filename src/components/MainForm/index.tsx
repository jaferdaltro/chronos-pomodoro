import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';

import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} action=''>
      <div className='formRow'>
        <DefaultInput
          id='label'
          type='text'
          labelText='task'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo é de {nextCycle} min.</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            title='Iniciar o ciclo'
            aria-label='Iniciar o ciclo'
            icon={<PlayCircleIcon />}
            key={'startButton'}
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            color='red'
            title='Parar o ciclo'
            aria-label='Parar o ciclo'
            key={'stopButton'}
          />
        )}
      </div>
    </form>
  );
}
