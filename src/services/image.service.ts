import { createCanvas } from "canvas";
import path from "path";
import sharp from "sharp";
import fs from "fs";

const WIDTH = 1080;
const HEIGHT = 1080;
const FONT_LARGE = "bold 88px Arial";
const FONT_MEDIUM = "semi-bold 68px Arial";
const BACKGROUND_COLOR = "black";
const TEXT_COLOR = "white";

/**
 * Function to create an image
 * @param title - title of the image
 * @param subtitle - subtitle of the image
 * @param options {
 *      @param create_file - boolean to determine whether to create a file or not;
 *      @param file_name - name of the file to be created;
 * }
 */

export const createImage = async (
  title: string,
  subtitle: string,
  options?: {
    file_name?: string;
    create_file?: boolean;
  },
) => {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // --- BACKGROUND ---
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // --- TITLE TEXT ---
  const TITLE_Y_POSITION = 200;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.font = FONT_LARGE;
  ctx.fillText(title, WIDTH / 2, TITLE_Y_POSITION);

  // --- SUBTITLE TEXT ---
  const SUBTITLE_Y_POSITION = 350;
  ctx.font = FONT_MEDIUM;
  ctx.fillText(subtitle, WIDTH / 2, SUBTITLE_Y_POSITION);

  // --- CONVERT TO PNG ---
  const FINAL_IMAGE_BUFFER = canvas.toBuffer("image/png");
  const CONNECTIONS_IMAGE = await sharp(FINAL_IMAGE_BUFFER).toBuffer();

  // --- SAVE TO FILE ---
  if (options?.create_file) {
    const OUTPUT_DIR = path.join(__dirname, "../output");
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const OUTPUT_PATH = path.join(
      OUTPUT_DIR,
      options?.file_name ?? "test-image.png",
    );

    fs.writeFileSync(OUTPUT_PATH, CONNECTIONS_IMAGE);
    console.log(`Image saved to ${OUTPUT_PATH}`);
  }

  return CONNECTIONS_IMAGE;
};
