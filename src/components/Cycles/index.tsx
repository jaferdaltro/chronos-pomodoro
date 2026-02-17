import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import style from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleMap = {
    workTime: 'FOCO',
    restTime: 'Descanso curto',
    longRestTime: 'Descanso Longo',
  };

  return (
    <div className={style.cycles}>
      <span>Cicles</span>
      <div className={style.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const cycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${style.cycleDot} ${style[cycleType]}`}
              title={`Indicador de ${cycleMap[cycleType]}`}
              aria-label={`Indicador de ${cycleMap[cycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
