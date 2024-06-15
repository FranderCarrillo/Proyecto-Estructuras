let queue = [];

function renderQueue() {
    const queueContainer = document.getElementById('queue-container');
    queueContainer.innerHTML = '';
    queue.forEach(item => {
        const queueItem = document.createElement('div');
        queueItem.className = 'queue-item';
        queueItem.textContent = item;
        queueContainer.appendChild(queueItem);
    });
}

function enqueue() {
    const input = document.getElementById('enqueue-input');
    const value = input.value;
    if (value) {
        queue.push(value);
        input.value = '';
        renderQueue();
    } else {
        alert('Please enter a value');
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        renderQueue();
    } else {
        alert('Queue is empty');
    }
}

document.addEventListener('DOMContentLoaded', renderQueue);