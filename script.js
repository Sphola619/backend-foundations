function simulateRequest(method) {
  let response;

  if (method === "GET") {
    response = {
      message: "Fetching users...",
      data: ["Sipho", "John", "Sarah"]
    };
  }

  if (method === "POST") {
    response = {
      message: "User created successfully",
      user: "New User"
    };
  }

  if (method === "PUT") {
    response = {
      message: "User updated successfully"
    };
  }

  if (method === "DELETE") {
    response = {
      message: "User deleted"
    };
  }

  document.getElementById("output").textContent =
    JSON.stringify(response, null, 2);
}