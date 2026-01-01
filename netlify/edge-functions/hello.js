export default async (request, context) => {

    context.log("Calling hello.js Edge Function")
    return new Response("Hello from Netlify Edge Functions!", 
        {
            headers: {
                "Content-Type": "text/html"
            }
        }
    );
};
