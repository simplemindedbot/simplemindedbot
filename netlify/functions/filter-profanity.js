const Filter = require('bad-words');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the form data
    const payload = JSON.parse(event.body);
    const filter = new Filter();

    // Check the feedback content for profanity
    const feedbackContent = payload.feedback || '';
    
    if (filter.isProfane(feedbackContent)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Your submission contains inappropriate language. Please revise and try again.',
        }),
      };
    }

    // If content is clean, allow the submission
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Content approved',
        isClean: true,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
