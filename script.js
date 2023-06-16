'use strict';
import { certifications } from "./data/certificates.js";
import { umn as ryuUMN, bpk as ryuBPK } from "./data/educations.js";
import { work as workExperiences, organizations as orgsExperiences } from "./data/experiences.js";

// Footer year
document.querySelector('.footer-year').textContent = new Date().getFullYear();

// html docs
const sideBar = document.querySelector('.nav-three-bars');
const navHeader = document.querySelector('.nav-header');
const navFooter = document.querySelector('.nav-ryu-foot');
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


// ---------------------------------------------------------------------
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
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
// Current Day
const setCurrDay = function(date) {
  const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const indexDay = date.getDay();
  labelCurrDay.textContent = `Happy ${allDays[indexDay]} !`;
};
setCurrDay(new Date());
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
// Footer scroll
const anchorScroll = (e) => {
  e.preventDefault();
  const sectionId = e.target.getAttribute('href') && e.target.getAttribute('href').slice(1);

  if (e.target.classList.contains('nav-link')) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  } else if (e.target.classList.contains('curr-day') || e.target.getAttribute('id') === 'header-logo') {
    document.getElementById('about').scrollIntoView({ behavior: "smooth" });
  } else {
    return;
  }
};

navHeader.addEventListener('click', anchorScroll);
navFooter.addEventListener('click', anchorScroll);


// ---------------------------------------------------------------------
// Header on scroll
const aboutSection = document.getElementById('about');
const navHeaderHeight = navHeader.getBoundingClientRect().height;
const headerScrollCallback = function(entries, observer) {
  const [entry] = entries;

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
  
  if (!entry.isIntersecting) {
    navHeader.classList.add('head-on-scroll');
    
    labelCurrDay.textContent = `${greetings(new Date())}`;
    labelCurrDay.classList.add('nav-text-on-scroll');

    rightNavigations.classList.add('nav-ul-on-scroll');
    navThreeBars.style.color = '#283e4a';

    sideContacts.forEach(element => element.classList.add('side-on-scroll'));
    sideArrowUp.classList.add('show-arrow');
    
    document.getElementById('header-logo').src = 'img/logo-ryu-navy.png';
  } else {
    navHeader.classList.remove('head-on-scroll');
    labelCurrDay.classList.remove('nav-text-on-scroll');
    
    rightNavigations.classList.remove('nav-ul-on-scroll');
    navThreeBars.style.color = '#fff';
    
    sideContacts.forEach(element => element.classList.remove('side-on-scroll'));
    sideArrowUp.classList.remove('show-arrow');
    
    setCurrDay(new Date());

    document.getElementById('header-logo').src = 'img/logo-ryu-white.png';
  };
};

const aboutObserver = new IntersectionObserver(headerScrollCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeaderHeight}px`
});
aboutObserver.observe(aboutSection);


// ---------------------------------------------------------------------
// Fade in animations
const allContainers = document.querySelectorAll('.container-page');
const fadeInCallback = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);

  if (!entry.isIntersecting) return;

  entry.isIntersecting && entry.target.classList.remove('cont-hidden');
  observer.unobserve(entry.target);
};

const contObserver = new IntersectionObserver(fadeInCallback, {
  root: null,
  threshold: .1
});

allContainers.forEach(cont => {
  contObserver.observe(cont);
});
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
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
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
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
// ---------------------------------------------------------------------