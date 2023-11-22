var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Add a task.");
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.getElementById("myInput").addEventListener("keyup", function(event) {
  // Check if the Enter key is pressed (keyCode 13)
  if (event.key === "Enter") {
      newElement();
  }
});

function newElement() {
  var inputValue = document.getElementById("myInput").value;

  if (inputValue === '') {
      alert("Add a task.");
  } else {
      var li = document.createElement("li");
      li.innerHTML = inputValue;
      document.getElementById("tasks").appendChild(li);
      li.appendChild(createCloseButton());

      // Clear the input field
      document.getElementById("myInput").value = "";
  }
}

function createCloseButton() {
  var span = document.createElement("span");
  var txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = function() {
      removeTask(this);
  };
  return span;
}

function removeTask(element) {
  var div = element.parentElement;
  div.style.display = "none";
}

function removeTask(element) {
  var div = element.parentElement;

  div.classList.add('fade-out');

  setTimeout(function() {
      div.style.display = "none";
      div.parentNode.removeChild(div);
  }, 600); // 300ms matches the duration of the CSS transition
}

window.onload = function() {
  loadTasks();
};

function saveTasks() {
  var tasks = document.getElementById("tasks").innerHTML;
  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
      document.getElementById("tasks").innerHTML = tasks;
      // Add event listeners for close buttons on loaded tasks
      addCloseButtonListeners();
  }
}

function newElement() {
  var inputValue = document.getElementById("myInput").value;

  if (inputValue === '') {
      alert("Add a task.");
  } else {
      var li = document.createElement("li");
      li.innerHTML = inputValue;
      document.getElementById("tasks").appendChild(li);
      li.appendChild(createCloseButton());

      document.getElementById("myInput").value = "";

      // Save tasks to local storage after adding a new task
      saveTasks();
  }
}

function createCloseButton() {
  var span = document.createElement("span");
  var txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = function() {
      removeTask(this);
  };
  return span;
}

function removeTask(element) {
  var div = element.parentElement;
  div.classList.add('fade-out');
  setTimeout(function() {
      div.style.display = "none";
      div.parentNode.removeChild(div);
      saveTasks(); // Save tasks after removing a task
  }, 300);
}

function addCloseButtonListeners() {
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = function() {
          removeTask(this);
      };
  }
}


