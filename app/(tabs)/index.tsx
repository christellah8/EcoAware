import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
  ScrollView, SafeAreaView, Linking, Platform
} from 'react-native';
import Svg, { Path, Circle, Line, Polyline, Polygon, Rect } from 'react-native-svg';

// ─────────────────────────────────────────────────────────────────
// SVG ICONS
// ─────────────────────────────────────────────────────────────────
const IconLeaf = ({ size = 24, color = '#2d6a4f' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconBook = ({ size = 24, color = '#2d6a4f' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconPlay = ({ size = 24, color = '#2d6a4f' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <Polygon points="10 8 16 12 10 16 10 8" fill={color}/>
  </Svg>
);
const IconBrain = ({ size = 24, color = '#2d6a4f' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.14z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.14z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconInfo = ({ size = 24, color = '#2d6a4f' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <Line x1="12" y1="16" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="12" y1="8" x2="12.01" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
  </Svg>
);
const IconBack = ({ size = 22, color = '#1a3a2a' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line x1="19" y1="12" x2="5" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <Polyline points="12 19 5 12 12 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconChevDown = ({ color = '#999' }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Polyline points="6 9 12 15 18 9" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconChevUp = ({ color = '#999' }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Polyline points="18 15 12 9 6 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconTriangle = ({ color = 'white' }) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Polygon points="5 3 19 12 5 21 5 3" fill={color}/>
  </Svg>
);
const IconLink = ({ color = 'rgba(255,255,255,0.7)' }) => (
  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none">
    <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Polyline points="15 3 21 3 21 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Line x1="10" y1="14" x2="21" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
);
const IconTrophy = ({ size = 36, color = '#c4872a' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9H3V4h3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M18 9h3V4h-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M6 4h12v7a6 6 0 0 1-12 0z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <Line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <Line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </Svg>
);
const IconRetry = ({ color = 'white' }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Polyline points="23 4 23 10 17 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconHome = ({ color = '#1a3a2a' }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Polyline points="9 22 9 12 15 12 15 22" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconGlobe = ({ color = '#c47a2b' }) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <Line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2"/>
    <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={color} strokeWidth="2"/>
  </Svg>
);
const IconSun = ({ color = 'white' }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2"/>
    <Line x1="12" y1="1" x2="12" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="12" y1="21" x2="12" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="1" y1="12" x2="3" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="21" y1="12" x2="23" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
);
const IconDroplet = ({ color = 'white' }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconTree = ({ color = 'white' }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path d="M12 22V12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M12 12L7 7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M12 12L17 7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M20 10l-8-8-8 8h4v5h8v-5h4z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconTrash = ({ color = 'white' }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Polyline points="3 6 5 6 21 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M10 11v6M14 11v6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const IconThermometer = ({ color = 'white' }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────
const topics = [
  {
    bg:'#e84040', icon:<IconThermometer color="white"/>,
    label:'Climate Change',
    summary:'The long-term alteration of temperature and typical weather patterns across the Earth.',
    detail:`🌡️ What is Climate Change?\nClimate change refers to long-term shifts in global temperatures and weather patterns. While some change is natural, since the 1800s human activities have been the main driver — primarily the burning of coal, oil, and gas.\n\n📊 Key Facts:\n• Global temperatures have already risen 1.1°C above pre-industrial levels\n• The last decade (2011–2020) was the warmest on record\n• Arctic ice is melting 3x faster than the global average\n• Sea levels are rising about 3.3mm per year\n• Extreme weather events (floods, droughts, heatwaves) are increasing\n\n💨 Main Causes:\nBurning fossil fuels releases CO2 and methane into the atmosphere. These greenhouse gases trap heat from the sun, warming the planet. Deforestation makes this worse by removing trees that would normally absorb CO2.\n\n🌍 Impacts:\nRising seas threaten coastal cities. Changing rainfall patterns affect farming and food supplies. Coral reefs are bleaching and dying. Species are going extinct at an alarming rate.\n\n✅ What You Can Do:\n• Switch to renewable energy at home\n• Reduce meat and dairy consumption\n• Use public transport or cycle instead of driving\n• Insulate your home to use less heating\n• Plant trees and support reforestation projects\n• Vote for climate-conscious leaders`,
  },
  {
    bg:'#c4872a', icon:<IconTrash color="white"/>,
    label:'Plastic Pollution',
    summary:'The accumulation of plastic objects and particles in the Earth\'s environment, harming wildlife and ecosystems.',
    detail:`🗑️ What is Plastic Pollution?\nPlastic pollution occurs when plastic materials accumulate in the environment in ways that damage wildlife, their habitat, and humans. Plastic is durable and does not biodegrade — it can persist in the environment for up to 500 years.\n\n📊 Key Facts:\n• Over 8 million tonnes of plastic enter the oceans every year\n• Only 9% of all plastic ever made has been recycled\n• 1 million plastic bottles are bought every minute worldwide\n• Plastic has been found in the deepest ocean trenches and on the highest mountains\n• Microplastics have been discovered in human blood, lungs, and breast milk\n\n🐠 Impact on Wildlife:\nMarine animals such as turtles, whales, and seabirds often mistake plastic for food. Over 1 million seabirds and 100,000 marine mammals die from plastic pollution each year. Fishing nets and plastic packaging entangle animals, causing injury and death.\n\n🔬 Microplastics:\nWhen plastic breaks down, it forms tiny particles called microplastics. These enter the food chain when fish and shellfish eat them. Humans then consume microplastics through seafood, drinking water, and even the air we breathe.\n\n✅ What You Can Do:\n• Refuse single-use plastics such as straws, bags, and cups\n• Carry a reusable water bottle and shopping bag\n• Choose products with minimal or plastic-free packaging\n• Participate in local beach or park clean-up events\n• Support businesses with sustainable packaging policies\n• Recycle correctly — rinse containers before recycling`,
  },
  {
    bg:'#2d6a4f', icon:<IconTree color="white"/>,
    label:'Deforestation',
    summary:'The purposeful clearing of forested land for agriculture, logging, or urban development.',
    detail:`🌲 What is Deforestation?\nDeforestation is the large-scale removal of forests, often converted to farmland, urban areas, or used for timber. It is one of the leading contributors to climate change and biodiversity loss.\n\n📊 Key Facts:\n• 15 billion trees are cut down every year globally\n• We have lost approximately 46% of the world's trees since the start of human civilisation\n• Tropical rainforests like the Amazon are cleared at a rate of 1 football field every single second\n• Forests cover about 31% of the world's land area — down from 50% in the past\n• Deforestation accounts for up to 10% of global carbon emissions\n\n🌿 Why Are Forests So Important?\nForests are often called the "lungs of the Earth." They absorb CO2, produce oxygen, regulate rainfall, and support over 80% of the world's terrestrial biodiversity. They also protect watersheds, prevent flooding, and are home to millions of indigenous people.\n\n🐆 Biodiversity Loss:\nWhen forests are cleared, the animals and plants that depend on them lose their habitat. Species such as orangutans, jaguars, and thousands of insects face extinction. Scientists estimate we are losing species at 1,000 times the natural background rate.\n\n✅ What You Can Do:\n• Reduce paper use and choose recycled paper products\n• Avoid products containing unsustainable palm oil\n• Choose FSC-certified wood and paper products\n• Support organisations planting trees (e.g. Trees for the Future)\n• Eat less beef — cattle ranching is the leading cause of Amazon deforestation\n• Raise awareness in your school or community`,
  },
  {
    bg:'#2196f3', icon:<IconDroplet color="white"/>,
    label:'Water Scarcity',
    summary:'The lack of sufficient available fresh water resources to meet the demands of water usage.',
    detail:`💧 What is Water Scarcity?\nWater scarcity means there is not enough clean fresh water to meet the needs of a population. It affects every continent and is worsening due to climate change, population growth, and pollution.\n\n📊 Key Facts:\n• Only 3% of the world's water is fresh — and most of that is frozen in glaciers\n• Less than 1% of Earth's water is accessible for human use\n• 2 billion people currently live in countries experiencing high water stress\n• By 2025, up to two-thirds of the world's population could face water shortages\n• Women and girls in developing countries spend 200 million hours every day collecting water\n• Agriculture accounts for 70% of global fresh water use\n\n🌊 Causes of Water Scarcity:\nOver-extraction of groundwater, pollution of rivers and lakes, climate change reducing rainfall, and rapidly growing urban populations all contribute to the crisis. Many aquifers — underground water stores — are being emptied faster than they can refill.\n\n🏥 Health Impacts:\nLack of clean water causes diseases such as cholera, typhoid, and dysentery. Around 3.5 million people die each year from water-related diseases. Children are especially vulnerable, with diarrhoea being a leading cause of death in young children worldwide.\n\n✅ What You Can Do:\n• Fix leaking taps — a dripping tap wastes up to 15 litres of water per day\n• Take shorter showers and turn off the tap when brushing teeth\n• Use a water-efficient washing machine and dishwasher\n• Collect rainwater to water your garden\n• Eat less water-intensive food such as beef and almonds\n• Support clean water charities working in developing countries`,
  },
  {
    bg:'#f4a261', icon:<IconSun color="white"/>,
    label:'Renewable Energy',
    summary:'Energy derived from natural sources that are naturally replenished on a human timescale.',
    detail:`☀️ What is Renewable Energy?\nRenewable energy comes from natural sources that are constantly replenished — such as sunlight, wind, water, and heat from the Earth. Unlike fossil fuels, renewables produce little to no greenhouse gas emissions.\n\n📊 Key Facts:\n• Renewables now provide over 30% of global electricity generation\n• Solar panel costs have fallen by over 90% in the last decade\n• Wind energy is the fastest-growing energy source in the world\n• In 2023, renewables added more new electricity capacity than ever before in history\n• Iceland generates nearly 100% of its electricity from renewables\n• The energy from one hour of sunlight could power the entire world for a year\n\n⚡ Types of Renewable Energy:\n🌞 Solar — Panels convert sunlight into electricity. Great for homes, businesses, and large solar farms.\n💨 Wind — Turbines convert wind into electricity. Offshore wind farms are increasingly powerful.\n💧 Hydropower — Moving water drives turbines. Currently the largest source of renewable electricity.\n🌋 Geothermal — Heat from inside the Earth used for heating and electricity.\n🌱 Biomass — Organic materials such as wood and crop waste burned for energy.\n\n🔋 Benefits:\nRenewables reduce air pollution, create jobs, lower energy bills long-term, and reduce dependence on imported fossil fuels. They are becoming cheaper every year.\n\n✅ What You Can Do:\n• Switch your home energy supplier to a green/renewable tariff\n• Install solar panels if possible\n• Buy an electric vehicle or use public transport\n• Support policies that invest in renewable infrastructure\n• Reduce overall energy use at home by insulating and using LED lighting`,
  },
];

// ─────────────────────────────────────────────────────────────────
// TOPIC QUIZ DATA — 5 questions per topic
// ─────────────────────────────────────────────────────────────────
const quizTopics = [
  {
    label: 'Climate Change',
    bg: '#e84040',
    icon: 'thermometer',
    questions: [
      { q: 'What is the main greenhouse gas causing climate change?',         opts: ['CO2', 'O2', 'N2', 'H2O'],                                                    ans: 'CO2' },
      { q: 'By how much have global temperatures risen since pre-industrial times?', opts: ['0.5°C', '1.1°C', '2.5°C', '3.0°C'],                                ans: '1.1°C' },
      { q: 'What is the main human cause of rising CO2 levels?',              opts: ['Farming', 'Burning fossil fuels', 'Deforestation', 'Wildfires'],             ans: 'Burning fossil fuels' },
      { q: 'Which of these is a key effect of climate change?',               opts: ['More stable weather', 'Rising sea levels', 'Cooler summers', 'Less rain'],   ans: 'Rising sea levels' },
      { q: 'What does "net-zero" mean in climate terms?',                     opts: ['No emissions at all', 'Balancing emissions with removal', 'Only using solar', 'Banning all cars'], ans: 'Balancing emissions with removal' },
    ],
  },
  {
    label: 'Plastic Pollution',
    bg: '#c4872a',
    icon: 'trash',
    questions: [
      { q: 'How many tonnes of plastic enter the oceans every year?',         opts: ['1 million', '8 million', '50 million', '100 million'],                       ans: '8 million' },
      { q: 'What are microplastics?',                                         opts: ['Tiny pieces of broken-down plastic', 'A type of recycled plastic', 'Biodegradable packaging', 'Plastic under 1kg'], ans: 'Tiny pieces of broken-down plastic' },
      { q: 'Which single action best reduces plastic waste?',                 opts: ['Recycle all plastic', 'Refuse and use reusables', 'Burn it safely', 'Bury it in landfill'], ans: 'Refuse and use reusables' },
      { q: 'How long does a plastic bottle take to decompose?',               opts: ['10 years', '50 years', '450 years', '10,000 years'],                         ans: '450 years' },
      { q: 'Which industry produces the most single-use plastic waste?',      opts: ['Construction', 'Food and beverage packaging', 'Electronics', 'Clothing'],    ans: 'Food and beverage packaging' },
    ],
  },
  {
    label: 'Deforestation',
    bg: '#2d6a4f',
    icon: 'tree',
    questions: [
      { q: 'How many trees are cut down globally each year?',                 opts: ['1 billion', '5 billion', '15 billion', '50 billion'],                        ans: '15 billion' },
      { q: 'What is the main cause of deforestation?',                       opts: ['Urban expansion', 'Mining', 'Agriculture', 'Tourism'],                       ans: 'Agriculture' },
      { q: 'Which gas do trees absorb from the atmosphere?',                  opts: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],                         ans: 'Carbon Dioxide' },
      { q: 'Why are forests called "carbon sinks"?',                          opts: ['They store carbon underground', 'They absorb and store CO2', 'They produce carbon', 'They filter water'], ans: 'They absorb and store CO2' },
      { q: 'What percentage of Earth\'s species live in rainforests?',        opts: ['10%', '25%', 'Over 50%', '75%'],                                             ans: 'Over 50%' },
    ],
  },
  {
    label: 'Water Scarcity',
    bg: '#2196f3',
    icon: 'droplet',
    questions: [
      { q: 'How much of Earth\'s water is fresh and accessible?',             opts: ['About 1%', 'About 10%', 'About 25%', 'About 50%'],                           ans: 'About 1%' },
      { q: 'By 2025, what fraction of the world may face water shortages?',   opts: ['One quarter', 'One third', 'Two thirds', 'All of it'],                       ans: 'Two thirds' },
      { q: 'Which sector uses the most fresh water globally?',                opts: ['Industry', 'Domestic use', 'Agriculture', 'Energy production'],              ans: 'Agriculture' },
      { q: 'What is "water stress"?',                                         opts: ['When pipes are old', 'When demand exceeds available supply', 'When water is too salty', 'When rivers flood'], ans: 'When demand exceeds available supply' },
      { q: 'Which simple action saves the most household water?',             opts: ['Taking shorter showers', 'Fixing leaking taps', 'Using a dishwasher', 'Drinking less water'], ans: 'Fixing leaking taps' },
    ],
  },
  {
    label: 'Renewable Energy',
    bg: '#f4a261',
    icon: 'sun',
    questions: [
      { q: 'By how much has the cost of solar energy fallen in a decade?',    opts: ['10%', '40%', '70%', 'Over 90%'],                                             ans: 'Over 90%' },
      { q: 'What percentage of global electricity now comes from renewables?', opts: ['5%', '15%', 'Over 30%', 'Over 60%'],                                       ans: 'Over 30%' },
      { q: 'Which of these is NOT a renewable energy source?',                opts: ['Solar', 'Wind', 'Natural gas', 'Geothermal'],                                ans: 'Natural gas' },
      { q: 'What is the main advantage of renewable energy over fossil fuels?', opts: ['It is always cheaper', 'It produces no greenhouse gases in use', 'It works without sunlight', 'It needs no maintenance'], ans: 'It produces no greenhouse gases in use' },
      { q: 'Which country generates the most solar power?',                   opts: ['USA', 'Germany', 'China', 'India'],                                          ans: 'China' },
    ],
  },
];

const getMsg = (s: number, total: number) => {
  const pct = s / total;
  if (pct === 1)   return "Perfect score! You're a champion! 🌟";
  if (pct >= 0.8)  return "Impressive! You're an eco-warrior 🌳";
  if (pct >= 0.6)  return "Good effort! Keep learning 🌱";
  return                  "Keep going! Every expert starts somewhere 🌿";
};

// ─────────────────────────────────────────────────────────────────
// SHARED HEADER
// ─────────────────────────────────────────────────────────────────
function Header({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <View style={st.header}>
      <TouchableOpacity onPress={onBack} style={st.backBtn} activeOpacity={0.7}>
        <IconBack size={22} color="#1a3a2a"/>
      </TouchableOpacity>
      <Text style={st.headerTitle}>{title}</Text>
    </View>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 1 — HOME
// ═════════════════════════════════════════════════════════
function HomeScreen({ go }: { go: (s: string) => void }) {
  const items = [
    { icon:<IconBook size={22} color="#2d6a4f"/>,  label:'Learn', sub:'Explore 5 key sustainability topics',     id:'info'  },
    { icon:<IconPlay size={22} color="#2d6a4f"/>,  label:'Watch', sub:'Watch an inspiring sustainability video',  id:'video' },
    { icon:<IconBrain size={22} color="#2d6a4f"/>, label:'Quiz',  sub:'Test your eco-knowledge',                 id:'quiz'  },
    { icon:<IconInfo size={22} color="#2d6a4f"/>,  label:'About', sub:'About EcoAware & our mission',            id:'about' },
  ];
  return (
    <SafeAreaView style={st.safe}>
      <ScrollView contentContainerStyle={st.homeWrap}>
        <View style={st.logoCircle}>
          <IconLeaf size={30} color="#2d6a4f"/>
        </View>
        <Text style={st.homeTitle}>EcoAware</Text>
        <Text style={st.homeSub}>Learn. Watch. Quiz. Act.</Text>
        <View style={st.navCard}>
          {items.map((item, i) => (
            <TouchableOpacity
              key={item.id}
              style={[st.navRow, i < items.length - 1 && st.navDivider]}
              onPress={() => go(item.id)}
              activeOpacity={0.7}
            >
              <View style={st.navIconWrap}>{item.icon}</View>
              <View style={{ flex: 1 }}>
                <Text style={st.navLabel}>{item.label}</Text>
                <Text style={st.navSub}>{item.sub}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 2 — INFORMATION
// ═════════════════════════════════════════════════════════
function InfoScreen({ go }: { go: (s: string) => void }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <SafeAreaView style={st.safe}>
      <Header title="Sustainability Topics" onBack={() => go('home')}/>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {topics.map((t, i) => (
          <View key={i} style={[st.topicCard, { marginBottom: 10 }]}>
            <TouchableOpacity
              style={st.topicRow}
              onPress={() => setOpen(open === i ? null : i)}
              activeOpacity={0.75}
            >
              <View style={[st.topicIconBox, { backgroundColor: t.bg }]}>
                {t.icon}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={st.topicLabel}>{t.label}</Text>
                <Text style={st.topicSummary}>{t.summary}</Text>
              </View>
              {open === i ? <IconChevUp color="#bbb"/> : <IconChevDown color="#bbb"/>}
            </TouchableOpacity>
            {open === i && (
              <View style={st.topicDetail}>
                <Text style={st.topicDetailText}>{t.detail}</Text>
              </View>
            )}
          </View>
        ))}
        <TouchableOpacity style={[st.btnGreen, { marginTop: 10 }]} onPress={() => go('home')} activeOpacity={0.85}>
          <IconHome color="white"/>
          <Text style={st.btnGreenTxt}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 3 — VIDEO
// ═════════════════════════════════════════════════════════
function VideoScreen({ go }: { go: (s: string) => void }) {

  const openVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=VTJGpMdrlAs');
  };

  return (
    <SafeAreaView style={st.safe}>
      <Header title="Watch & Learn" onBack={() => go('home')}/>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>

        {/* Video thumbnail card */}
        <TouchableOpacity style={st.videoThumb} onPress={openVideo} activeOpacity={0.85}>
          {/* Dark overlay with gradient feel */}
          <View style={st.playCircle}>
            <IconTriangle color="white"/>
          </View>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '800', marginTop: 12 }}>
            Watch Documentary
          </Text>
          <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 6, textAlign: 'center', paddingHorizontal: 20 }}>
            Sustainability — Our Planet, Our Future
          </Text>
          {/* YouTube badge */}
          <View style={{ marginTop: 14, backgroundColor: 'rgba(255,0,0,0.85)', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <IconTriangle color="white"/>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>Open in YouTube</Text>
          </View>
        </TouchableOpacity>

        {/* Info banner */}
        <View style={{ backgroundColor: '#eef7f0', borderRadius: 12, padding: 14, marginTop: 14, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <IconInfo size={20} color="#2d6a4f"/>
          <Text style={{ fontSize: 13, color: '#2d6a4f', fontWeight: '600', flex: 1 }}>
            Tap the green box above to watch the full documentary
          </Text>
        </View>

        <View style={[st.whiteCard, { marginTop: 16, marginBottom: 12 }]}>
          <Text style={st.articleTitle}>Our Planet, Our Responsibility</Text>
          <Text style={st.articleBody}>
            Sustainability is not just a buzzword; it's a necessity for the survival of our planet and future generations. Every action we take, from the products we buy to the energy we consume, has an impact on the environment.
          </Text>
          <Text style={st.articleBody}>
            By understanding the interconnectedness of natural systems and human activities, we can make more informed choices. Small, everyday decisions — like reducing plastic use, conserving water, and supporting sustainable practices — collectively create significant positive change.
          </Text>
        </View>

        <View style={st.warnBox}>
          <Text style={st.warnText}>⚠️  Requires internet connection. Please ensure Wi-Fi or mobile data is enabled.</Text>
        </View>

        <TouchableOpacity style={[st.btnGreen, { marginTop: 16 }]} onPress={() => go('home')} activeOpacity={0.85}>
          <IconHome color="white"/>
          <Text style={st.btnGreenTxt}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 4 — QUIZ (Topic Selector + Questions)
// ═════════════════════════════════════════════════════════
function QuizScreen({ go, setFinal }: { go: (s: string) => void; setFinal: (n: number) => void }) {
  const [topic,  setTopic] = useState<number | null>(null);
  const [cur,    setCur]   = useState(0);
  const [score,  setScore] = useState(0);
  const [sel,    setSel]   = useState<string | null>(null);
  const [done,   setDone]  = useState(false);

  // Topic icon renderer
  const topicIcon = (key: string, color: string, size = 22) => {
    if (key === 'thermometer') return <IconThermometer color={color}/>;
    if (key === 'trash')       return <IconTrash color={color}/>;
    if (key === 'tree')        return <IconTree color={color}/>;
    if (key === 'droplet')     return <IconDroplet color={color}/>;
    return <IconSun color={color}/>;
  };

  // ── TOPIC SELECTOR ──────────────────────────────────────
  if (topic === null) {
    return (
      <SafeAreaView style={st.safe}>
        <Header title="Eco Quiz" onBack={() => go('home')}/>
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
          <View style={st.whiteCard}>
            <Text style={{ fontSize: 17, fontWeight: '700', color: '#1a3a2a', marginBottom: 4 }}>
              Choose a Topic
            </Text>
            <Text style={{ fontSize: 13, color: '#8aaa98', marginBottom: 16 }}>
              Select a topic to start your 5-question quiz
            </Text>
            {quizTopics.map((t, i) => (
              <TouchableOpacity
                key={i}
                style={[st.topicPickRow, i < quizTopics.length - 1 && st.topicPickBorder]}
                onPress={() => { setTopic(i); setCur(0); setScore(0); setSel(null); setDone(false); }}
                activeOpacity={0.75}
              >
                <View style={[st.topicPickIcon, { backgroundColor: t.bg }]}>
                  {topicIcon(t.icon, 'white')}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={st.topicPickLabel}>{t.label}</Text>
                  <Text style={st.topicPickSub}>5 questions</Text>
                </View>
                <IconChevDown color="#ccc"/>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={[st.btnGreen, { marginTop: 16 }]} onPress={() => go('home')} activeOpacity={0.85}>
            <IconHome color="white"/>
            <Text style={st.btnGreenTxt}>Back to Home</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── ACTIVE QUIZ ──────────────────────────────────────────
  const topicData = quizTopics[topic];
  const questions = topicData.questions;
  const q = questions[cur];
  const total = questions.length;

  const pick = (opt: string) => {
    if (done) return;
    setSel(opt);
    setDone(true);
    const ns = opt === q.ans ? score + 1 : score;
    if (opt === q.ans) setScore(ns);
    setTimeout(() => {
      if (cur + 1 < total) {
        setCur(c => c + 1); setSel(null); setDone(false);
      } else {
        setFinal(ns); go('results');
      }
    }, 900);
  };

  const btnStyle = (opt: string) => {
    if (!done) return st.optBtn;
    if (opt === q.ans) return [st.optBtn, st.optOk];
    if (opt === sel)   return [st.optBtn, st.optBad];
    return [st.optBtn, { opacity: 0.35 }];
  };

  return (
    <SafeAreaView style={st.safe}>
      {/* Header with topic colour accent */}
      <View style={[st.header, { borderBottomColor: topicData.bg + '44' }]}>
        <TouchableOpacity onPress={() => setTopic(null)} style={st.backBtn} activeOpacity={0.7}>
          <IconBack size={22} color="#1a3a2a"/>
        </TouchableOpacity>
        <View style={[st.topicDot, { backgroundColor: topicData.bg }]}>
          {topicIcon(topicData.icon, 'white', 14)}
        </View>
        <Text style={st.headerTitle}>{topicData.label}</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 14 }}>
        {/* Progress */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <Text style={st.progLabel}>Question {cur + 1}</Text>
          <Text style={st.progLabel}>{total}</Text>
        </View>
        <View style={st.progTrack}>
          <View style={[st.progFill, { width: `${((cur + 1) / total) * 100}%` as any, backgroundColor: topicData.bg }]}/>
        </View>

        {/* Question card */}
        <View style={[st.whiteCard, { marginBottom: 16 }]}>
          <Text style={st.questionText}>{q.q}</Text>
        </View>

        {/* Options */}
        {q.opts.map(opt => (
          <TouchableOpacity key={opt} style={btnStyle(opt)} onPress={() => pick(opt)} disabled={done} activeOpacity={0.75}>
            <Text style={[st.optText, done && opt === sel && opt !== q.ans && { color: '#d62828' }]}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 5 — RESULTS
// ═════════════════════════════════════════════════════════
function ResultsScreen({ go, score, setFinal }: { go: (s: string) => void; score: number; setFinal: (n: number) => void }) {
  const total = 5;
  return (
    <SafeAreaView style={st.safe}>
      <ScrollView contentContainerStyle={st.resultsWrap}>
        <View style={st.trophyBox}>
          <IconTrophy size={36} color="#c4872a"/>
        </View>
        <Text style={st.resultsTitle}>Quiz Complete!</Text>

        <View style={st.scoreRing}>
          <Text style={st.ringNum}>{score}</Text>
          <Text style={st.ringOf}>out of {total}</Text>
        </View>

        <Text style={st.resultMsg}>{getMsg(score, total)}</Text>

        <View style={st.bestBadge}>
          <Text style={st.bestText}>Your Score: {score}/{total}</Text>
        </View>

        <TouchableOpacity
          style={st.btnGreen}
          onPress={() => { setFinal(0); go('quiz'); }}
          activeOpacity={0.85}
        >
          <IconRetry color="white"/>
          <Text style={st.btnGreenTxt}>Try Another Topic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={st.btnOutline} onPress={() => go('home')} activeOpacity={0.75}>
          <IconHome color="#1a3a2a"/>
          <Text style={st.btnOutlineTxt}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// SCREEN 6 — ABOUT
// ═════════════════════════════════════════════════════════
function AboutScreen({ go }: { go: (s: string) => void }) {
  const cover = [
    { icon:<IconThermometer color="#e84040"/>, bg:'#fdecea', label:'Climate Change',    desc:'Rising temperatures, extreme weather, and melting ice caps driven by greenhouse gas emissions.' },
    { icon:<IconTrash color="#c4872a"/>,       bg:'#fdf5e6', label:'Plastic Pollution',  desc:'Billions of tonnes of plastic waste polluting oceans, soil, and entering the food chain as microplastics.' },
    { icon:<IconTree color="#2d6a4f"/>,        bg:'#eaf6ed', label:'Deforestation',      desc:'Forests cleared for farming and development, destroying biodiversity and releasing stored carbon.' },
    { icon:<IconDroplet color="#2196f3"/>,     bg:'#e3f2fd', label:'Water Scarcity',     desc:'Growing demand and climate change are reducing access to clean fresh water for billions of people.' },
    { icon:<IconSun color="#f4a261"/>,         bg:'#fff3e6', label:'Renewable Energy',   desc:'Solar, wind, and hydro power offer clean alternatives to fossil fuels with rapidly falling costs.' },
  ];

  const features = [
    { icon:<IconBook size={18} color="#2d6a4f"/>,  title:'Learn',  desc:'Read detailed cards on 5 major environmental topics, expandable with a single tap.' },
    { icon:<IconPlay size={18} color="#2d6a4f"/>,  title:'Watch',  desc:'Watch a curated sustainability documentary to see real-world environmental impact.' },
    { icon:<IconBrain size={18} color="#2d6a4f"/>, title:'Quiz',   desc:'Test your knowledge with 5 topic-specific questions per category, with instant colour feedback.' },
  ];

  return (
    <SafeAreaView style={st.safe}>
      <Header title="About EcoAware" onBack={() => go('home')}/>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>

        {/* Logo card */}
        <View style={[st.whiteCard, { alignItems: 'center', marginBottom: 14 }]}>
          <View style={st.aboutLogo}>
            <IconLeaf size={30} color="#2d6a4f"/>
          </View>
          <Text style={st.aboutName}>EcoAware</Text>
          <Text style={st.aboutVer}>Version 1.0.0</Text>
          <Text style={st.aboutDesc}>
            EcoAware is a sustainability awareness application designed to educate, inspire, and challenge users to learn more about our planet's most pressing environmental issues. Our goal is to make environmental education accessible and engaging for everyone — from students to lifelong learners.
          </Text>
        </View>

        {/* Our Mission */}
        <View style={[st.whiteCard, { marginBottom: 14 }]}>
          <View style={st.sectionHead}>
            <IconGlobe color="#c47a2b"/>
            <Text style={st.sectionOrange}>Our Mission</Text>
          </View>
          <Text style={st.bodyTxt}>
            We believe that awareness is the first step toward meaningful action. Climate change, plastic pollution, deforestation, water scarcity, and energy use are the defining challenges of our generation — and they affect every person on the planet.
          </Text>
          <Text style={[st.bodyTxt, { marginTop: 10 }]}>
            By providing clear, factual, and engaging information, EcoAware helps users understand these issues deeply and feel empowered to make better choices in their daily lives. Whether you recycle more, use less water, or simply share what you have learned, every action counts.
          </Text>
          <Text style={[st.bodyTxt, { marginTop: 10 }]}>
            Our aim is to make environmental education free, accessible, and genuinely enjoyable for everyone — not just scientists or activists, but ordinary people who care about the world they live in.
          </Text>
        </View>

        {/* How It Works */}
        <View style={[st.whiteCard, { marginBottom: 14 }]}>
          <View style={st.sectionHead}>
            <IconInfo size={20} color="#2d6a4f"/>
            <Text style={st.sectionGreen}>How the App Works</Text>
          </View>
          <Text style={[st.bodyTxt, { marginBottom: 14 }]}>
            EcoAware is built around three core learning activities:
          </Text>
          {features.map((f, i) => (
            <View key={f.title} style={[{ flexDirection: 'row', gap: 12, paddingVertical: 10 }, i < features.length - 1 && st.coverLine]}>
              <View style={{ width: 34, height: 34, borderRadius: 9, backgroundColor: '#eef7f0', borderWidth: 1, borderColor: '#d0ead8', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {f.icon}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#1a3a2a', marginBottom: 3 }}>{f.title}</Text>
                <Text style={{ fontSize: 13, color: '#4a6a5a', lineHeight: 20 }}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* What We Cover */}
        <View style={[st.whiteCard, { marginBottom: 14 }]}>
          <View style={st.sectionHead}>
            <IconLeaf size={20} color="#2d6a4f"/>
            <Text style={st.sectionGreen}>What We Cover</Text>
          </View>
          <Text style={[st.bodyTxt, { marginBottom: 14 }]}>
            The app covers five of the most critical environmental topics facing the world today:
          </Text>
          {cover.map((item, i) => (
            <View key={item.label} style={[{ flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 11 }, i < cover.length - 1 && st.coverLine]}>
              <View style={[{ width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }, { backgroundColor: item.bg }]}>
                {item.icon}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#1a3a2a', marginBottom: 3 }}>{item.label}</Text>
                <Text style={{ fontSize: 12, color: '#6a8a7a', lineHeight: 18 }}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Why It Matters */}
        <View style={[st.whiteCard, { marginBottom: 14 }]}>
          <View style={st.sectionHead}>
            <IconInfo size={20} color="#c47a2b"/>
            <Text style={st.sectionOrange}>Why It Matters</Text>
          </View>
          <Text style={st.bodyTxt}>
            The environmental challenges we face today are not problems for future generations — they are happening right now. Species are going extinct, glaciers are melting, and communities are losing access to clean water and stable food supplies.
          </Text>
          <Text style={[st.bodyTxt, { marginTop: 10 }]}>
            But there is reason for hope. Renewable energy is growing faster than ever. Young people around the world are demanding change. Governments are committing to net-zero targets. The solutions exist — what is needed is education, awareness, and collective action.
          </Text>
          <Text style={[st.bodyTxt, { marginTop: 10 }]}>
            EcoAware is our small contribution to that effort. We hope it inspires you to learn more, act more, and share more.
          </Text>
        </View>

        {/* Credit */}
        <View style={st.credit}>
          <Text style={st.creditTxt}>Developed as part of BTEC IT Unit 7 · 2024</Text>
          <Text style={[st.creditTxt, { marginTop: 4 }]}>Built with Expo · React Native</Text>
        </View>

        {/* Back to Home button */}
        <TouchableOpacity
          style={[st.btnGreen, { marginTop: 20 }]}
          onPress={() => go('home')}
          activeOpacity={0.85}
        >
          <IconHome color="white"/>
          <Text style={st.btnGreenTxt}>Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// ═════════════════════════════════════════════════════════
// ROOT
// ═════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState('home');
  const [final,  setFinal]  = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {screen === 'home'    && <HomeScreen    go={setScreen}/>}
      {screen === 'info'    && <InfoScreen    go={setScreen}/>}
      {screen === 'video'   && <VideoScreen   go={setScreen}/>}
      {screen === 'quiz'    && <QuizScreen    go={setScreen} setFinal={setFinal}/>}
      {screen === 'results' && <ResultsScreen go={setScreen} score={final} setFinal={setFinal}/>}
      {screen === 'about'   && <AboutScreen   go={setScreen}/>}
    </View>
  );
}

// ═════════════════════════════════════════════════════════
// STYLES
// ═════════════════════════════════════════════════════════
const st = StyleSheet.create({
  safe:           { flex: 1, backgroundColor: '#faf9ee' },

  // Header
  header:         { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 14, paddingBottom: 14, gap: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0e4' },
  backBtn:        { padding: 4 },
  headerTitle:    { fontSize: 20, fontWeight: '700', color: '#1a3a2a' },

  // Home
  homeWrap:       { alignItems: 'center', paddingTop: 40, paddingBottom: 40, paddingHorizontal: 24 },
  logoCircle:     { width: 70, height: 70, borderRadius: 35, backgroundColor: '#f0eed8', borderWidth: 1.5, borderColor: '#e0ddb8', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  homeTitle:      { fontSize: 38, fontWeight: '800', color: '#1a3a2a', marginBottom: 6, letterSpacing: -0.5 },
  homeSub:        { fontSize: 15, color: '#6a8a7a', marginBottom: 40 },
  navCard:        { width: '100%', backgroundColor: '#ffffff', borderRadius: 18, borderWidth: 1, borderColor: '#eeeede', overflow: 'hidden' },
  navRow:         { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, paddingHorizontal: 16, gap: 14 },
  navDivider:     { borderBottomWidth: 1, borderBottomColor: '#f0f0e6' },
  navIconWrap:    { width: 46, height: 46, borderRadius: 12, backgroundColor: '#eef7f0', borderWidth: 1, borderColor: '#d0ead8', alignItems: 'center', justifyContent: 'center' },
  navLabel:       { fontSize: 16, fontWeight: '700', color: '#1a3a2a', marginBottom: 3 },
  navSub:         { fontSize: 12, color: '#8aaa98', lineHeight: 17 },

  // Info
  topicCard:      { backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: '#eeeede', overflow: 'hidden' },
  topicRow:       { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  topicIconBox:   { width: 46, height: 46, borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  topicLabel:     { fontSize: 15, fontWeight: '700', color: '#1a3a2a', marginBottom: 4 },
  topicSummary:   { fontSize: 12, color: '#888', lineHeight: 17 },
  topicDetail:    { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 12, paddingLeft: 60, borderTopWidth: 1, borderTopColor: '#f5f5ee' },
  topicDetailText:{ fontSize: 13, color: '#4a6a5a', lineHeight: 22, whiteSpace: 'pre-line' as any },

  // Video
  videoContainer:  { borderRadius: 16, overflow: 'hidden', height: 220 },
  webView:         { width: '100%', height: 220 },
  videoThumb:     { borderRadius: 16, backgroundColor: '#2d6a4f', height: 220, alignItems: 'center', justifyContent: 'center', gap: 4 },
  playCircle:     { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center', justifyContent: 'center' },
  whiteCard:      { backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: '#eeeede', padding: 20 },
  articleTitle:   { fontSize: 20, fontWeight: '800', color: '#1a3a2a', marginBottom: 14, lineHeight: 27 },
  articleSection: { fontSize: 14, fontWeight: '700', color: '#2d6a4f', marginTop: 14, marginBottom: 6 },
  articleBody:    { fontSize: 13, color: '#4a6a5a', lineHeight: 22, marginBottom: 6 },
  warnBox:        { backgroundColor: '#fff8e6', borderWidth: 1, borderColor: '#f0c070', borderRadius: 12, padding: 14 },
  warnText:       { fontSize: 12, color: '#8a5a00', lineHeight: 18 },

  // Topic picker
  topicPickRow:    { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, gap: 12 },
  topicPickBorder: { borderBottomWidth: 1, borderBottomColor: '#f0f0e8' },
  topicPickIcon:   { width: 46, height: 46, borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  topicPickLabel:  { fontSize: 15, fontWeight: '700', color: '#1a3a2a', marginBottom: 3 },
  topicPickSub:    { fontSize: 12, color: '#8aaa98' },
  topicDot:        { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },

  // Quiz
  progLabel:      { fontSize: 12, color: '#7a9a8a', fontWeight: '600' },
  progTrack:      { height: 5, backgroundColor: '#e8e8d8', borderRadius: 3, marginBottom: 22, overflow: 'hidden' },
  progFill:       { height: '100%', backgroundColor: '#2d6a4f', borderRadius: 3 },
  questionText:   { fontSize: 19, fontWeight: '700', color: '#1a3a2a', lineHeight: 28 },
  optBtn:         { backgroundColor: '#ffffff', borderRadius: 13, borderWidth: 1.5, borderColor: '#e4e4d0', padding: 17, marginBottom: 10 },
  optOk:          { backgroundColor: '#eaf6ed', borderColor: '#2d6a4f', borderWidth: 2 },
  optBad:         { backgroundColor: '#fdecea', borderColor: '#d62828', borderWidth: 2 },
  optText:        { fontSize: 15, fontWeight: '500', color: '#1a3a2a' },

  // Results
  resultsWrap:    { alignItems: 'center', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 40, gap: 16 },
  trophyBox:      { width: 72, height: 72, borderRadius: 20, backgroundColor: '#fdf0dc', borderWidth: 1.5, borderColor: '#f0d8a8', alignItems: 'center', justifyContent: 'center' },
  resultsTitle:   { fontSize: 30, fontWeight: '800', color: '#1a3a2a' },
  scoreRing:      { width: 150, height: 150, borderRadius: 75, borderWidth: 11, borderColor: '#2d6a4f', alignItems: 'center', justifyContent: 'center' },
  ringNum:        { fontSize: 50, fontWeight: '800', color: '#1a3a2a', lineHeight: 54 },
  ringOf:         { fontSize: 12, color: '#888', marginTop: 2 },
  resultMsg:      { fontSize: 16, fontWeight: '600', color: '#1a3a2a', textAlign: 'center', lineHeight: 24 },
  bestBadge:      { backgroundColor: '#f5f4e8', borderWidth: 1, borderColor: '#e8e6cc', borderRadius: 10, paddingVertical: 9, paddingHorizontal: 28 },
  bestText:       { fontSize: 14, color: '#5a7a6a', fontWeight: '600' },
  btnGreen:       { width: '100%', backgroundColor: '#2d6a4f', borderRadius: 14, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  btnGreenTxt:    { color: 'white', fontSize: 16, fontWeight: '700' },
  btnOutline:     { width: '100%', borderWidth: 1.5, borderColor: '#e0dfc8', borderRadius: 14, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  btnOutlineTxt:  { color: '#1a3a2a', fontSize: 16, fontWeight: '600' },

  // About
  aboutLogo:      { width: 70, height: 70, borderRadius: 35, backgroundColor: '#f0eed8', borderWidth: 1.5, borderColor: '#e0ddb8', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  aboutName:      { fontSize: 28, fontWeight: '800', color: '#1a3a2a', marginBottom: 4 },
  aboutVer:       { fontSize: 13, color: '#aaa', marginBottom: 16 },
  aboutDesc:      { fontSize: 13, color: '#4a6a5a', lineHeight: 22, alignSelf: 'stretch', textAlign: 'left' },
  sectionHead:    { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  sectionOrange:  { fontSize: 17, fontWeight: '700', color: '#c47a2b' },
  sectionGreen:   { fontSize: 17, fontWeight: '700', color: '#2d6a4f' },
  bodyTxt:        { fontSize: 13, color: '#4a6a5a', lineHeight: 22 },
  coverRow:       { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11 },
  coverLine:      { borderBottomWidth: 1, borderBottomColor: '#f0f0e8' },
  coverTxt:       { fontSize: 14, color: '#4a6a5a', fontWeight: '500' },
  credit:         { backgroundColor: '#f0eed8', borderRadius: 14, padding: 16, alignItems: 'center' },
  creditTxt:      { fontSize: 12, color: '#8a9a8a' },
});

