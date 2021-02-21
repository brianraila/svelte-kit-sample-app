
export async function get(req, res) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	const articles = [
        {
            "title":"Sample 1",
            "content":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            
        },
        {
            "title":"Sample 2",
            "content":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            
        }
    ]

	if (articles !== null) {
		return{
            headers: {
                'Content-type': 'application/json'
            },
            body: {data: articles}
        }
	}
}