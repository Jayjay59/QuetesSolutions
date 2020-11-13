import React from "react";
import "./index.css";
import { gql, useQuery } from "@apollo/client";

const LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LAUNCHES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {data.launches.map(
        (launches) => ` Date de lancement : ${launches.launch_date_utc} ${"   "}
                                             Succès ? ${
                                               launches.launch_success
                                             }  ${"   "}${"   "}
                                            Nom de la fusée : ${
                                              launches.rocket.rocket_name
                                            } ${"   "}${"   "}
                                             Lien YouTube : ${
                                               launches.links.video_link
                                             } ${"   "}${"   "}
                                             Détails : ${
                                               launches.details
                                             } ${"   "}${"   "}
                                          
      `
      )}
    </div>
  );
}

export default App;
