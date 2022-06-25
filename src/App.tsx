import { gql, useQuery } from "@apollo/client";
import { Router } from "./router";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log("data ", data);

  return <Router />;
}

export default App;
