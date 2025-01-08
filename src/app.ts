import { createImage } from "./services/image.service";

const main = async () => {
  const TITLE = "Hello World";
  const SUBTITLE = "Here's Your New Image!";

  // --- CREATE IMAGE ---
  await createImage(TITLE, SUBTITLE, {
    create_file: true,
    file_name: "image-created-using-sharp-and-canvas.png",
  });

  console.log("🎨 Image created successfully!");

  while (true) {}
};

main();
