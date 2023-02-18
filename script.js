'use strict';

// Footer year
document.querySelector('.footer-year').textContent = new Date().getFullYear();

// Educations
const ryuUMN = {
  degree: "Bachelor's Degree, Information System",
  institution: 'Universitas Multimedia Nusantara',
  courses: [
    'Web Design and Development: Accomplished the final group project of this course by designing the “Newssissippi” website and took a part on the user interface side with HTML and CSS.',
    'Human and Computer Interaction: Designed the UI/UX display of the “Skrinol” (COVID-19 vaccination online screening application) with Figma.',
    'Database Development: Devised and built a database including entity relationship diagram, table normalization, query writing, and implemented DDL and DML with SQL.',
    'Data Visualization: Transformed weekly data sets into compelling visuals using Tableau.'
  ],
  activities: [
    'Publication assistant of annual Festival Budaya Nusantara 2022.',
    'Graphic designer of ALIVE 8.0 (UMN Medical Center annual event).',
    'Event staff of Funsport SI 2022 under the auspices of HIMSI.'
  ],
  awards: ['Finalist (Top 12) of Indonesian Capital Market Festival (ICMF) 2022 Fund Managing Competition.'],
  date: 'August 2020 - present'
};

const ryuBPK = {
  degree: 'Senior High School, Science',
  institution: 'SMAK BPK Penabur Bandar Lampung',
  activities: [
    'Head of Publication Division for 2 consecutive years in the annual event "Penabur Laser Competition 2018-2019".',
    'Publications Coordinator & Graphic Designer of PAPERS 2K19 (Pentas Seni SMAK BPK Penabur Bandar Lampung 2019).',
    'Volunteered in various school-social projects.',
    'Participated and won several competitions at high school level such as band, quick & smart, etc.',
    'Finalist of Regional Biology Olympic 2019 at SMA Al-Kautsar Lampung (Top 10 out of 50+ participants).'
  ],
  date: 'July 2017 - May 2020'
};


// Work Exps Details
const workExperiences = {
  acc: {
    uniqueCode: 'acc',
    role: 'Data Analyst',
    company: 'Astra Credit Companies',
    type: 'Internship',
    activities: [
      'Created interactive dashboards of Daihatsu brand credit approval within a certain period of time using Tableau.',
      'Be able to produced stored procedural functions for daily data preparation with SQL.', 
      'Performed daily data analysis on Daihatsu direct & indirect-selling credit validity.',
      'Introduced and learned about the business process especially in the scope of leasing company.'
    ],
    date: 'February 2023 - present'
  },
  nuwo: {
    uniqueCode: 'nuwo',
    role: 'Ecommerce Business Owner',
    company: 'Nuwo Medical Store',
    type: 'Self-employed',
    activities: [
      'Carry out active promotions on social media and making monthly financial report of sales.',
      'Actively provide daily services to customers.',
      'Responsible for packaging and shipping products to consumers throughout Indonesia.',
      'Built a partnership with some of the suppliers in and out of the city.',
      'Designed and developed high quality visual concepts on Instagram (@nuwo_medstore) to strengthen the brand image.',
      'Developing a website-based landing page.'
    ],
    date: 'June 2021 - present'
  },
  seeds: {
    uniqueCode: 'seeds',
    role: 'Frontend Web Developer',
    company: 'Seeds',
    type: 'Internship',
    activities: [
      'Fixed some of the minor bugs found by QA team on the company landing page.',
      'Implemented the user interface using existing component (UI slicing from Figma design).',
      'Given an overview of how a frontend web developer works especially with libraries and frameworks.'
    ],
    date: 'November 2022 - December 2022'
  },
  sanber: {
    uniqueCode: 'sanber',
    role: 'Bootcamp ReactJS Web Frontend',
    company: 'SanberCode',
    type: 'Apprenticeship',
    activities: [
      'Created a website <a href="https://kerjakuy.netlify.app/" class="kerjakuy" target="_blank">(KerjaKuy)</a> with Tailwind CSS and Flowbite React components as the final project.',
      'Built and deployed fully responsive UI/UX website with Netlify.',
      'Learned how to integrate the API with axios package library.',
      'Introduced to the ReactJS libraries, node package manager, and Git workflow.'
    ],
    date: 'November 2022 - December 2022'
  },
  unila: {
    uniqueCode: 'unila',
    role: 'Freelance Video Editor',
    company: 'Universitas Lampung',
    type: 'Freelance',
    activities: [
      'Produced a video to fulfill the client requirements to participate in the talent scouting academy (TSA) held by Digital Talent (Digitalent) X KOMINFO.',
      'Transformed raw footages and voice-overs into the final cuts using Adobe Premiere Pro.'
    ],
    date: 'November 2022 - December 2022'
  },
  hmjIlkom: {
    uniqueCode: 'hmj-ilkom',
    role: 'Freelance Video Editor',
    company: 'HMJ Ilmu Komunikasi Universitas Lampung',
    type: 'Freelance',
    activities: [
      "Worked closely with the director and presented a final product that matched their vision.",
      "Took up the challenge to take the raw footage shot by the clients and made it into the final visualized product.",
      "Accomplished the objective to finish 'PhotographyGenk' teaser video within 7-10 days with 4-5 revisions.",
      "Improved lighting, coloring and faulty footages."
    ],
    date: 'October 2022'
  },
  palapaRental: {
    uniqueCode: 'palapa-rental',
    role: 'Freelance Graphic Designer',
    company: 'Palapa Rental Mobil',
    type: 'Freelance',
    activities: [
      'Kept up with the client and explained the rationale behind visual concept decisions.',
      'Ensure the final of advertising design and layouts are visually appealing and on-brand.',
      'Performed a good visual skill in the making of media products including e-flyer, landing page assets, and advertising with Adobe Photoshop.',
      'Amended designs based on feedbacks given by the client.'
    ],
    date: 'September 2022 - October 2022'
  },
  central: {
    uniqueCode: 'central',
    role: 'Package Handler',
    company: 'Central Medica Lampung',
    type: 'Part-time',
    activities: [
      'Met the deadlines and maintained a professional and friendly attitude which results in an increase in client satisfaction.',
      'Trusted to wrap and ensure the quality of packaging of goods to be sent to customers.',
      "Has been able to rechecked packages to track all of the client's shipment & delivery."
    ],
    date: 'October 2019 - April 2021'
  }
};

// Organization Exps Detail
const orgsExperiences = {
  fbnUmn: {
    uniqueCode: 'fbn-umn',
    role: 'Publication Assistant',
    organizer: 'Festival Budaya Nusantara',
    activities: [
      "Assisted my team to publish a series of the event on social media.",
      "Performed a good copywriting skill in purpose to propose an engaging way to get people interests to this event.",
      "Conveyed the aims and objectives of this festival well through social media.",
      "Planned the flow of information to be published on social media.",
      'Worked and cooperated with "Anglukis" (Visual Division) as the executor of the visual concept which posted on Instagram feeds.',
      "Responsible for handling FBN's social media."
    ],
    date: 'October 2022 - November 2022'
  },
  aliveMedic: {
    uniqueCode: 'alive-medic',
    role: 'Visual Graphic Designer',
    organizer: 'ALIVE 8.0 with Tropicana Slim',
    activities: [
      'Assisted my team on developing interactive visual designs for Alive 8.0 social media.',
      'Collaborated with team for successful completion, especially in visualizing the purpose through graphic design of ongoing series.',
      'Used the appropriate colors and layouts for each graphic.',
      'Performed a strong utility usage with Figma.',
      'Worked with public relation on making the visual concept for social media.'
    ],
    date: 'September 2022 - November 2022'
  },
  funsport: {
    uniqueCode: 'funsport-si',
    role: 'Event Planner',
    organizer: 'Information System Funsport 2022',
    activities: [
      'Assisted my team to make up the rundown for 7 days series of event.',
      'One of the team representatives to be the main umpire for at least 7-8 badminton games including final game.',
      'Performed high initiative in changing the event rundown when there is a sudden problem due to committee miscommunication.'
    ],
    date: 'September 2022 - November 2022'
  },
  ppbdc: {
    uniqueCode: 'ppbdc',
    role: 'Vice President',
    organizer: 'Persaudaraan Pemuda/i Buddhayana Dharma Citra (PPBDC)',
    activities: [
      "Has been able to help the head of the organization to arrange the schedule of activities for the members of the organization.",
      "Leaded the members to follow up with Buddhism events around Lampung.",
      "Represent PPBDC at 'Musyawarah Daerah (Musda) IV Persatuan Umat Buddha Lampung' to be one of the electors on Sekber PMVBI Lampung election."
    ],
    date: 'August 2018 - June 2022'
  },
  seminarUmn: {
    uniqueCode: 'seminar-umn',
    role: 'Documentation Coordinator',
    organizer: 'Universitas Multimedia Nusantara',
    activities: [
      'Documented all of the participants on "Risk Analysis in Investments" on Seminars of Information System at Universitas Multimedia Nusantara.',
      'Accomplished the objective to set up a Zoom Meeting for 200+ participants.',
      'Kept up with the other committees for documentation section in order to catch up 200+ participants on screen.'
    ],
    date: 'March 2021'
  }
};


// Certifications
const certifications = [
  ['Vocasia+Intermediate Excel Training for Professional Employees & Jobseekers+2022+https://vocasia.id/user/get_certificate/80/13448'],
  ['Progate+Fundamental of SQL+2022+https://progate.com/course_certificate/8555e28arkm1da'],
  ['Progate+Fundamental of HTML & CSS+2022+https://progate.com/course_certificate/ebe53770rkf2q5'],
  ['Progate+Fundamental of Sass+2022+https://progate.com/course_certificate/5ded921crku32s'],
  ['Progate+Fundamental of Java+2022+https://progate.com/course_certificate/b1c207b7rku0sa'],
  ['Udemy+Build Responsive Real-World Websites with HTML and CSS+2022+https://www.udemy.com/certificate/UC-31af5594-c03e-42fd-b468-e51340c379ed/'],
  ['EF Standard English Test (EF SET)+EF SET English Certificate 64/100 (C1 Advanced)+2022+https://www.efset.org/cert/XAWdKJ'],
  ['SanberCode+Bootcamp ReactJS Web Frontend+2022+https://sanbercode.com/sertifikat/generate/6240c30e-4e01-4c5e-87c1-ab0c2b9f708f'],
  ['RevoU+Intro to Data Analytics+2023+https://certificates.revou.co/ryu-alvano-certificate-completion-damc23.pdf'],
  ['365 Careers+SQL - MySQL for Data Analytics and Business Intelligence+2023+https://www.udemy.com/certificate/UC-80d02f67-03c1-4551-b167-705c749e8214/']
];


// html docs
const sideBar = document.querySelector('.nav-three-bars');
const navHeader = document.querySelector('.nav-header');
const rightNavigations = document.querySelector('.navigations');
const navThreeBars = document.querySelector('.nav-three-bars');
const labelLiveTime = document.querySelector('.live-time');
const labelCurrDay = document.querySelector('.curr-day');
const sideContacts = document.querySelectorAll('.side-contact');
const sideArrowUp = document.querySelector('.arrow-up');

const umnRelevantLists = document.querySelector('.umn-relevant-lists');
const umnActivityLists = document.querySelector('.umn-activity-lists');
const umnAwardLists = document.querySelector('.umn-award-lists');
const labelDegreeUMN = document.querySelector('.umn-degree');
const labelInstitutionUMN = document.querySelector('.umn-institution');
const labelDateUMN = document.querySelector('.umn-date');

const bpkActivityLists = document.querySelector('.bpk-activity-lists');
const labelDegreeBPK = document.querySelector('.bpk-degree');
const labelInstitutionBPK = document.querySelector('.bpk-institution');
const labelDateBPK = document.querySelector('.bpk-date');

const workTitle = document.querySelector('.title-work-exp');
const workContainer = document.querySelector('.cont-work');
const workLists = document.querySelector('.work-exp-lists');

const orgsTitle = document.querySelector('.title-org-exp');
const orgsContainer = document.querySelector('.cont-orgs');
const orgsLists = document.querySelector('.org-exp-lists');

const certifTitle = document.querySelector('.title-certif-exp');
const certifContainer = document.querySelector('.cont-certif');
const certifLists = document.querySelector('.certif-lists');

// FOOTER LIVE-TIME
const liveTime = function() {
  // day
  let day = new Date().toLocaleDateString(['en'], { weekday: "long" });
  let date = new Date().getDate();
  let month = new Date().toLocaleString('en', { month: "long" });
  let year = new Date().getFullYear();
  
  // time
  let hour = `${new Date().getHours()}`.padStart(2, 0);
  let minute = `${new Date().getMinutes()}`.padStart(2, 0);
  let second = `${new Date().getSeconds()}`.padStart(2, 0);
  labelLiveTime.textContent = `${day}, ${date} ${month} ${year}, ${hour}:${minute}:${second}`;
};

const printLiveTime = function() {
  liveTime();
  setInterval(liveTime, 1000);
};
printLiveTime();

// Current Day
const setCurrDay = function(date) {
  const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const indexDay = date.getDay();
  labelCurrDay.textContent = `Happy ${allDays[indexDay]} !`;
};
setCurrDay(new Date());

// Header on scroll
window.addEventListener('scroll', function() {
  function greetings(date) {
    if (date.getHours() < 12 && date.getHours() >= 5) {
      return 'Good Morning !';
    } else if (date.getHours() < 18 && date.getHours() >= 12) {
      return 'Good Afternoon !';
    } else if (date.getHours() < 22 && date.getHours() >= 18) {
      return 'Good Evening !';
    } else {
      return 'Good Night !';
    };
  };
  
  if (window.scrollY > window.innerHeight) {
    navHeader.classList.add('head-on-scroll');
    
    labelCurrDay.textContent = `${greetings(new Date())}`;
    labelCurrDay.classList.add('nav-text-on-scroll');

    rightNavigations.classList.add('nav-ul-on-scroll');
    navThreeBars.style.color = '#283e4a';

    sideContacts.forEach(element => element.classList.add('side-on-scroll'));
    sideArrowUp.classList.add('show-arrow');
    
    document.getElementById('header-logo').src = 'img/logo-ryu-charcoal.png';
  } else {
    navHeader.classList.remove('head-on-scroll');
    labelCurrDay.classList.remove('nav-text-on-scroll');
    
    rightNavigations.classList.remove('nav-ul-on-scroll');
    navThreeBars.style.color = '#fff';
    
    sideContacts.forEach(element => element.classList.remove('side-on-scroll'));
    sideArrowUp.classList.remove('show-arrow');
    
    setCurrDay(new Date());

    document.getElementById('header-logo').src = 'img/logo-ryu.png';
  };
});

// EDUCATIONS
const iterateLists = function(list, arr) {
  arr.forEach(value => {
    const html = `<li class="edu-list">• ${value}</li>`;
    list.insertAdjacentHTML('beforeend', html);
  });
};

const displayDetailUMN = function(obj) {
  const { 
    degree, 
    institution, 
    courses, 
    activities, 
    awards, 
    date 
  } = obj;

  umnRelevantLists.innerHTML = '';
  umnActivityLists.innerHTML = '';
  umnAwardLists.innerHTML = '';

  labelDegreeUMN.textContent = degree;
  labelInstitutionUMN.textContent = institution;
  labelDateUMN.textContent = date;

  iterateLists(umnRelevantLists, courses);
  iterateLists(umnActivityLists, activities);
  iterateLists(umnAwardLists, awards);
  
  // courses.forEach(course => {
  //   const html = `<li class="edu-list">• ${course}</li>`;

  //   umnRelevantLists.insertAdjacentHTML('beforeend', html);
  // });

  // activities.forEach(activity => {
  //   const html = `<li class="edu-list">• ${activity}</li>`;

  //   umnActivityLists.insertAdjacentHTML('beforeend', html);
  // });

  // awards.forEach(award => {
  //   const html = `<li class="edu-list">• ${award}</li>`;

  //   umnAwardLists.insertAdjacentHTML('beforeend', html);
  // });
};
displayDetailUMN(ryuUMN);

const displayDetailBPK = function(obj) {
  const { 
    degree, 
    institution, 
    activities, 
    date 
  } = obj;

  bpkActivityLists.innerHTML = '';
  
  labelDegreeBPK.textContent = degree;
  labelInstitutionBPK.textContent = institution;
  labelDateBPK.textContent = date;

  iterateLists(bpkActivityLists, activities);
  
  // activities.forEach(activity => {
  //   const html = `<li class="edu-list">• ${activity}</li>`;

  //   bpkActivityLists.insertAdjacentHTML('beforeend', html);
  // });
};
displayDetailBPK(ryuBPK);


// WORK EXPERIENCES
const displayExps = function(work, orgs) {
  const workExps = Object.values(work);
  const orgsExps = Object.values(orgs);
  // console.log(exps);
  console.log(workExps);
  console.log(orgsExps);

  // Work Experiences
  workExps.reverse().forEach((workExp, i, arr) => {
    const {
      uniqueCode, 
      role, 
      company, 
      type, 
      activities, 
      date 
    } = workExp;

    let activityLists = "";
    activities.forEach(act => {
      const li = `<li class="exps">• ${act}</li>`;
      activityLists += li;
    });
    // console.log(activityLists);

    const html = `
      <div class="detail experience-detail">
        <div class="left-side-exp">
          <h3 class="sect-h3">${role}</h3>
          <h4 class="sect-h4">${company} <span class="employ-type">~ ${type}</span></h4>
          <ul class="sect-text work-exp-lists">
            ${activityLists}
          </ul>
        </div>
        <div class="date right-side-exp">
          <p>${date}</p>
        </div>
      </div>
    `

    workTitle.insertAdjacentHTML('afterend', html)
  });

  // Organitazion Experiences
  orgsExps.reverse().forEach((orgsExp, i, arr) => {
    const {
      uniqueCode, 
      role, 
      organizer, 
      activities, 
      date 
    } = orgsExp;

    let activityLists = "";
    activities.forEach(act => {
      const li = `<li class="exps">• ${act}</li>\n`;
      activityLists += li;
    });
    // console.log(activityLists);

    const html = `
      <div class="detail experience-detail">
        <div class="left-side-exp">
          <h3 class="sect-h3">${role}</h3>
          <h4 class="sect-h4">${organizer}</h4>
          <ul class="sect-text work-exp-lists">
            ${activityLists}
          </ul>
        </div>
        <div class="date right-side-exp">
          <p>${date}</p>
        </div>
      </div>
    `

    orgsTitle.insertAdjacentHTML('afterend', html)
  });
};
displayExps(workExperiences, orgsExperiences);

const displayCertificates = function(arr) {
  console.log(arr);

  arr.forEach(certif => {
    const certifDetail = certif.toString().split('+');
    const [ issuer, name, year, credential ] = certifDetail;
    
    const html = `
      <li class="certif"><span class="certi-span fa-solid fa-certificate"></span>[${Number(year)}] ${name} - ${issuer}</li>
      <a href="${credential}" class="credential" target="_blank">Show Credential <span class="credential-icon fa-solid fa-arrow-up-right-from-square"></span></a>
    `;

    certifLists.insertAdjacentHTML('afterbegin', html);
  });
};
displayCertificates(certifications);

// Sidebar
// sideBar.addEventListener('click', function(event) {
//   console.log(sideBar);
// });