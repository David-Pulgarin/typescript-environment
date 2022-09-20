import type { Config } from '@jest/types';

/* // Sync object
const config: Config.InitialOptions = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true
};

export default config; */

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        clearMocks: true,
        coverageDirectory: 'coverage',
        preset: 'ts-jest',
        testEnvironment: 'node',
        verbose: true
    };
};
