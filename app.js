document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const taskTitle = document.getElementById('task-title').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskList = document.getElementById('task-list');
  
    if (taskTitle && taskDesc) {
      const newTask = document.createElement('li');
      newTask.innerHTML = `<strong>${taskTitle}</strong><br>${taskDesc}`;
      taskList.appendChild(newTask);
  
      // Clear input fields
      document.getElementById('task-title').value = '';
      document.getElementById('task-desc').value = '';
    }
  });
  