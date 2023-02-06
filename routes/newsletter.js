var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Write a restaurant review based on these notes:\n\nName: The Blue Wharf\nLobster great, noisy, service polite, prices good.\n\nReview:",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.send(response.data.choices[0].text);
});

module.exports = router;
