import { v4 as uuidv4 } from "uuid";

function Data() {
  return [
    {
      id: uuidv4(),
      name: "Someone New",
      artist: "pop lil",
      active: true,
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=47641",
      color: ["#483e3f", "#e7c999"],
    },
    {
      id: uuidv4(),
      name: "Valse",
      artist: "Summer Girl",
      active: false,
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=48090",
      color: ["#ffffbf", "#addbd0"],
    },
    {
      id: uuidv4(),
      name: "Early Rise",
      artist: "Pez orentio",
      active: false,
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=48087",
      color: ["#25553d", "#dbdcbc"],
    },
  ];
}

export default Data;
