export default async (request, context) => {
    return new Response("Hello from Netlify Edge Functions!", 
        {
            headers: {
                "Content-Type": "text/html"
            }
        }
    );
};
