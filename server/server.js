const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	organization: 'org-UTqoP6O0CK7qqnFxn9CNHmhi',
	apiKey: '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'
});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up the ChatGPT endpoint
app.post('/chat', async (req, res) => {
	// Get the prompt from the request
	const { userInput } = req.body;

	// Generate a response with ChatGPT
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: userInput,
		max_tokens: 300,
		temperature: 0.2
	});
	console.log(completion.data.choices[0].text);
	res.send(completion.data);
});

// Start the server
const port = 8080;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
