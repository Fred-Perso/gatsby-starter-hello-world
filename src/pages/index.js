import * as React from "react";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "VOTRE_SPACE_ID",
  accessToken: "VOTRE_ACCESS_TOKEN",
});

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Récupérer le contenu depuis Contentful
    client
      .getEntry("helloWorld")
      .then((entry) => {
        // Mettre à jour l'état avec le contenu récupéré
        setContent(entry.fields);
      })
      .catch((error) => console.error("Erreur lors de la récupération du contenu Contentful", error));
  }, []);

  return (
    <div>
      {content ? (
        <div>
          <p>{content.helloWorld}</p>
          <p>test</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
