import { create } from 'zustand';

interface ImageState {
  originalImage: string | Blob;
  transformedImage: string | null;
  imageFormat: string;
  loading: boolean;

  setImageFormat: (format: string) => void;
  setOriginalImage: (image: string | Blob) => void;
  setTransformedImage: (url: string | null) => void;
  setLoading: (value: boolean) => void;
  reset: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  originalImage: '',
  loading: false,
  transformedImage: null,
  imageFormat: '',

  setLoading: (value) => set({ loading: value }),
  setImageFormat: (format: string) => set({ imageFormat: format }),
  setOriginalImage: (image) => set({ originalImage: image }),
  setTransformedImage: (url) => set({ transformedImage: url }),
  reset: () =>
    set({ originalImage: '', transformedImage: null, loading: false }),
}));
