import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import heroImg from '~/assets/images/hero.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Our new doctor appointment management system, AppointMate, is now live and ready for use. »',
    href: '/',
  },
  callToAction2: {
    text: 'Follow @appointmate on Twitter',
    href: 'https://twitter.com/',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ],
  actions: [
    {
      text: 'Download',
      href: 'https://github.com/Nefoli-Tech/AppointMate-Frontend/releases/download/v1.0/appointmate.apk',
      targetBlank: true,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      AppointMate is a doctor appointment management system that simplifies healthcare tasks.
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          AppointMate
        </span>{' '}
        offers a seamless user experience for both patients and medical professionals.
      </span>{' '}
      With its easy-to-use interface, verified doctors, appointment history, and customizable settings, AppointMate is the perfect solution for all your healthcare management needs. 
    </>
  ),
  callToAction: {
    text: 'Download',
    href: 'https://play.google.com/store/apps/details?id=com.herald.app',
    icon: IconDownload,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn More',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'AppointMate',
  },
};


// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find quick solutions to common queries and concerns about AppointMate with our comprehensive FAQ section and multiple support channels.',
    highlight: 'FAQS',
  },
  items:[
    {
      title: 'What is AppointMate?',
      description: `AppointMate is a doctor appointment management system designed to simplify the process of scheduling appointments and managing healthcare-related tasks.`,
    },
    {
      title: 'How does AppointMate work?',
      description: `AppointMate allows patients to browse through a list of verified doctors, view their detailed information, and schedule appointments based on real-time availability. AppointMate also offers automated reminders and appointment history tracking for ease of use.`,
    },
    {
      title: 'Is AppointMate secure?',
      description: `Yes, AppointMate takes data security and privacy seriously, and the platform is built with industry-standard security measures in place to protect user data.`,
    },
    {
      title: 'Can I book appointments with any doctor through AppointMate?',
      description: `AppointMate features a list of verified doctors, and users can browse through the list and select the doctor they wish to book an appointment with based on their specialty, experience, and patient ratings.`,
    },
    {
      title: 'Is there a cost to using AppointMate?',
      description: `The cost of using AppointMate may vary depending on the individual doctor's fees and insurance coverage. However, the platform itself is free to use for patients and medical professionals.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `AppointMate offers multiple support channels to assist its users, including email support, phone support, a dedicated FAQ section on its website or app, and more. These channels are designed to provide quick and effective solutions to any questions or concerns that users may have.`,
    },
  ],
};


// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">AppointMate</span>
      </>
    ),
    subtitle:
      'Discover the Benefits of AppointMate: Simplifying Doctor Appointments and Streamlining Healthcare Management.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Easy Appointment Scheduling',
      description:
        'AppointMate allows patients to easily schedule appointments with their doctors online, with a user-friendly interface that simplifies the process.',
      icon: IconBrandTailwind,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Automated Reminders',
      description:
        'AppointMate can automatically send reminders to patients about upcoming appointments, helping to reduce no-shows and improve overall attendance.        ',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Verified Doctors',
      description:
        'AppointMate only features verified doctors, ensuring that patients can trust the medical professionals they are booking appointments with.',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Smooth User Experience',
      description:
        'AppointMate offers smooth navigation with no lag, ensuring a hassle-free experience for patients and doctors alike.',
      icon: IconRocket,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Doctor Information',
      description:
        'The system provides detailed information about doctors, including their specialties, experience, and ratings from other patients. This can help patients make informed decisions about which doctor to book appointments with.',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Appointment History',
      description:
        'AppointMate keeps a record of patients\' appointment history, making it easy for both patients and doctors to track past appointments, medications, and other relevant information.',
      icon: IconBulb,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Simple Steps to Book Your Doctor Appointment with AppointMate.',
  items: [
    {
      title: 'Step 1',
      description:
        'Sign up for an account on AppointMate and create a user profile with your basic information, including your name, contact information, and any relevant information.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        ' Browse through the list of verified doctors on AppointMate and select the doctor you wish to book an appointment with. View the doctor\'s detailed information, including their description, experience, and patient ratings to make an informed decision.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Book your appointment with the chosen doctor based on their real-time availability and wait for the doctor to confirm your appointment. You can also cancel your appointment at any time.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Meet Our Expert Team.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Roshish Shrestha',
      occupation: 'Project Manager',
      image: {
        src: 'https://media.licdn.com/dms/image/C4E03AQFh721mUykKuA/profile-displayphoto-shrink_800_800/0/1647612189948?e=1689206400&v=beta&t=vTVz1B2gVnzgYZxfhVHGAnzm8aNkUHp6EMdJm4Dhrbk',
        alt: 'Roshish Shrestha',
      },
      items: [
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Nishant Bista',
      occupation: 'Business Analyst',
      image: {
        src: 'https://media.licdn.com/dms/image/C5603AQEsnIxO5oGZtw/profile-displayphoto-shrink_800_800/0/1650261151858?e=1689206400&v=beta&t=XzshdgoFl0O2lgkyDlE2trXSkxVJ0j2Lj8oi7v62NKA',
        alt: 'Nishant Bista',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Ritesh Jung Lama',
      occupation: 'Lead Developer',
      image: {
        src: 'https://media.licdn.com/dms/image/D5603AQE1Rl1MC9wpog/profile-displayphoto-shrink_800_800/0/1680416917390?e=1689206400&v=beta&t=tk--pryNkhNCBHTANj8q9u4IcelPadIt3Bx5Ii_JiRQ',
        alt: 'Ritesh Jung Lama',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Resh Bikram Bhattarai',
      occupation: 'Developer',
      image: {
        src: 'https://media.licdn.com/dms/image/C4D03AQEWUg-LVIx0Hg/profile-displayphoto-shrink_800_800/0/1660138039731?e=1689206400&v=beta&t=MrUppadmRW068PKDgEkrGAklp0mHQUJJHiE3L0HB5vo',
        alt: 'Resh Bikram Bhattarai',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Royal Dahal',
      occupation: 'Developer',
      image: {
        src: 'https://media.licdn.com/dms/image/C4D03AQEkSvAByEBKBQ/profile-displayphoto-shrink_800_800/0/1650260207230?e=1689206400&v=beta&t=R2gV-HbFDWGclhbcLrsFJhVXtcWfQbhJw3Vdh9zA8n4',
        alt: 'Royal Dahal',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'See what our users are saying about AppointMate.',
    highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Prof. Dr. Umid Kumar Shrestha',
      occupation: 'Senior Consultant Physician',
      comment:
        'I have been using AppointMate for some time and it has made managing my appointments and patient records a breeze. The interface is easy to navigate and the verified doctor feature gives me peace of mind. Highly recommended for any healthcare professional.',
      image: {
        src: 'https://images.unsplash.com/photo-1612276529731-4b21494e6d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Ram Kumar Shrestha',
      occupation: 'Certified Public Accountant',
      comment:
        'AppointMate has made scheduling appointments with my doctor so much easier. No more long wait times on the phone or having to visit the office in person. I can easily schedule and manage my appointments from the comfort of my own home.',
      image: {
        src: 'https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Sharad Shrestha',
      occupation: 'Business Owner',
      comment:
        'I used AppointMate to find a new doctor and I was pleasantly surprised with how easy it was. I was able to browse through verified doctors in my area and read reviews from other patients before making my choice. I highly recommend AppointMate to anyone looking for a new healthcare provider.',
      image: {
        src: 'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};


// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Have any questions? Send us a message and we’ll get back to you as soon as possible.',
    highlight: 'Contact',
  },
  content:
  "Our company is located in Naxal, Kathmandu and we are always available to answer any questions or concerns you may have. Please feel free to reach out to us via phone or email during our working hours.",
  items: [
    {
      title: 'Our Address',
      description: ['Naxal', 'Kathmandu, Nepal'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +9779822877994', 'Mail: info@appointmate.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};



// Footer data
export const footerData: FooterProps = {
  title: 'AppointMate',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/Nefoli-Tech' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made with ❤️ by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/Nefoli-Tech/">
        {' '}
        Nefoli Tech
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Herald College Kathmandu', 'Naxal, Kathmandu 44600'],
    },
    {
      title: 'Phone',
      texts: ['Mobile: +9779822877994', 'Office: +9771444444'],
    },
    {
      title: 'Email',
      texts: ['Office: info@nefoli-tech.com', 'Site: https://nefoli-tech.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/Nefoli-Tech' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made with ❤️ by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/Nefoli-Tech/">
        {' '}
        Nefoli Tech
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
