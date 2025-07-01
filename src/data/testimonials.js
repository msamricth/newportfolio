// ~/data/testimonials.js
export const testimonials = [
  {
    name: "Marc Broad",
    title: "VP Digital at Response Marketing",
    date: "May 5, 2025",
    // keep the original HTML:
    body: `
      <p class='mb-6 placeholder-line' data-splitting="words">
        “During the year Emm spent with us, she made a clear and lasting impression — not just through work that was delivered, but in how she showed up.
        Emm brought a spirit of curiosity and a real willingness to dive into new things, often rolling up their sleeves and jumping into unfamiliar territory without hesitation.
      </p>
      <p class='mb-6 font-bold placeholder-line' data-splitting="words">
        It was refreshing to work with someone so open to learning, so comfortable navigating new tools and approaches.
        Whether the task was clear or a bit undefined, Emm approached it with a positive mindset and genuine interest in figuring it out.
      </p>
      <p class='placeholder-line' data-splitting="words">
        A thoughtful, grounded presence on the team, and their growth mindset was contagious. I'm confident Emm will bring that same spark and self‐starter attitude wherever she lands next.”
      </p>
    `.trim(),
    // add a plain‐text array of paragraphs:
    bodyPlain: [
      `“During the year Emm spent with us, she made a clear and lasting impression — not just through work that was delivered, but in how she showed up. Emm brought a spirit of curiosity and a real willingness to dive into new things, often rolling up their sleeves and jumping into unfamiliar territory without hesitation.”`,
      `“It was refreshing to work with someone so open to learning, so comfortable navigating new tools and approaches. Whether the task was clear or a bit undefined, Emm approached it with a positive mindset and genuine interest in figuring it out.”`,
      `“A thoughtful, grounded presence on the team, and their growth mindset was contagious. I'm confident Emm will bring that same spark and self‐starter attitude wherever she lands next.”`
    ],
    width: 'lg:max-w-[26vw]'
  },
  {
    name: "Matthew Baranauskas",
    title: "Executive Director of Design Strategy at Supply",
    date: "March 15, 2024",
    body: `
      <p class='mb-6 placeholder-line' data-splitting="words">
        “I've partnered closely with Emm for two years now. In those two years, I've seen Emm excel at identifying and implementing creative engineering strategies that help clients and teams achieve their goals.
        Emm is highly skilled at overcoming complex technical challenges and identifying creative development solutions. This talent and attention to detail set Emm apart as a development partner, allowing them to create compelling user experiences that help brands stand out and delight their customers.
      </p>
      <p class='mb-6 placeholder-line font-bold' data-splitting="words">
        Emm's development prowess helped Supply bring several digital experiences to market for key accounts, including Dr. Martens, Autodesk, and United Malt Group.
        A recent achievement of Emm's that stands out is their work helping Dr. Martens rebuild their Store Locator experience — making it more useful and engaging to customers and more straightforward for Dr. Martens' retail marketing team to update.
        This request made using the existing CMS problematic, so Emm developed an off‐platform approach leveraging Airtable as a CMS.
        This strategy provided a flexible and scalable solution, enabling the marketing team to update and deploy changes on the fly without involving their internal development team.
      </p>
      <p class='placeholder-line' data-splitting="words">
        Emm's ability to think strategically about technology problems and identify creative solutions, paired with their unwavering attention to detail, made this project and many other project initiatives successful at Supply.
        Emm is a development thought partner that every team is trying to create something better for their customer's needs!”
      </p>
    `.trim(),
    bodyPlain: [
      `“I've partnered closely with Emm for two years now. In those two years, I've seen Emm excel at identifying and implementing creative engineering strategies that help clients and teams achieve their goals. Emm is highly skilled at overcoming complex technical challenges and identifying creative development solutions. This talent and attention to detail set Emm apart as a development partner, allowing them to create compelling user experiences that help brands stand out and delight their customers.”`,
      `“Emm's development prowess helped Supply bring several digital experiences to market for key accounts, including Dr. Martens, Autodesk, and United Malt Group. A recent achievement of Emm's that stands out is their work helping Dr. Martens rebuild their Store Locator experience — making it more useful and engaging to customers and more straightforward for Dr. Martens' retail marketing team to update. This request made using the existing CMS problematic, so Emm developed an off‐platform approach leveraging Airtable as a CMS. This strategy provided a flexible and scalable solution, enabling the marketing team to update and deploy changes on the fly without involving their internal development team.”`,
      `“Emm's ability to think strategically about technology problems and identify creative solutions, paired with their unwavering attention to detail, made this project and many other project initiatives successful at Supply. Emm is a development thought partner that every team is trying to create something better for their customer's needs!”`
    ],
    width: 'lg:max-w-[48vw]'
  },
  {
    name: "Ted Helprin",
    title: "Managing Partner at Supply",
    date: "February 29, 2024",
    body: `
      <p class='mb-6 placeholder-line' data-splitting="words">
        “Here’s a recommendation wrapped in a retrospective.
        I’ve worked closely with designers for 30 years. Indeed, bringing great design into the world has kind of been my reason for being for most of my career.
        My focus has been on the front‐end of this process—the understanding of needs and pain points, the discovery and experimentation, the visualization, storytelling, prototyping and evaluation.
        (Mind you I do almost none of this myself—I’m like Zelig, turning up with unaccountable frequency, though mostly just trying to stay out of the way.)
        In this latter part of my career I’ve been closer to the making and building end of things. Again, I do nothing myself, but I’ve learned a lot about the types of partnerships between designers and developers that yield great results.
      </p>
      <p class='mb-6 placeholder-line' data-splitting="words">
        Great designers can dance the tarantella on the steepest part of the learning curve—where they-don’t-know-what-they-don’t-know is a fine place to start making the magic happen.
        But rare is the developer who brings a sense of calm and ease while partnering with a designer in this early phase of a project. And it’s needed, that early partnership.
        If you involve a developer early and often, you give yourself a chance of not spelunking your way into a challenge you can’t back out of.
        Developers keep designers from designing flying carpets. The best developers are awesome problem solvers who, having internalized the design intent, are priceless route finders between “should” and “can.”
        I believe developers are often the unsung heroes behind making great design happen.
      </p>
      <p class='mb-6 placeholder-line font-bold' data-splitting="words">
        These are the thoughts that went through my head when my former colleague at Supply, Emm Talarico, asked for a recommendation.
        Emm is that rare developer with a designer’s eye. She’s a problem solver who will keep you honest, but isn’t going to “value engineer” a perfectly good design into something unrecognizable.
        She’s fairly early in her career, but makes up for it with a trojan’s work ethic and ample google-foo. (She also races BMX bikes, so that’s cool.)
        Emm recently thanked us for “taking a chance” on her. I don’t really think of it that way—more like, we feel lucky to have had the chance to work with Emm. And now you do too.
      </p>
      <p class='placeholder-line' data-splitting="words">
        “Here’s to Emm Talarico, and all the great developers out there partnering to make great design real.”
      </p>
    `.trim(),
    bodyPlain: [
      `“Here’s a recommendation wrapped in a retrospective. I’ve worked closely with designers for 30 years. Indeed, bringing great design into the world has kind of been my reason for being for most of my career. My focus has been on the front‐end of this process—the understanding of needs and pain points, the discovery and experimentation, the visualization, storytelling, prototyping and evaluation. (Mind you I do almost none of this myself—I’m like Zelig, turning up with unaccountable frequency, though mostly just trying to stay out of the way.) In this latter part of my career I’ve been closer to the making and building end of things. Again, I do nothing myself, but I’ve learned a lot about the types of partnerships between designers and developers that yield great results.”`,
      `“Great designers can dance the tarantella on the steepest part of the learning curve—where they-don’t-know-what-they-don’t-know is a fine place to start making the magic happen. But rare is the developer who brings a sense of calm and ease while partnering with a designer in this early phase of a project. And it’s needed, that early partnership. If you involve a developer early and often, you give yourself a chance of not spelunking your way into a challenge you can’t back out of. Developers keep designers from designing flying carpets. The best developers are awesome problem solvers who, having internalized the design intent, are priceless route finders between “should” and “can.” I believe developers are often the unsung heroes behind making great design happen.”`,
      `“These are the thoughts that went through my head when my former colleague at Supply, Emm Talarico, asked for a recommendation. Emm is that rare developer with a designer’s eye. She’s a problem solver who will keep you honest, but isn’t going to “value engineer” a perfectly good design into something unrecognizable. She’s fairly early in her career, but makes up for it with a trojan’s work ethic and ample google-foo. (She also races BMX bikes, so that’s cool.) Emm recently thanked us for “taking a chance” on her. I don’t really think of it that way—more like, we feel lucky to have had the chance to work with Emm. And now you do too.”`,
      `“Here’s to Emm Talarico, and all the great developers out there partnering to make great design real.”`
    ],
    width: 'lg:max-w-[82vw]'
  }
]
