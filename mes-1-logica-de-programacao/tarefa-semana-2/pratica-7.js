function olaMundos(idioma) {
  if (idioma === "en") {
    console.log("Hello, World!");
  } else if (idioma === "fr") {
    console.log("Bonjour le monde!");
  } else if (idioma === "gr") {
    console.log("Γειά σου Κόσμε!");
  } else {
    console.log("Olá, Mundo!");
  }
}

olaMundos();
olaMundos("en");
olaMundos("fr");
olaMundos("gr");
