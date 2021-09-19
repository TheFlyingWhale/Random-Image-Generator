/**
 * Generates a random number between 0 - 1 000 000 000
 * @returns number
 */
export const generateRandomSeed = () => {
    return Math.floor(Math.random() * 1000000001);
}