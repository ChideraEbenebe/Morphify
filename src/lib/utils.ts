import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const getImageDimensions = (
//   imageUrl: string
// ): Promise<{ width: number; height: number }> => {
//   return new Promise((resolve) => {
//     const img = new Image();
//     img.src = imageUrl;
//     img.onload = () => resolve({ width: img.width, height: img.height });
//   });
// };

export async function gen_fill(imageUrl: string, aspectRatio: string) {
  const [arW, arH] = aspectRatio.split(':').map(Number);
  return imageUrl.replace(
    '/upload/',
    `/upload/c_lpad,ar_${arW}:${arH},b_gen_fill/`
  );
}

export async function objRemove(imageUrl: string, object: string) {
  const formatted = object.replace(/\s+/g, '_');
  return imageUrl.replace(
    '/upload/',
    `/upload/e_gen_remove:prompt_${formatted}/`
  );
}

export async function bgRemove(imageUrl: string) {
  return imageUrl.replace('/upload/', '/upload/e_background_removal/');
}

export async function objRecolor(
  imageUrl: string,
  object: string,
  newColor: string
) {
  const formattedObj = object.replace(/\s+/g, '_');
  const formattedColor = newColor.replace(/\s+/g, '_');

  return imageUrl.replace(
    '/upload/',
    `/upload/e_gen_recolor:prompt_${formattedObj};to-color_${formattedColor}/`
  );
}
