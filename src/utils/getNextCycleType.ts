import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return 'longRestTime';
  if (currentCycle % 2 === 0) return 'restTime';
  return 'workTime';
}
