const { Post } = require('../models');

const postdata = [
  {
    title: 'Hey It`s the big one.',
    post_content: 'Hey man this is it. This is the big post, you know? There are no others like this one!',
    user_id: 10
  },
  {
    title: 'Example of examples',
    post_content: 'Do you need an example of how to give an example? Look no further than the following example of the example I was talking about.',
    user_id: 8
  },
  {
    title: 'Achoo. Bless You.',
    post_content: 'Achoo! Bless you. Sneezes for Jeezus.',
    user_id: 1
  },
  {
    title: 'Time? Illusion.',
    post_content: 'Did you know that time is an illusion? In fact 95% of things are. Like percentages, or statistics.',
    user_id: 4
  },
  {
    title: 'Eat it.',
    post_content: 'Need a change in your diet? Look to my new book, `EAT IT`. We will dive deep into your belly and cure what ails you.',
    user_id: 7
  },
  {
    title: 'I don`t give a hufflepuff.',
    post_content: 'Ravenclaw? More like Raven-Naw!',
    user_id: 4
  },
  {
    title: 'Hey you!',
    post_content: 'Hey you, get off of my cloud server! Don`t hang around cause two`s a crowd on my cloud... server.',
    user_id: 1
  },
  {
    title: 'Hefty dose.',
    post_content: 'Need a hefty dose of reality? Come to our next seminar where we discuss how to get your hefty dose in no time. Only 5 east payments... ',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'AAAAAAAAAAAHHHHHCCCCCCCCCHHHH nibh.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, leo.',
    post_content: 'Latin stuff.',
    user_id: 10
  },
  {
    title: 'Done did it.',
    post_content: 'They said I couldn`t. They said I wouldn`t. But I done did it.',
    user_id: 8
  },
  {
    title: 'I can`t.',
    post_content: 'Can`t never could do nothin`',
    user_id: 3
  },
  {
    title: 'Sea Shells',
    post_content: 'Hi my name`s Mary, I have a small shop near the seashore that is currently stocked to the BRIM with seashells.',
    user_id: 3
  },
  {
    title:
      'Per Se.',
    post_content: 'I wouldn`t SAY that, per se. Oh wait.',
    user_id: 7
  },
  {
    title: 'Pleebs',
    post_content: 'Can someone please come get these pleebs?',
    user_id: 6
  },
  {
    title: 'Sparkle',
    post_content: 'Shiny hiney, sparkle in the darkle.',
    user_id: 4
  },
  {
    title: 'If it`s null is it also void?',
    post_content: 'My warranty is null, but is it truely void?',
    user_id: 6
  },
  {
    title: 'This is it, the TRUE BIG ONE.',
    post_content: 'This is the one gang! The REAL DEAL, so don`t lose sight!',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
