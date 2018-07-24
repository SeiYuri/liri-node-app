/*console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.VTkSbnlbqIJu2TdGRDWtbwvbI,
  consumer_secret: process.env.jaXifWAl1VCkCvlsfYRK9HUWA4IUUw03UJvoIO47QwpQQ68qSR,
  access_token_key: process.env.l5oyZ3cXc67TqFTzW88VwTzChkBzMv,
  access_token_secret: process.env.puKobCthTH0ybW0PrAV8OV3TBMzSbG3Y2i5KOFnSFw000
};

exports.spotify = {
  id: process.env.c14235274d87422ca472636de2204391, /// <--- This line is said to have an error, but I don't understand why. 
  secret: process.env.b08ee948df5d4a9b85264c025030a124
};*/

console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
