/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserRole } from '../types';

/**
 * Checks if a given email is a registered leader email.
 */
export { isLeaderEmail } from './security';

/**
 * Calculates the progress toward the next rank.
 */
export const calculateRankProgress = (currentPoints: number, nextRankPoints: number): number => {
  if (nextRankPoints <= 0) return 100;
  return Math.min(100, Math.round((currentPoints / nextRankPoints) * 100));
};

/**
 * Formats date into standard readable scout date string
 */
export const formatScoutDate = (dateString: string | undefined): string => {
  if (!dateString) return 'بدون تاريخ';
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};
