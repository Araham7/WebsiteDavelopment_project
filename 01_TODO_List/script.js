        const ol = document.querySelector("#order-list");
        const btn = document.querySelector("#addBtn");

        // Function to add a task
        const addTask = () => {
            const todoInput = document.querySelector("#todoInput").value;
            if (todoInput) {
                const newItem = document.createElement("li");
                newItem.textContent = todoInput;
                ol.appendChild(newItem);
                document.querySelector("#todoInput").value = "";
            }
        };

        // Add task when button is clicked
        btn.addEventListener("click", addTask);

        // Add task when "Enter" key is pressed
        document.querySelector("#todoInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addTask();
            }
        });
