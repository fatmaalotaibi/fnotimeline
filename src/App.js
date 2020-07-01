import React from "react";

//Data
import lifeTimeLine from "./data";

function App() {
  console.log(lifeTimeLine[0].name);
  return (
    <div>
      <div>
        <h1> Fatma's TimeLine</h1>
        <h4>A Journey Of Thousand Miles Begins With A Single Step</h4>
        <img
          alt="My way"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdX9QB02idCl-t9udR-UiciHo-g1VdUI1ItQ&usqp=CAU"
        />
      </div>
      <div>
        <div>
          <p>I was born in 1985</p>
          <p>My first year in school was in 1991 </p>
          <p>I graduated from High School in 2003</p>
          <p> I got married in 2004</p>
          <p>In 2004 I started learning IT in Shall Institute</p>
          <p>
            In 2005 I gave birth to the most handsome boy in the whole world,
            Mohammed
          </p>
          <p>In 2006 I gave birth to my little princes Rayan</p>
          <p>I graduated in 2007 with a diploma in Computer Skills</p>
          <p>
            In 2008 I started working in the Ministry of Social Affairs and
            Labor
          </p>
          <p>In 2013 I joined Arab Open University to study business</p>
          <p>
            I changed my work place and I joined the Public Authority of Sports
          </p>
          <p>
            I graduated in 2017 with a Bachelor’s in Business Administration{" "}
          </p>
          <p>In 2019 I decided to learn coding and I started with Swift</p>
          <p>In 2020 I joined CODED to master coding</p>
        </div>
      </div>
    </div>
  );
}

export default App;
