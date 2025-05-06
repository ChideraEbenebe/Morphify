'use client';

import { useImageStore } from '@/lib/store/useFileStore';
import React from 'react';
import { showEventCreatedToast, showEventErrorToast } from '../toast';

const Button = ({ title }: { title: string }) => {
  const file = useImageStore((state) => state.originalImage);
  const setImageFormat = useImageStore((state) => state.setImageFormat);
  const imageFormat = useImageStore((state) => state.imageFormat);
  const transformedImage = useImageStore((state) => state.transformedImage);
  const setLoading = useImageStore((state) => state.setLoading);
  const setTransformedImage = useImageStore(
    (state) => state.setTransformedImage
  );

  async function applyTransformation() {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);

      const response = await fetch('/api/bgremove/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Upload failed: ${data.message}`);
        setTransformedImage(null);
        setImageFormat('');

        return;
      }

      setTransformedImage(data.url);
      showEventCreatedToast();
      const urlParts = data.url.split('.');
      const format = urlParts[urlParts.length - 1];
      setImageFormat(format);
    } catch (error) {
      if (error instanceof Error) {
        showEventErrorToast(error.message);
      }
      showEventErrorToast('An Unexpected error occurred');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const handleDownload = async () => {
    if (!transformedImage) return alert('No image available!');

    const response = await fetch(transformedImage);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url; // ✅ Blob URL or direct URL
    link.download = `${title}.${imageFormat}`; // ✅ Set download name
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-14 flex flex-col gap-4'>
      <button
        disabled={!file || !title}
        onClick={applyTransformation}
        className='w-full rounded-4xl cursor-pointer hover:brightness-125 duration-300 font-semibold bg-gradient-to-br from-orange-300 to-custom-orange py-4 text-white disabled:brightness-60'>
        Apply Transformation
      </button>
      {transformedImage && (
        <button
          onClick={handleDownload}
          className='w-full font-semibold rounded-4xl bg-gradient-to-br from-orange-300 to-custom-orange py-4 text-white disabled:brightness-75'>
          Download
        </button>
      )}
    </div>
  );
};

export default Button;
