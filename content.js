
//array of section objects. each object has an id string, id subpath, and another nested array containing 3-4 subsection objects.
// subsection objects are pretty simple. subsubpath refers to URL path for routing and linking.
const Content = [
  {
    id: 'Introduction - DRIVEN Men',
    subpath: 'intro',
    subsections: [
      {
        title: 'WELCOME',
        subsubpath: 'welcome', //have full path (?)
        heading: 'Welcome to The FAMILY!!!',
        videoLink: 'https://player.vimeo.com/video/465418484', 
        path: '/welcome.md'
        //buttons
      }, //to add a new subsection, copy paste this code and change the fields

      {
        title: 'THE FACTS',
        subsubpath: 'thefacts',
        heading: 'The Facts',
        videoLink: 'https://youtu.be/87VRaM5_bAE',
        path: '/the facts.md' //take out spaces
      },

      {
        title: 'THE FUTURE',
        subsubpath: 'thefuture',
        heading: 'Constructing You',
        videoLink: '',
        path: '/the future.md'
      },

      {
        title: 'THE DECLARATION',
        subsubpath: 'declaration',
        heading: 'The Declaration',
        videoLink: '',
        path: '/the declaration.md'
      }
    ] 
  

  },

  {
    id: 'Pillar I - Daily Routine',
    subpath: 'pillar1',
    subsections: [
       {
        title: 'HABITS TRAINING - SCHEDULING YOUR WEEK',
        subsubpath: 'habits',
        heading: 'Setting Up Your Weekly Gameplan',
        videoLink: 'https://player.vimeo.com/video/423982894',
        path: '/gameplan.md'
      }
    ]

  },

  {
    id: 'Pillar II - Nutrition',
    subpath: 'pillar2',
    subsections: [ {
        title: 'Creating Your Meal Plan Using the DRIVEN Diet 2.0',
        subsubpath: 'mealplan',
        heading: 'Your Nutrition',
        videoLink: '',
        path: '/nutrition.md'
      },

       {
        title: 'Nutrition Recap and Grocery Shopping',
        subsubpath: 'grocery',
        heading: 'Grocery Shopping + Nutrition Recap',
        videoLink: 'https://player.vimeo.com/video/424406320',
        path: '/groceryshopping.md'
      },

       {
        title: 'Bonus: How to Meal Prep Efficiently Using a Slow Cooker',
        subsubpath: 'bonus',
        heading: 'Bonus - Meal Prepping With the Slow Cooker',
        videoLink: 'https://player.vimeo.com/video/424448507',
        path: '/slowcooker.md'
      }
    ]

  },

  {
    id: 'Pillar III - Training',
    subpath: 'pillar3',
    subsections:[
      {
        title: 'Mind Muscle Control + Strength Progression = Muscle Growth',
        subsubpath: 'control',
        heading: 'Training Principle 1 - Technique and Mind Muscle Control',
        videoLink: 'https://player.vimeo.com/video/424410490',
        path: '/training1.md'
      },

      { 
        title: 'Strength Training - Gain Strength to Gain Muscle',
        subsubpath: 'strength',
        heading: 'Training Principle 2 - Strength Training',
        videoLink: 'https://player.vimeo.com/video/424410611',
        path: '/training2.md'

      },

      {
        title: 'Setting Up the DRIVEN Men App',
        subsubpath: 'drivenmenapp',
        heading: 'Setting up the DRIVEN Men App',
        videoLink: 'https://player.vimeo.com/video/424431191',
        path: '/drivenmenapp.md'
      }
    ]

  },

  {
    id: 'Miscellaneous Resources',
    subpath: 'misc',
    subsections:[
        {
        title: 'Link to Your Weekly Check-In Form',
        subsubpath: 'weeklyform',
        heading: 'The Weekly Progress Report',
        videoLink: 'https://youtu.be/kATqcIRnXAw',
        path: '/progressreport.md'
      }
    ]
  }


];

export default Content;