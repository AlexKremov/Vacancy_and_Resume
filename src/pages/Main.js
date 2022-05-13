import React from 'react';

import Resume from '../components/Resume'
import Vacancy from '../components/Vacancy'

import Layout from '../layouts/main';

const data = [
  {
    type: "vac",
    profession: "API Engineer",
    pleace: "USA",
    salary: "75700-80000",
    shortDescription:
      "Yelps Business Intelligence team works with groups throughout Yelp and data from an array of diverse sources.",
    body: "At Yelp, we believe that diversity is an expression of all the unique characteristics that make us human: race, age, sexual orientation, gender identity, religion, disability, and education — and those are just a few. We recognize that diverse backgrounds and perspectives strengthen our teams and our product. The foundation of our diversity efforts are closely tied to our core values, which include “Playing Well With Others” and “Authenticity.”",
  },
  {
    type: "resum",
    profession: "Backend Developer",
    pleace: "EU",
    salary: "70000",
    shortDescription:
      "Freelance work is defining developer careers in exciting new ways. If you’re passionate about finding rapid career growth potential working with leading Fortune 500 brands and innovative Silicon Valley startups, Toptal could be a great fit for your next career shift.",
    body: "Toptal is an elite talent network made up of the world’s top 3% of developers, connecting the best and brightest freelancers with top organizations. Unlike a 9-to-5 job, you’ll choose your own schedule and work from anywhere. Jobs come to you, so you won’t bid for projects against other developers in a race to the bottom. Plus, Toptal takes care of all the overhead, empowering you to focus on successful engagements while getting paid on time, at the rate you decide, every time. Our sophisticated screening process makes sure you are provided with top clients without additional overhead, as well as assistance in maximizing the potential of your full-time freelance career. Joining the Toptal network also gives you access to technical training programs, mentors, and coaching programs, so you can connect with a global community of experts like you to share peer-to-peer knowledge and expand your network globally.",
  },
  {
    type: "vac",
    profession: "API Engineer",
    pleace: "USA",
    salary: "75700-80000",
    shortDescription:
      "Yelps Business Intelligence team works with groups throughout Yelp and data from an array of diverse sources.",
    body: "At Yelp, we believe that diversity is an expression of all the unique characteristics that make us human: race, age, sexual orientation, gender identity, religion, disability, and education — and those are just a few. We recognize that diverse backgrounds and perspectives strengthen our teams and our product. The foundation of our diversity efforts are closely tied to our core values, which include “Playing Well With Others” and “Authenticity.”",
  },
  {
    type: "vac",
    profession: "API Engineer",
    pleace: "USA",
    salary: "75700-80000",
    shortDescription:
      "Yelps Business Intelligence team works with groups throughout Yelp and data from an array of diverse sources.",
    body: "At Yelp, we believe that diversity is an expression of all the unique characteristics that make us human: race, age, sexual orientation, gender identity, religion, disability, and education — and those are just a few. We recognize that diverse backgrounds and perspectives strengthen our teams and our product. The foundation of our diversity efforts are closely tied to our core values, which include “Playing Well With Others” and “Authenticity.”",
  },{
    type: "resum",
    profession: "Backend Developer",
    pleace: "EU",
    salary: "70000",
    shortDescription:
      "Freelance work is defining developer careers in exciting new ways. If you’re passionate about finding rapid career growth potential working with leading Fortune 500 brands and innovative Silicon Valley startups, Toptal could be a great fit for your next career shift.",
    body: "Toptal is an elite talent network made up of the world’s top 3% of developers, connecting the best and brightest freelancers with top organizations. Unlike a 9-to-5 job, you’ll choose your own schedule and work from anywhere. Jobs come to you, so you won’t bid for projects against other developers in a race to the bottom. Plus, Toptal takes care of all the overhead, empowering you to focus on successful engagements while getting paid on time, at the rate you decide, every time. Our sophisticated screening process makes sure you are provided with top clients without additional overhead, as well as assistance in maximizing the potential of your full-time freelance career. Joining the Toptal network also gives you access to technical training programs, mentors, and coaching programs, so you can connect with a global community of experts like you to share peer-to-peer knowledge and expand your network globally.",
  }
];


export const Main = () => {
    return (
      <div className="App">
        <Layout>
          <p className="Latest-ads">Latest ADS</p>
          <hr />

          {data.map((list) => {
            if (list.type === "vac") {
              return (
                <Vacancy
                  name={list.profession}
                  salary={list.salary}
                  pleace={list.pleace}
                  short={list.shortDescription}
                  body={list.body}
                />
              );
            }
            return (
              <Resume
                name={list.profession}
                salary={list.salary}
                pleace={list.pleace}
                short={list.shortDescription}
                body={list.body}
              />
            );
          })}
        </Layout>
      </div>
    );
}