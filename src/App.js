import React from 'react';
import Section from "./Section";
import Weather from "./Weather";

export default function App() {
   return (
   <Section sity="Погода Київ ">
       <Weather Weatherlink="https://s.44.ua/section/newsInText/upload/images/news/intext/000/051/561/screenshot-7_5df741a306881.png"/>
   </Section>
)};