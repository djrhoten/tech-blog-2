const { Comments } = require('../models');

const commentdata = [
  {
    comments_text: 'I like dat.',
    user_id: 6,
    post_id: 1
  },
  {
    comments_text: 'You better mean it!',
    user_id: 6,
    post_id: 8
  },
  {
    comments_text: 'No, no, no, no, no, way',
    user_id: 3,
    post_id: 10
  },
  {
    comments_text: 'A song for your inspiration!',
    user_id: 3,
    post_id: 18
  },
  {
    comments_text: 'How do you do it?',
    user_id: 7,
    post_id: 5
  },
  {
    comments_text: 'Live free, man.',
    user_id: 1,
    post_id: 20
  },
  {
    comments_text: 'The dinosaur that lives in us, must be old.',
    user_id: 6,
    post_id: 7
  },
  {
    comments_text: 'Then I said, "Dolphins? I thought you said Mall friends!"',
    user_id: 7,
    post_id: 4
  },
  {
    comments_text: 'Chicken Nuggets would be better.',
    user_id: 6,
    post_id: 12
  },
  {
    comments_text: 'Morbid and dark.',
    user_id: 6,
    post_id: 20
  },
  {
    comments_text: 'Well, well, well if it isn`t a well in the ground.',
    user_id: 3,
    post_id: 14
  },
  {
    comments_text: 'How much?',
    user_id: 5,
    post_id: 4
  },
  {
    comments_text:
      'Leo?',
    user_id: 4,
    post_id: 9
  },
  {
    comments_text:
      'I don`t know about that.',
    user_id: 5,
    post_id: 14
  },
  {
    comments_text: 'Could it be so simple?',
    user_id: 6,
    post_id: 2
  },
  {
    comments_text: 'Give me that hamburger.',
    user_id: 8,
    post_id: 2
  },
  {
    comments_text:
      'I don`t agree, but I`ll defend you to the death.',
    user_id: 2,
    post_id: 20
  },
  {
    comments_text: 'Buy it? Sure. Own it? Never.',
    user_id: 4,
    post_id: 11
  },
  {
    comments_text:
      'How often would the warranty expire?',
    user_id: 5,
    post_id: 13
  },
  {
    comments_text:
      'What about the price????!!!!',
    user_id: 9,
    post_id: 16
  },
  {
    comments_text: 'Dear God.',
    user_id: 6,
    post_id: 4
  },
  {
    comments_text: 'Fool me once, shame on you. Fool me twice, still shame on you, why are you lying to me all the time!',
    user_id: 4,
    post_id: 10
  },
  {
    comments_text: 'Wingardium Leviosa',
    user_id: 3,
    post_id: 8
  },
  {
    comments_text:
      'You`re gold. I don`t care what they said about you.',
    user_id: 8,
    post_id: 10
  },
  {
    comments_text:
      'Rather be fishin`',
    user_id: 1,
    post_id: 15
  },
  {
    comments_text: 'What ho! Fair maiden, may thine eyes alight upon mine but for a mere moment?',
    user_id: 5,
    post_id: 3
  },
  {
    comments_text: 'Scrap it. The deals off.',
    user_id: 1,
    post_id: 15
  },
  {
    comments_text: 'Knock twice, then say the secret password.',
    user_id: 4,
    post_id: 16
  },
  {
    comments_text: 'I can wear suspenders and a belt if I want.',
    user_id: 4,
    post_id: 18
  },
  {
    comments_text: 'Matcha tea for me!',
    user_id: 4,
    post_id: 10
  },
  {
    comments_text: 'I never know when to quit. ',
    user_id: 7,
    post_id: 5
  },
  {
    comments_text: 'Fly me to the moon!',
    user_id: 10,
    post_id: 1
  },
  {
    comments_text: 'Quickly.',
    user_id: 3,
    post_id: 19
  },
  {
    comments_text: 'Have you lost your mind?!?!?!',
    user_id: 5,
    post_id: 3
  },
  {
    comments_text: 'I could curate a playlist for this.',
    user_id: 10,
    post_id: 14
  },
  {
    comments_text: 'Nope',
    user_id: 10,
    post_id: 8
  },
  {
    comments_text: 'Uh-Oh',
    user_id: 10,
    post_id: 11
  },
  {
    comments_text: 'WOWZers Trousers.',
    user_id: 8,
    post_id: 5
  },
  {
    comments_text: 'Sneaky Snake',
    user_id: 8,
    post_id: 19
  },
  {
    comments_text: 'My goodness.',
    user_id: 9,
    post_id: 19
  },
  {
    comments_text:
      'When where and why?',
    user_id: 5,
    post_id: 4
  },
  {
    comments_text:
      'Fine I`ll take two.',
    user_id: 2,
    post_id: 11
  },
  {
    comments_text: 'Never again.',
    user_id: 4,
    post_id: 6
  },
  {
    comments_text: 'How does that work?',
    user_id: 9,
    post_id: 6
  },
  {
    comments_text:
      'I`ll bet',
    user_id: 7,
    post_id: 9
  },
  {
    comments_text: 'Chimney Sweeps',
    user_id: 4,
    post_id: 19
  },
  {
    comments_text: 'Que Sera sera',
    user_id: 10,
    post_id: 1
  },
  {
    comments_text:
      'Niiiiiiiice.',
    user_id: 2,
    post_id: 19
  },
  {
    comments_text: 'Ugh not again.',
    user_id: 10,
    post_id: 1
  },
  {
    comments_text: 'Sweet mother of opportunity!!!!!',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;
