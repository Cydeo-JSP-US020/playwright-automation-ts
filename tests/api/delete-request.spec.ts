import { test, expect } from "@playwright/test";

test('DELETE request practice', async ({ request }) => {

    const endpoint = "/api/v2/spartans/2453";

    const response = await request.delete(endpoint);

    // verify the response status code is 200
    expect(response.status()).toBe(200);

    const allHeaders = response.headers();
    
    // verify the response content type is application/json
    expect(allHeaders['content-type']).toBe('application/json');

    const responseBody = await response.json();

    // verify that the message is "Successfully deleted the Spartan."
    expect(responseBody.message).toBe("Successfully deleted the Spartan.");
    
});
