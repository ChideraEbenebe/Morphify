'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import notfound from '@/assets/notfound.svg';
import { BsFileImage, BsStars } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineScan } from 'react-icons/ai';
import { BiSolidLayerPlus } from 'react-icons/bi';
import { PiSelectionBackgroundBold } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import ImageGridSkeleton from '../imageSkeleton/placeholder';
import { IoMdDownload } from 'react-icons/io';

const handleDownload = async (url: string, title: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${title || 'download'}.jpg`; // You can change extension if needed
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Download failed:', err);
  }
};

interface UserImage {
  id: string;
  url: string;
  uploadedAt: string;
  edit: string;
  title: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  restore: <BsFileImage size={20} />,
  fill: <BsStars size={20} />,
  remove: <AiOutlineScan size={20} />,
  recolor: <BiSolidLayerPlus size={20} />,
  bgremove: <PiSelectionBackgroundBold size={20} />,
  profile: <FaUser size={20} />,
  home: <GoHomeFill size={20} />,
};

const UserImage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [userImage, setUserImage] = useState<UserImage[]>([]);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(userImage.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = userImage.slice(startIndex, startIndex + itemsPerPage);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/fetchUserImage/', {
        next: {
          revalidate: 0,
        },
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setUserImage(data.result);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='flex flex-col items-center w-full'>
      {loading ? (
        <ImageGridSkeleton />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-7xl relative'>
          {userImage.length === 0 ? (
            <div className='col-span-full flex flex-col items-center justify-center text-center p-10'>
              <Image
                src={notfound} // ⬅️ Replace with your actual image path
                alt='No images'
                width={200}
                height={200}
                className='mb-4 opacity-80'
              />
              <p className='text-lg font-semibold text-gray-500'>
                No images saved yet.
              </p>
            </div>
          ) : (
            currentItems.map((img) => (
              <div
                key={img.id}
                className='card w-full max-w-md bg-base-100 shadow-lg rounded-2xl'>
                <figure className='relative h-[300px] w-full'>
                  <Image
                    src={img.url}
                    alt={img.title || 'User Image'}
                    fill
                    className='object-cover rounded-t-2xl'
                  />
                </figure>

                <div className='p-5 flex justify-between items-center text-base bg-gray-100 text-gray-600'>
                  <p className='font-medium'>{img.title || 'Untitled'}</p>
                  <p>{iconMap[img.edit] || <BsFileImage size={24} />}</p>
                </div>

                <button
                  onClick={async () => await handleDownload(img.url, img.title)}
                  className='text-custom-orange transition-colors absolute top-4 right-4'>
                  <IoMdDownload size={24} />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Pagination */}
      {!loading && userImage.length > 0 && (
        <div className='flex gap-2 mt-4'>
          <button
            className='btn btn-sm btn-outline'
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            Prev
          </button>
          <span className='px-2 self-center text-sm'>
            {currentPage} / {totalPages || 1}
          </span>
          <button
            className='btn btn-sm btn-outline'
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserImage;
