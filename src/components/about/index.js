//importing files that are required

import React from "react";
import "./style.css";


function ABOUT(props) {
  return (

    <div>

      <div
        className="card profiletext text-center bg-light align-items-center text-secondary"
        style={{ width: "100%", height: "95%" }}
      >
        <div
          className=" bg-light m-6 sm-12 text-center aboutCard"
          style={{ width: 300, paddingTop: 25 }}
        >

          <img src="https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/profile.jpg?raw=true" alt="img" width="250" height="225" id="Profile" />
          <h1>Varuni Sinha</h1>
        </div>
        <div className="card-body text-left " style={{ textAlign: 'justify' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a New York City-based writer, photographer, and multimedia producer. I am trained as a cultural journalist with expertise in literature and visual studies. I have written reviews for The Post and Courier, quirky pieces for Time Out New York, and produced Wikipedia entries on art for the Guggenheim.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started my career as a copywriter, creating 360-degree campaigns for global brands such as Panasonic, Yamaha, Alstom, and the Government of India. I am proficient in writing copy for print advertisements, scripting television commercials, feature films, and radio jingles. I have experience curating click worthy digital content for social media across channels aimed at diverse audiences.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My passion for writing has been fueled by a desire to understand the world I inhabit. During a brief stint in academics, I taught “Race and Politics Through Literature” at the University of Delhi. During this time, I wrote a dissertation on the history of Indian comic superheroes, tracing their origin story to Hindu gods and their American cousins.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I brought my academic bent of mind to my work as a journalist in America. While reporting for newspapers such as the Syracuse New Times, I emphasized the importance of art in school curriculums, especially in unique initiatives shown by the local orchestra to teach science through music. I also highlighted the importance of art organizations such as Redhouse in pumping life back to the city’s resurging downtown.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a festival reporter for The Post and Courier in Charleston, I critiqued the performances of world renowned filmmakers, puppeteers, magicians, and musicians. Drawing attention to the water crisis in the fast-drying Colorado river delta; mapping the history of the variations of the Sleeping Beauty tale ever narrated through time; and detailing the intricate wonder of Vietnam’s 11th century water puppet dance that originated in paddy fields for a global audience — were stories that I enjoyed writing.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After moving to New York City, I produced listicles and features for the “Things To Do” column at Time Out New York. I created a roster of daily, weekly, and monthly events for New Yorkers to pick from when out and about in the city. I worked as an assistant editor at the Adventure Publishing Group, reviewing the latest games, gizmos, and gadgets for The Toy Insider, where I also critiqued web series, cartoons, and films for children.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I also wrote a career column for millennials for The Entry Revel — a digital platform aimed at providing bite-sized advice in a format suited to the demeanor of Gen Y. Simultaneously, I worked as an entertainment reporter for Evo News and contributed personal essays to The Elite Daily. I also worked for The Bowery Mission in East Harlem to teach life skills through art and creative writing to youth at risk.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have completed courses in visual storytelling from the School of Visual Arts; filmmaking from New York University; and am learning to code from Columbia University. I feel that the way people will interact with stories, whether news articles or books, is about to undergo a radical change in the future. Being equipped with skills to combine new-age technology with an engaging voice as a writer is my current goal. I have continued to learn even after graduating as an arts journalist from the S.I. Newhouse School of Public Communications at Syracuse University.
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When I am not writing, I am usually scratching away at my canvas, painting with my fingers and nails. As a child, I made illustrations for a children’s book series “Japanese Folktales” and cartoons for a geography textbook prescribed in the national syllabus in India. I have also exhibited paintings in solo and group exhibitions in galleries across India, including New Delhi, Chandigarh, and Pondicherry.
        </div>

      </div>
    </div>
  );
}

export default ABOUT;
