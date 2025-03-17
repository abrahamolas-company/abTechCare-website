export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };