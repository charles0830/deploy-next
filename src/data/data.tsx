import {
  AcademicCapIcon,
  CalendarIcon,
  // DownloadIcon,
  FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
  LocationMarkerIcon
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.png';
import testimonal1 from '../images/portfolio/t-1.png';
import testimonal2 from '../images/portfolio/t-2.png';
import testimonal3 from '../images/portfolio/t-3.png';
import profilepic from '../images/me.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
 export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Richard Frank.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100">Seasoned  Full-Stack Developer</strong> with over <strong className="text-stone-200">10 years</strong> of experience 
      creating highly maintainable software products with test automation experience.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Thanks to <strong className="text-stone-100">Great Communication Skills</strong> and a
      <strong className="text-stone-100"> Keen Eye for specification analysis</strong>, 
      I delivers <strong className="text-stone-100">bug-free solutions</strong> that 100% meet the client's requirements.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
 export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Nationality', text: 'USA', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding, Photography, Camping', Icon: SparklesIcon},
    {label: 'Study', text: 'California Institute of Technology', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
 export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Angular',
        level: 10,
      },
      {
        name: 'Vue',
        level: 9,
      },
      {
        name: 'TailwindCss',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Laravel',
        level: 10,
      },
      {
        name: 'AWS',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Swift',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
 export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sky Store',
    description: "Sky Store is an easy way to buy or rent the biggest blockbusters or all time classic movies whenever you want, any time, anywhere. I've worked with the back-end team in order to deliver a flexible and scalable platform that is used by multiple types of devices.",
    url: 'https://www.skystore.com/',
    image: porfolioImage1,
  },
  {
    title: 'MyCurrencyTransfer',
    description: 'Currency transfer and exchange rate comparisons. Technologies used include Ruby 2.0, Rails API 4.0, BDD, Capistrano, Sidekiq messaging and workers, and MySQL.',
    url: 'http://www.mycurrencytransfer.com/',
    image: porfolioImage2,
  },
  {
    title: 'Farm4Trade',
    description: 'A mobile platform to connect farmers and breeders to improve farming production and trading systems. Used the MEAN stack (MongoDB, Express, AngularJS, and Node.js), Ionic framework, Chef, Redis, and PhoneGap.',
    url: 'http://farm4trade.com/',
    image: porfolioImage3,
  },
  {
    title: 'Ferrari',
    description: "This site features cloud infrastructure design for all web properties of the group. The scope of the project was the migration from classic hosting to a multi-zone cloud environment.We chose Amazon AWS and we redesigned apps to take advantage of all AWS components like computational instances, dedicated databases, load balancers, Memcached servers,and CDN, along with PHP optimizations. Load tests demonstrated good results, with >80% savings on starting costs. Nowadays, the infrastructure is composed by several EC2 instances and several RDS instances in multi-zone + multi-read replicas. We increased the total number of instances up to 200. The infrastructure also takes advantage of Amazon S3 and CloudFront.",
    url: 'http://ferrari.com/',
    image: porfolioImage4,
  },
  {
    title: 'DocSpring ',
    description: 'I built the DocSpring web application with Ruby on Rails and React. DocSpring provides a PDF generation API for developers. I also built automatic web form generation, e-signatures, and many other features.',
    url: 'https://docspring.com',
    image: porfolioImage5,
  },
  {
    title: 'SudoBlock',
    description: 'I built a mobile game using React Native (one codebase for iPhone, Android, Windows, and web).',
    url: 'https://sudoblock.com/',
    image: porfolioImage6,
  },
  {
    title: 'Race for MVP',
    description: 'A data-driven dashboard built with D3 and CSS3. User Profiles are updated based on dragging stat sliders. Shows the number of relevant games in statistical thresholds. Presets for different relevant statistical combinations. Graphs the represent individual games versus season average. Filtering and graph updates highlight piece.',
    url: 'http://raceformvp.com/',
    image: porfolioImage7,
  },
  {
    title: 'NYC Street Dangers',
    description: 'Using SVG, Leaflet, SVG, CSS, R, and JavaScript, I cleaned and analyzed data to create this visualization of car accidents in NYC. We attempted to show the most dangerous areas of NYC.',
    url: 'http://admin.1point21interactive.com/nyc-streets/',
    image: porfolioImage8,
  },
  {
    title: 'Downeast Capital',
    description: 'A SPA (single-page application) website for a private mortgage company. It utilizes serverless hosting using AWS S3, CloudFront, Lambda, Route53, and SES. It was developed using Vue.js, Vuex, Vuetify.js, and Nuxt.js.',
    url: 'https://downeastcapital.com/',
    image: porfolioImage9,
  },
  {
    title: 'QuoteManagement System',
    description: 'I joined this company when they had a proof-of-concept SPA written with the first version of React, after Facebook had just released it. My duty was to fix bugs and add new features. As the product evolved, I realized that the current architecture is no longer extendable and proposed that we rewrite it using the modern React patterns, such as Redux and Router. I architected the new product, making it more robust and easily extendable. The addition of Redux allowed us to have all the data in one place and add unit tests. After this success, I was asked to develop two more applications for them, a kitchen visualizer with real-time updates based on user selection of the granite, and a back-end dashboard for the fabricators. Both projects were delivered in time.',
    url: 'http://demo.quotecountertops.com/kv',
    image: porfolioImage10,
  },
  {
    title: 'GIS Analysis Software',
    description: 'I developed a production site analysis software for doctors. After choosing a location, a doctor can see how many people live in the vicinity and other details about them. The front end is built with Vue.js, and the back end with Node.js is hosted on an EC2 instance. For the database, I used RDS with PostgreSQL.',
    url: 'https://smartmap.at/',
    image: porfolioImage11,
  },
];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const education: TimelineItem[] = [
  {
    date: 'April 2006 - August 2010',
    location: 'California Institute of Technology',
    title: 'Bachelor of Computer Science',
    content: <p></p>,
  }
];
export const experience: TimelineItem[] = [
  {
    date: 'March 2018 - July 2021',
    location: 'Newforma',
    title: 'Senior Full-Stack Developer',
    content: (
      <div>
        <ul className='list-disc'>
          <li>Created a continuous deployment workflow using Docker, Heroku, and Nginx.</li>
          <li>Converted the starting Node/React project into a production-ready solution using Docker, Heroku, and AWS.</li>
          <li>Developed with serverless Node.js and JavaScript.</li>
          <li>Used Elastic search to support indexing and search for various documents.</li>
          <li>Worked on a distributed team that operated under an Agile methodology.</li>
          <li>Deployed the ode to AWS using Cloud Formation and monitored such uisng CloudWatch and X-Ray.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'May 2015 - July 2017',
    location: 'GAIN Fitness',
    title: 'Front-end Engineer',
    content: (
      <div>
        <ul className='list-disc'>
          <li>Created the admin application of the web store in React.</li>
          <li>Replaced Redux with Apollo Client for GraphQl against a Node back-end.</li>
          <li>Created a HOC architecture to reuse common GraphQL functionality for listing and filtering.</li>
          <li>Created our own custom UI library with styled components.</li>
          <li>Used HOC for form manipulation.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2011 - September 2014',
    location: 'GeneCentrix',
    title: 'Software Engineer',
    content: (
      <div>
        <ul className='list-disc'>
          <li>Built single-page web applications using AngularJS and Google Closure.</li>
          <li>Created scalable back-ends serving RESTful APIs with Python, Go and Java.</li>
          <li>Developed big data pipelines.</li>
          <li>Wrote a Chrome extension for troubleshooting Google Analytics deployments.</li>
          <li>Integrated and conducted end-to-end and performance stress testing of the built tools.</li>
        </ul>
      </div>
    ),
  }
];

/**
 * Testimonial section
 */
 export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: "Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.",
      image: testimonal1,
    },
    {
      name: 'Linda Allbright',
      text: 'I chose Richard because we received great customer service from the first inquiry, he is very professional, the work agreement is reassuring, and the testimonials on the website were good. Overall, a very professional experience, great process, and really friendly and committed  developer.',
      image: testimonal2,
    },
    {
      name: 'Damion Sinclair',
      text: 'I continue to be impressed with your ability to run such a polished and professional application. The application and the ongoing support and improvements have allowed us to successfully introduce the product in a very competitive market. The data that it provides is used to make investment decisions and to help manage the safety and soundness of US banks. I’m proud of what you’ve created and I sincerely thank you.',
      image: testimonal3,
    },
  ],
};

/**
 * Contact section
 */

// export const contact: ContactSection = {
//   headerText: 'Get in touch.',
//   description: 'If you have a project idea in mind, please get in touch.I will be happy to discuss ideas with you and how we can work together.',
//   items: [
//     // {
//     //   type: ContactType.Email,
//     //   text: 'reachout@timbaker.me',
//     //   href: 'mailto:reachout@timbaker.me',
//     // },
//     // {
//     //   type: ContactType.Location,
//     //   text: 'Victoria BC, Canada',
//     //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
//     // },
//     // {
//     //   type: ContactType.Instagram,
//     //   text: '@tbakerx',
//     //   href: 'https://www.instagram.com/tbakerx/',
//     // },
//     // {
//     //   type: ContactType.Github,
//     //   text: 'tbakerx',
//     //   href: 'https://github.com/Apollo-111',
//     // },
//   ],
// };

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Apollo-111'},
  {label: 'Location', Icon: LocationMarkerIcon, href: 'https://www.google.com/maps/place/Los+Angeles,+CA,+USA/'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
