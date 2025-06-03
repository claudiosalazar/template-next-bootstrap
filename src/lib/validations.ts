/**
 * Valida un email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida un número de teléfono
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[0-9\s]*$/;
  const digitCount = phone.replace(/[^0-9]/g, '').length;
  return phone.trim().length > 0 && phoneRegex.test(phone) && digitCount >= 9;
}
