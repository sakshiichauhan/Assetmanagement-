// utils/timezone.js

import moment from 'moment-timezone';

/**
 * Function to get the current date and time in IST (India Standard Time)
 * @returns {string} - formatted date-time string in IST
 */
export const getISTDateTime = () => {
    return moment.tz("Asia/Kolkata").format();  // returns the current date and time in ISO format for IST
}
