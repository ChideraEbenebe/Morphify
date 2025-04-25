import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getImageDimensions = (
  imageUrl: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => resolve({ width: img.width, height: img.height });
  });
};

export async function gen_fill(imageUrl: string, aspectRatio: string) {
  const { width, height } = await getImageDimensions(imageUrl);
  const [arW, arH] = aspectRatio.split(':').map(Number);
  const newWidth = Math.round((height * arW) / arH); // Adjust width to match aspect
  const newHeight = Math.round((width * arH) / arW);
  return imageUrl.replace(
    '/upload/',
    `/upload/c_lpad,h_${newHeight},w_${newWidth},b_gen_fill/`
  );
}
export async function objRemove(imageUrl: string, object: string) {
  return imageUrl.replace('/upload/', `/upload/e_gen_remove:prompt${object}/`);
}
export async function bgRemove(imageUrl: string, object: string) {
  return imageUrl.replace('/upload/', `/upload/e_gen_remove:prompt${object}/`);
}
export async function objRecolor(
  imageUrl: string,
  object: string,
  newColor: string
) {
  return imageUrl.replace(
    '/upload/',
    `/upload/e_gen_recolor:prompt_${object};to-color_${newColor}/`
  );
}

// export async function saveImageGlobally(
//   url: string,
//   user: string,
//   email: string,
//   edit: string
// ) {
//   // await connectDB();

//   const storedImage = new image({
//     imageUrl: url,
//     updatedBy: user,
//     updatedByEmail: email,
//     edit,
//   });

//   await storedImage.save();
// }
// export async function saveImageToUser(
//   url: string,
//   user: string,
//   email: string,
//   edit: string
// ) {
//   // await connectDB();

//   await users.findOneAndUpdate(
//     { email: email },
//     {
//       $push: {
//         images: {
//           imageUrl: url,
//           edit: edit,
//         },
//       },
//     }
//   );
// }

// https://res.cloudinary.com/demo/image/upload/e_background_removal/docs/rmv_bgd/dog_couch_orig
