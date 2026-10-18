import { test, expect } from "@playwright/test";

test('GET request practices', async ({ request }) => {

   // const baseURL = "https://spartan-app-new-nonsecure.onrender.com";
    const endpoint = "/api/v2/spartans";

    const response = await request.get(endpoint);

    // Verify the response status code
    expect(response.status()).toBe(200);

    const allHeaders = response.headers();

    console.log(allHeaders);

    // Verify the response content type
    expect(allHeaders['content-type']).toBe('application/json');
  

    const responseBody = await response.json();
    
    //console.log(responseBody);
    console.log(responseBody.totalElement);
    console.log(responseBody.message);


    expect(responseBody.totalElement).toBeGreaterThan(500);
    expect(responseBody.message).toBe("Successfully retrieved all the Spartans.");

    // come back at 12:00 PM EST

});

/*
request fixture of playwright is equivilent to RestAssured and RestSharp libraries in Java & C#


*/


test('GET request with parameter practices', async ({ request }) => {
    const id= "1193";

    const endpoint = `/api/v2/spartans/${id}`;
    
    const response = await request.get(endpoint);

    // Verify the response status code
    expect(response.status()).toBe(200);

    const allHeaders = response.headers();

    // verify content type.
    expect(allHeaders['content-type']).toBe('application/json');

    const responseBody = await response.json();

    console.log(responseBody);

    // verify that the message is "Successfully retrieved the Spartan."
    expect(responseBody.message).toBe("Successfully retrieved the Spartan.");

    // verify that the name is "Grappye"
    expect(responseBody.data.name).toBe("Grappy");

});