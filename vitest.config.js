import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  
  // -----------------------------------
  // Vitest specific options
  // -----------------------------------
  test: {
    // Tell Vitest where the tests live
    testDir: './test',
    
    // If you want coverage reports for unit tests:
    include: ['test/unit/**/*.test.{js,ts,jsx,tsx}'],
    reporters: [
	'default',
	'html'
    ],  // add "html" if you like a nice UI

    outputFile: './test/html/index.html', // Send logs to an "html" folder inside the test folder
    
    // Optional global setup
    globals: true,
    environment: 'jsdom',
    
    // If you’re using `setupTests.ts`
    setupFiles: ['./test/setupTests.ts'],

    // Run tests in watch mode by default
    watch: false,  // Set to true if running `vitest --watch`

    // Snapshot dir (optional)
    snapshotFileNameTemplate: ({ testPath }) => {
      const name = testPath.replace(/^.*[\\\/]/, '').replace(/\.(test|spec)\./, '.snap.');
      return `${name}.snap`;
    },
  },
});
