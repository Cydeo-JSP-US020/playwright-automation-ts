import { test, expect } from "@playwright/test";

test('PUT request practice', async ({ request }) => {
    
    const endpoint = "/api/v2/spartans/2453";

    const requestBody = {
        "name": "Bella",
        "gender": "Female",
        "phone": "987654321012"
    };

    const response = await request.put(endpoint, { data: requestBody });
    
    // verify the response status code is 200
    expect(response.status()).toBe(200);

    const allHeaders = response.headers();
    
    // verify the response content type is application/json
    expect(allHeaders['content-type']).toBe('application/json');

    const responseBody = await response.json();

    // verify that the message is "Successfully updated the Spartan."
    expect(responseBody.message).toBe("Successfully updated the Spartan.");


});

test('PATCH request practice', async ({ request }) => {

    const endpoint = "/api/v2/spartans/2453";

    const requestBody = {
        "phone": "111111111111"
    };

    const response = await request.patch(endpoint, { data: requestBody });

    // verify the response status code is 200
    expect(response.status()).toBe(200);

    const allHeaders = response.headers();

    // verify the response content type is application/json
    expect(allHeaders['content-type']).toBe('application/json');

    const responseBody = await response.json();

    // verify that the message is "Successfully updated the Spartan."
    expect(responseBody.message).toBe("Successfully updated the Spartan.");
    
})
