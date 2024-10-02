import Register from "./Register";
const mockUsers = [
  { username: "adam", email: "adam@example.com", password: "adam123" },
  { username: "koshin", email: "koshin@example.com", password: "haha" },
];
export default {
  title: "Kursapp/Register",
  component: Register,
  decorators: [
    (Story) => {
      global.fetch = (url, options) => {
        const { username, email, password } = JSON.parse(options.body);

        // Check if any field is empty
        if (!username || !email || !password) {
          return Promise.resolve({
            ok: false, // Simulate a failed response
            status: 500, // Internal Server Error (for missing fields)
            json: () => Promise.resolve({ error: "Missing fields" }),
          });
        }

        // Check for duplicate username
        const userExists = mockUsers.some((user) => user.username === username);
        if (userExists) {
          return Promise.resolve({
            ok: false, // Simulate a failed response
            status: 400, // Bad Request (duplicate username)
            json: () => Promise.resolve({ error: "Username already exists!" }),
          });
        }

        // Check for duplicate email
        const emailExists = mockUsers.some((user) => user.email === email);
        if (emailExists) {
          return Promise.resolve({
            ok: false, // Simulate a failed response
            status: 400, // Bad Request (duplicate email)
            json: () => Promise.resolve({ error: "Email already exists!" }),
          });
        }

        // Simulate successful registration
        return Promise.resolve({
          ok: true, // Simulate a successful response
          status: 200, // OK status code
          json: () => Promise.resolve({ message: "Registration succeeded" }), // Response message
        });
      };

      return <Story />;
    },
  ],
};
export const Default = {};
