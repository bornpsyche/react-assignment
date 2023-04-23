/*
 * Temporary problems array schema
 */
import { useState } from "react";
const problems1 = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
];
const problems2 = [
  {
    title: "204. Title4",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "205. Title5",
    difficulty: "Medium",
    acceptance: "412%",
  },
  {
    title: "206. Title6",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "207. Title7",
    difficulty: "Hard",
    acceptance: "42%",
  },
];
function App() {
  /* Add routing here, routes look like -
  login - Login page
  /signup - Signup page
  /problemset/all/ - All problems (see problems array above)
  /problems/:problem_slug - A single problem page
  */
  const [problems, setproblems] = useState([]);
  //   setInterval(() => {
  //     console.log("new added");
  //     setproblems((problems1) => [
  //       ...problems1,
  //       {
  //         title: "207. Title7",
  //         difficulty: "Hard",
  //         acceptance: "42%",
  //       },
  //     ]);
  //   }, 3000);
  return (
    <div>
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="password"></input>
      <button>Signin</button>
      <div>
        <button onClick={() => setproblems((problems) => problems1)}>1</button>
        <button onClick={() => setproblems((problems) => problems2)}>2</button>
      </div>
      <div>
        {problems.map((problem) => (
          <ProblemStatement
            title={problem.title}
            acceptance={problem.acceptance}
            difficulty={problem.difficulty}
          />
        ))}
      </div>
      Finish the assignment! Look at the comments in App.jsx as a starting point
    </div>
  );
}

// A demo component
function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}
export default App;
