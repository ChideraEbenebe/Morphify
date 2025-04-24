'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Plus } from 'lucide-react';
import { useImageStore } from '@/lib/store/useFileStore';

export default function ImageUpload() {
  const setOriginalImage = useImageStore((state) => state.setOriginalImage);
  const setTransformedImage = useImageStore(
    (state) => state.setTransformedImage
  );
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        console.log({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: '546318921773799',
          api_secret: 'w6-v7xJtmyLQrRRgXqlON6x-UJM',
        });

        if (!['image/jpeg', 'image/png'].includes(file.type)) {
          alert('Invalid file type! Only JPG and PNG are allowed.');
          return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('API Response:', data); // ✅ Log the API response

        if (!response.ok) {
          alert(`Upload failed: ${data.message}`);
          return;
        }

        setTransformedImage(data.url); // ✅ Set the actual image URL

        setOriginalImage(file);
        setPreview(URL.createObjectURL(file));
      }
    },
    [setOriginalImage]
  );

  const onDropRejected = (fileRejections: any) => {
    alert('Only JPG, PNG, JPEG files under 5MB are allowed!');
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/jpg': [],
    },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-custom-orange'>Original</h2>
      <div
        {...getRootProps()}
        className='mt-4 w-96 h-72 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl shadow-md cursor-pointer hover:border-custom-orange transition-all overflow-hidden'>
        <input {...getInputProps()} />
        {preview ? (
          <img
            src={preview}
            alt='Uploaded preview'
            className='w-full h-full object-cover rounded-xl'
          />
        ) : (
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 bg-custom-orange text-white flex items-center justify-center rounded-lg shadow-md'>
              <Plus size={20} />
            </div>
            <p className='text-gray-500 mt-2'>
              {isDragActive
                ? 'Drop the image here...'
                : 'Click here to upload image, ".png, .jpg, .jpeg"'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
