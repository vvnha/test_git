function getMinMachines() {
  // Write your code here
  const start = [2, 1, 5, 5, 8];
  const end = [5, 3, 8, 6, 12];

  const cloneStart = [...start];
  const cloneEnd = [...end];

  const totalTask = cloneStart.length;
  const processingTasks = [];

  for (let i = 0; i < totalTask; i++) {
    // const start = start[i];
    const minStart = Math.min(...cloneStart);
    const minStartIndex = cloneStart.indexOf(minStart);

    if (processingTasks.length === 0)
      processingTasks.push({
        machine: processingTasks.length + 1,
        values: [minStart, cloneEnd[minStartIndex]],
      });
    else {
      let isConflict = false;
      let machineIndex = -1;
      for (let j = 0; j < processingTasks.length; j++) {
        const processingTask = processingTasks[j];
        if (minStart > processingTask.values[1]) {
          machineIndex = j;
          isConflict = false;
          break;
        } else {
          isConflict = true;
        }
      }
      if (isConflict === true) {
        processingTasks.push({
          machine: processingTasks.length + 1,
          values: [minStart, cloneEnd[minStartIndex]],
        });
      }
      if (isConflict === false && machineIndex >= 0) {
        processingTasks[machineIndex] = {
          ...processingTasks[machineIndex],
          values: [minStart, cloneEnd[minStartIndex]],
        };
      }
    }

    cloneStart.splice(minStartIndex, 1);
    cloneEnd.splice(minStartIndex, 1);

    return processingTasks.length;
  }
}

getMinMachines();
