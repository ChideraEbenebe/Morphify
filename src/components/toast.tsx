'use client';

import { toast } from 'sonner';

// Export a function that displays the toast
export function showEventCreatedToast() {
  toast('Event has been created', {
    description: 'Successful Upload',
  });
}

export function showEventErrorToast(errorMessage: string) {
  toast.error('Error', {
    description: errorMessage,
  });
}

// Example Usage (in another component or function):
// import { showEventCreatedToast, showEventErrorToast } from './your-file'; // Adjust the path if needed

// function someFunction() {
//   try {
//     // Your code that might cause an error
//     // ...
//     showEventCreatedToast(); // Show success
//   } catch (error: any) {
//     showEventErrorToast(error.message || "An unexpected error occurred."); // Show error
//   }
// }
