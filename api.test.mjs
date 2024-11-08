import axios from 'axios';
import { expect } from 'chai';
import { describe, it } from 'mocha'; // Explicitly import Mocha's describe/it

describe('API Automation Test', function() {
  it('should verify the status code is 200', async function() {
    try {
      // Make the GET request
      const response = await axios.get('https://reqres.in/api/users/1');
      
      // Validate the status code
      expect(response.status).to.equal(200);
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw to fail the test if an error occurs
    }
  });
});
