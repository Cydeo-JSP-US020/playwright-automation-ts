import { test, expect } from "@playwright/test";

test('POST request practice', async ({ request }) => {
    
    const endpoint = "/api/v2/spartans";

    const requestBody = {
        "name": "PlaywrightExample",
        "gender": "Male",
        "phone": 123456789012
    };

    const response = await request.post(endpoint, { data: requestBody });


    // verify the response status code is 201
    expect(response.status()).toBe(201);

    const allHeaders = response.headers();

    // verify the response content type is application/json
    expect(allHeaders['content-type']).toBe('application/json');

    const responseBody = await response.json();

    // verify that the message is "Successfully created the Spartan."
    expect(responseBody.message).toBe("Successfully created the Spartan.");


})
