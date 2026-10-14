/**
 * Helper utility to handle numeric input fields cleanly across forms.
 * Prevents the input from resetting to '0' when backspaced,
 * and removes sticky leading zeros when typing new digits.
 */

export function parseNumberInput(
  rawValue: string,
  options?: { min?: number; max?: number; allowFloat?: boolean }
): number | '' {
  if (rawValue === '') return '';

  // Handle leading zeros: convert "05" -> "5", but keep "0" or "0.5" intact
  let cleaned = rawValue;
  if (!rawValue.startsWith('0.') && /^0+[1-9]/.test(rawValue)) {
    cleaned = rawValue.replace(/^0+/, '');
  }

  const parsed = options?.allowFloat ? parseFloat(cleaned) : parseInt(cleaned, 10);
  if (isNaN(parsed)) return '';

  if (options?.min !== undefined && parsed < options.min) {
    // We let user type, but if max/min is strictly bounded we can clamp if needed
  }
  if (options?.max !== undefined && parsed > options.max) {
    return options.max;
  }

  return parsed;
}

export function sanitizeNumberOnBlur(
  currentValue: number | '' | undefined | null,
  fallback: number,
  options?: { min?: number; max?: number }
): number {
  if (currentValue === '' || currentValue === undefined || currentValue === null || isNaN(Number(currentValue))) {
    return fallback;
  }
  let num = Number(currentValue);
  if (options?.min !== undefined && num < options.min) num = options.min;
  if (options?.max !== undefined && num > options.max) num = options.max;
  return num;
}
