const http = require("http");
const fs = require("fs");
const readline = require("readline-sync");
const server = new http.Server();

const options = {
  hostname: "localhost",
  port: 4000,
  method: "GET",
};

var ruta = readline.question(
  "\nEscriba el nombre del archivo (incluyendo extension): ",
);

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.write("¡Hola mundo!");

  console.log("Antes de la lectura síncrona");

  if (fs.existsSync(ruta)) {
    console.log("\tServidor síncrono: El archivo '" + ruta + "' existe");
    res.write(
      "\n\n=================================\n\tSERVIDOR SÍNCRONO\n=================================\n\n\t",
    );

    res.write(fs.readFileSync(ruta, "utf8") + "\n");
  } else {
    console.log("\tServidor síncrono: El archivo '" + ruta + "' no existe");
    res.write(
      "\n\n=================================\n\tSERVIDOR SÍNCRONO\n=================================\n\n\tEl archivo '" +
        ruta +
        "' no existe\n",
    );
  }

  console.log("Después de la lectura síncrona");

  console.log("\nAntes de la lectura asíncrona");

  fs.readFile(ruta, "utf8", (err, data) => {
    if (err) {
      console.log("\tServidor asíncrono: El archivo '" + ruta + "' no existe");
      res.write(
        "\n\n=================================\n\tSERVIDOR ASÍNCRONO\n=================================\n\n\tEl archivo '" +
          ruta +
          "' no existe\n",
      );
    } else {
      console.log("\tServidor asíncrono: El archivo '" + ruta + "' existe");
      res.write(
        "\n\n=================================\n\tSERVIDOR ASÍNCRONO\n=================================\n\n\t",
      );
      res.write(data);
    }
    res.end();
  });

  console.log("Después de la lectura asíncrona");
});

server.on("error", (err) => {
  console.log(err.message);
});

server.listen(options, () => {
  console.log("Escuchando en la puerta " + server.address().port);
  console.log("\tIMPORTANTE: refresque el navegador\n");
});
