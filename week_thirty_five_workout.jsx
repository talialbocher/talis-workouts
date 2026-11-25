import { useState } from "react";

const BG = "var(--color-background-secondary)";
function SvgWrap({ children }) {
  return <svg viewBox="0 0 100 85" style={{ width: "100%", display: "block" }} fill="none">{children}</svg>;
}
function Gnd({ y = 79 }) {
  return <line x1="5" y1={y} x2="95" y2={y} stroke="currentColor" strokeOpacity={0.25} strokeWidth={1} />;
}
function Hd({ cx, cy, r = 6 }) {
  return <circle cx={cx} cy={cy} r={r} fill={BG} stroke="currentColor" strokeWidth={1.5} />;
}
function Ln({ p, w = 2 }) {
  const pts = p.map(([x, y]) => `${x},${y}`).join(" ");
  return <polyline points={pts} stroke="currentColor" strokeWidth={w} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
}
function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }}>
      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
      <polygon points="4.5,3.5 4.5,8.5 9,6" fill="currentColor" />
    </svg>
  );
}

const WARMUP_VIDEO = {
  "High knees": "https://www.youtube.com/results?search_query=high+knees+low+impact+warm+up+tutorial",
  "Hip circles": "https://www.youtube.com/results?search_query=hip+circles+warm+up+mobility+tutorial",
  "Slow walk": "https://www.youtube.com/results?search_query=walking+warm+up+technique",
  "Arm swings": "https://www.youtube.com/results?search_query=arm+swings+warm+up+tutorial",
  "Ankle rolls": "https://www.youtube.com/results?search_query=ankle+rolls+warm+up+mobility",
  "Arm circles": "https://www.youtube.com/results?search_query=arm+circles+warm+up+shoulder+mobility",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Wrist circles": "https://www.youtube.com/results?search_query=wrist+circles+warm+up+mobility",
  "Leg swings": "https://www.youtube.com/results?search_query=leg+swings+warm+up+hip+mobility+tutorial",
  "Goblet squat hold": "https://www.youtube.com/results?search_query=goblet+squat+hold+warm+up+tutorial",
  "Standing hamstring sweep": "https://www.youtube.com/results?search_query=standing+hamstring+leg+swing+warm+up+tutorial",
  "Tricep warm-up circles": "https://www.youtube.com/results?search_query=tricep+arm+circles+warm+up+tutorial",
  "Band pull-aparts": "https://www.youtube.com/results?search_query=band+pull+apart+warm+up+shoulder+tutorial",
};

const ILLUS = {
  "Goblet squat – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[48,43]]} /><Ln p={[[48,43],[34,62],[36,79]]} /><Ln p={[[48,43],[62,61],[60,79]]} />
      <circle cx={50} cy={26} r={5} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,28],[44,36]]} w={1.5} /><Ln p={[[50,28],[56,36]]} w={1.5} />
    </SvgWrap>
  ),
  "Hip thrust – 12 lb": () => (
    <SvgWrap><Gnd y={74} />
      <rect x="6" y="46" width="22" height="14" rx="3" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} />
      <Hd cx={88} cy={68} r={5} /><Ln p={[[80,70],[52,42]]} /><Ln p={[[52,42],[28,58],[16,58]]} />
      <Ln p={[[68,70],[64,74]]} w={1.5} /><Ln p={[[56,70],[52,74]]} w={1.5} />
      <circle cx={60} cy={42} r={5} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Reverse lunge – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={52} cy={13} />
      <Ln p={[[52,19],[52,43]]} /><Ln p={[[52,43],[37,62],[33,79]]} /><Ln p={[[52,43],[68,60],[70,79]]} />
      <circle cx={46} cy={30} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={58} cy={30} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[46,32],[42,42]]} w={1.5} /><Ln p={[[58,32],[62,42]]} w={1.5} />
    </SvgWrap>
  ),
  "Lateral lunge – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[50,43]]} /><Ln p={[[50,43],[26,63],[20,79]]} /><Ln p={[[50,43],[54,65],[54,79]]} />
      <Ln p={[[50,29],[38,36]]} w={1.5} /><Ln p={[[50,29],[62,36]]} w={1.5} />
      <circle cx={50} cy={34} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Calf raise (single leg)": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={11} />
      <Ln p={[[50,17],[50,43]]} /><Ln p={[[50,43],[46,65],[44,76],[42,79]]} /><Ln p={[[50,43],[56,58],[60,52]]} />
      <Ln p={[[50,28],[40,44]]} w={1.5} /><Ln p={[[50,28],[60,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Bent-over row – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={16} cy={29} r={5} />
      <Ln p={[[16,34],[20,40],[70,44]]} /><Ln p={[[70,44],[66,66],[62,79]]} /><Ln p={[[70,44],[76,64],[74,79]]} />
      <Ln p={[[36,41],[32,57]]} /><Ln p={[[50,42],[46,57]]} />
    </SvgWrap>
  ),
  "Low-impact skaters (finisher)": () => (
    <SvgWrap><Gnd /><Hd cx={68} cy={18} />
      <Ln p={[[68,24],[64,46]]} />
      <Ln p={[[64,46],[50,62],[44,79]]} /><Ln p={[[64,46],[76,58],[80,72]]} />
      <Ln p={[[68,34],[80,28]]} w={1.5} /><Ln p={[[68,34],[56,42]]} w={1.5} />
      <Ln p={[[28,56],[20,68]]} w={1} /><Ln p={[[28,56],[36,44]]} w={1} />
    </SvgWrap>
  ),
  "Standing hamstring stretch": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={16} />
      <Ln p={[[50,22],[48,42]]} />
      <Ln p={[[48,42],[40,52],[34,60]]} />
      <Ln p={[[34,60],[36,79]]} w={1.5} />
      <Ln p={[[48,42],[64,46],[78,48]]} />
      <Ln p={[[78,48],[76,68],[72,79]]} w={1.5} />
      <Ln p={[[50,28],[60,40]]} w={1.5} />
    </SvgWrap>
  ),
  "Brisk walk or light cycling": () => (
    <SvgWrap><Gnd /><Hd cx={52} cy={12} />
      <Ln p={[[52,18],[54,42]]} /><Ln p={[[54,42],[39,61],[35,79]]} /><Ln p={[[54,42],[67,58],[70,76]]} />
      <Ln p={[[53,28],[66,44]]} w={1.5} /><Ln p={[[53,28],[42,46]]} w={1.5} />
    </SvgWrap>
  ),
  "Alternatively: dance or swim": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={12} />
      <Ln p={[[50,18],[50,42]]} /><Ln p={[[50,42],[36,64],[32,79]]} /><Ln p={[[50,42],[64,62],[68,79]]} />
      <Ln p={[[50,28],[34,18]]} w={1.5} /><Ln p={[[50,28],[66,18]]} w={1.5} />
    </SvgWrap>
  ),
  "Knee push-up (progressing to full)": () => (
    <SvgWrap><Gnd /><Hd cx={22} cy={28} r={6} />
      <Ln p={[[22,34],[34,42],[66,52]]} /><Ln p={[[22,34],[32,44],[62,52]]} />
      <Ln p={[[66,52],[70,63],[62,72],[58,79]]} />
      <circle cx={60} cy={74} r={4} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Overhead press – 8 lb (tempo)": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={17} />
      <Ln p={[[50,23],[50,48]]} /><Ln p={[[50,30],[38,22],[34,10]]} /><Ln p={[[50,30],[62,22],[66,10]]} />
      <circle cx={34} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={66} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,48],[44,70],[42,79]]} /><Ln p={[[50,48],[56,70],[58,79]]} />
    </SvgWrap>
  ),
  "Alternating bicep curl – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,46]]} />
      <Ln p={[[50,30],[36,38],[30,26]]} w={1.5} /><Ln p={[[50,30],[64,46]]} w={1.5} />
      <circle cx={30} cy={23} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={64} cy={47} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Overhead tricep extension – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[50,46]]} />
      <Ln p={[[50,26],[42,14],[44,6]]} w={1.5} />
      <circle cx={44} cy={4} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,26],[58,14],[56,6]]} w={1.5} />
      <circle cx={56} cy={4} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Dead bug": () => (
    <SvgWrap><Gnd y={72} /><Hd cx={90} cy={54} r={5} />
      <Ln p={[[84,57],[38,57]]} /><Ln p={[[80,57],[78,40],[76,26]]} />
      <Ln p={[[68,57],[66,69]]} w={1.5} /><Ln p={[[44,57],[22,65]]} />
      <Ln p={[[55,57],[54,42],[44,40]]} />
    </SvgWrap>
  ),
  "Plank hold": () => (
    <SvgWrap><Gnd y={67} /><Hd cx={86} cy={38} r={5} />
      <Ln p={[[80,43],[30,57]]} />
      <Ln p={[[80,43],[76,58],[68,67]]} />
      <Ln p={[[65,50],[62,63],[54,67]]} />
      <Ln p={[[30,57],[26,67]]} />
    </SvgWrap>
  ),
  "Cat-cow": () => (
    <SvgWrap><Gnd y={72} /><Hd cx={17} cy={36} r={5} />
      <Ln p={[[17,41],[20,50],[50,56],[80,50],[83,44]]} />
      <Ln p={[[22,50],[18,66]]} /><Ln p={[[30,52],[28,66]]} />
      <Ln p={[[78,50],[76,66]]} /><Ln p={[[84,47],[82,66]]} />
    </SvgWrap>
  ),
  "Pigeon pose": () => (
    <SvgWrap><Gnd y={75} /><Hd cx={14} cy={38} r={5} />
      <Ln p={[[14,43],[20,55],[50,60],[80,58]]} />
      <Ln p={[[50,60],[44,72],[36,75]]} /><Ln p={[[50,60],[70,64],[80,75]]} />
      <Ln p={[[14,43],[10,55],[8,68]]} w={1.5} /><Ln p={[[14,43],[18,56],[16,68]]} w={1.5} />
    </SvgWrap>
  ),
  "90/90 hip stretch": () => (
    <SvgWrap><Gnd y={74} /><Hd cx={50} cy={20} r={5} />
      <Ln p={[[50,25],[50,46]]} /><Ln p={[[50,46],[28,54],[12,54],[12,74]]} />
      <Ln p={[[50,46],[72,46],[72,66]]} />
      <Ln p={[[50,32],[38,44]]} w={1.5} /><Ln p={[[50,32],[62,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Calf + soleus wall stretch": () => (
    <SvgWrap>
      <line x1="88" y1="6" x2="88" y2="79" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
      <Gnd /><Hd cx={56} cy={20} r={5} />
      <Ln p={[[56,25],[46,44]]} />
      <Ln p={[[56,28],[72,30],[86,32]]} w={1.5} />
      <Ln p={[[46,44],[54,58],[62,79]]} />
      <Ln p={[[46,44],[32,60],[22,79]]} />
      <Ln p={[[22,79],[31,79]]} w={1.5} />
    </SvgWrap>
  ),
  "Kneeling hip flexor stretch": () => (
    <SvgWrap><Gnd /><Hd cx={52} cy={16} r={5} />
      <Ln p={[[52,21],[50,46]]} />
      <Ln p={[[50,46],[70,50],[70,79]]} />
      <Ln p={[[50,46],[36,79]]} />
      <Ln p={[[36,79],[22,77]]} w={1.5} />
      <Ln p={[[52,28],[44,42]]} w={1.5} />
    </SvgWrap>
  ),
  "Overhead tricep stretch": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[50,46]]} />
      <Ln p={[[50,24],[42,10],[38,4]]} w={1.5} />
      <Ln p={[[38,4],[46,2]]} w={1} />
      <Ln p={[[50,24],[58,32]]} w={1.5} />
      <Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Supine spinal twist": () => (
    <SvgWrap><Gnd y={74} /><Hd cx={14} cy={44} r={5} />
      <Ln p={[[14,49],[14,62],[80,62]]} /><Ln p={[[50,62],[60,48],[72,52]]} />
      <Ln p={[[14,55],[14,44],[6,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Legs-up-the-wall": () => (
    <SvgWrap>
      <line x1="92" y1="8" x2="92" y2="78" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
      <Gnd /><Hd cx={10} cy={70} r={5} />
      <Ln p={[[10,75],[80,75]]} /><Ln p={[[78,75],[80,44],[84,10]]} /><Ln p={[[70,75],[72,44],[76,10]]} />
      <Ln p={[[28,75],[24,79]]} w={1.5} /><Ln p={[[42,75],[38,79]]} w={1.5} />
    </SvgWrap>
  ),
  "Romanian deadlift – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={15} cy={27} r={5} />
      <Ln p={[[15,32],[20,38],[68,44]]} /><Ln p={[[68,44],[64,67],[60,79]]} /><Ln p={[[68,44],[74,65],[72,79]]} />
      <Ln p={[[34,40],[30,57]]} /><Ln p={[[48,42],[44,59]]} />
      <circle cx={30} cy={60} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={44} cy={62} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Sumo squat – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,44]]} /><Ln p={[[50,44],[30,63],[24,79]]} /><Ln p={[[50,44],[70,63],[76,79]]} />
      <Ln p={[[50,31],[40,44]]} w={1.5} /><Ln p={[[50,31],[60,44]]} w={1.5} />
      <Ln p={[[24,79],[18,75]]} w={1} /><Ln p={[[76,79],[82,75]]} w={1} />
    </SvgWrap>
  ),
  "Arnold press – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,48]]} />
      <Ln p={[[50,30],[36,26],[32,14]]} w={1.5} /><Ln p={[[50,30],[64,26],[68,14]]} w={1.5} />
      <circle cx={32} cy={11} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={68} cy={11} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,48],[44,68],[42,79]]} /><Ln p={[[50,48],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Close-grip push-up (or knee)": () => (
    <SvgWrap><Gnd /><Hd cx={20} cy={28} r={6} />
      <Ln p={[[20,34],[30,42],[68,50]]} /><Ln p={[[20,34],[28,44],[66,50]]} />
      <Ln p={[[68,50],[72,64],[70,79]]} />
      <circle cx={68} cy={50} r={2} fill="currentColor" />
      <circle cx={66} cy={50} r={2} fill="currentColor" />
    </SvgWrap>
  ),
  "Pallof press (resistance band)": () => (
    <SvgWrap>
      <circle cx={92} cy={35} r={5} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} />
      <Gnd /><Hd cx={44} cy={14} />
      <Ln p={[[44,20],[44,44]]} /><Ln p={[[44,30],[24,33]]} />
      <line x1="24" y1="33" x2="92" y2="35" stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} strokeDasharray="4,3" />
      <Ln p={[[44,44],[38,68],[36,79]]} /><Ln p={[[44,44],[50,68],[52,79]]} />
    </SvgWrap>
  ),
};

ILLUS["Split squat – 8 lb"] = ILLUS["Reverse lunge – 8 lb"];
ILLUS["Supported one-arm row – 12 lb"] = ILLUS["Bent-over row – 12 lb"];
ILLUS["Prone T raise"] = () => (
  <SvgWrap><Gnd y={72} /><Hd cx={86} cy={58} r={5} />
    <Ln p={[[80,62],[20,62]]} /><Ln p={[[20,62],[8,66]]} w={1.5} />
    <Ln p={[[66,62],[58,44]]} w={1.5} /><Ln p={[[66,62],[58,72]]} w={1.5} />
    <Ln p={[[66,62],[66,70]]} w={1} />
  </SvgWrap>
);

ILLUS["Side plank (from knees)"] = () => (
  <SvgWrap><Gnd y={72} /><Hd cx={78} cy={34} r={5} />
    <Ln p={[[72,40],[36,52]]} /><Ln p={[[36,52],[22,64],[16,72]]} />
    <Ln p={[[72,40],[70,70]]} w={1.5} /><Ln p={[[70,70],[80,70]]} w={1} />
    <Ln p={[[60,44],[62,56]]} w={1.5} />
  </SvgWrap>
);

ILLUS["Bodyweight squat (slow lowering)"] = ILLUS["Goblet squat – 12 lb"];
ILLUS["Hip thrust (bodyweight)"] = ILLUS["Hip thrust – 12 lb"];
ILLUS["Split squat (bodyweight)"] = ILLUS["Reverse lunge – 8 lb"];
ILLUS["Lateral lunge (bodyweight)"] = ILLUS["Lateral lunge – 8 lb"];
ILLUS["Sumo squat (bodyweight)"] = ILLUS["Sumo squat – 12 lb"];
ILLUS["Overhead press – 8 lb, left arm (tempo)"] = ILLUS["Overhead press – 8 lb (tempo)"];
ILLUS["Bicep curl – 8 lb, left arm"] = ILLUS["Alternating bicep curl – 8 lb"];
ILLUS["Overhead tricep extension – 8 lb, left arm"] = ILLUS["Overhead tricep extension – 8 lb"];
ILLUS["Figure-4 hip stretch"] = ILLUS["Pigeon pose"];
ILLUS["Wall sit"] = () => (
  <SvgWrap>
    <line x1="24" y1="4" x2="24" y2="79" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
    <Gnd /><Hd cx={32} cy={16} r={6} />
    <Ln p={[[32,22],[32,52]]} /><Ln p={[[32,52],[62,52],[62,78]]} /><Ln p={[[32,32],[48,42]]} w={1.5} />
  </SvgWrap>
);

const VIDEO = {
  "Split squat – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+split+squat+form+tutorial+beginner+shorts",
  "Supported one-arm row – 12 lb": "https://www.youtube.com/results?search_query=supported+one+arm+dumbbell+row+knee+on+bench+form+shorts",
  "Prone T raise": "https://www.youtube.com/results?search_query=prone+t+raise+exercise+form+tutorial+beginner+shorts",
  "Side plank (from knees)": "https://www.youtube.com/results?search_query=side+plank+from+knees+form+tutorial+beginner+shorts",
  "Bodyweight squat (slow lowering)": "https://www.youtube.com/results?search_query=slow+tempo+bodyweight+squat+form+shorts",
  "Hip thrust (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+hip+thrust+glute+bridge+form+shorts",
  "Split squat (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+split+squat+form+tutorial+shorts",
  "Lateral lunge (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+lateral+lunge+form+tutorial+shorts",
  "Sumo squat (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+sumo+squat+form+tutorial+shorts",
  "Figure-4 hip stretch": "https://www.youtube.com/results?search_query=supine+figure+4+hip+stretch+tutorial+shorts",
  "Wall sit": "https://www.youtube.com/results?search_query=wall+sit+exercise+form+tutorial+shorts",
  "Overhead press – 8 lb, left arm (tempo)": "https://www.youtube.com/results?search_query=single+arm+dumbbell+overhead+press+slow+tempo+form+shorts",
  "Bicep curl – 8 lb, left arm": "https://www.youtube.com/results?search_query=single+arm+dumbbell+bicep+curl+form+shorts",
  "Overhead tricep extension – 8 lb, left arm": "https://www.youtube.com/results?search_query=single+arm+overhead+tricep+extension+dumbbell+form+shorts",
  "Goblet squat – 12 lb": "https://www.youtube.com/results?search_query=goblet+squat+dumbbell+form+tutorial",
  "Hip thrust – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+hip+thrust+form+tutorial+beginner",
  "Reverse lunge – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+reverse+lunge+form+tutorial+beginner",
  "Lateral lunge – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+lateral+lunge+form+tutorial+beginner",
  "Calf raise (single leg)": "https://www.youtube.com/results?search_query=single+leg+calf+raise+form+tutorial",
  "Standing hamstring stretch": "https://www.youtube.com/results?search_query=standing+hamstring+stretch+tutorial+form",
  "Bent-over row – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+bent+over+row+form+beginner+tutorial",
  "Low-impact skaters (finisher)": "https://www.youtube.com/results?search_query=low+impact+skaters+cardio+no+jump+tutorial",
  "Brisk walk or light cycling": "https://www.youtube.com/results?search_query=brisk+walking+technique+fitness+beginners",
  "Alternatively: dance or swim": "https://www.youtube.com/results?search_query=beginner+dance+workout+low+impact",
  "Knee push-up (progressing to full)": "https://www.youtube.com/results?search_query=knee+push+up+to+full+push+up+progression+tutorial",
  "Overhead press – 8 lb (tempo)": "https://www.youtube.com/results?search_query=dumbbell+overhead+press+slow+tempo+form+tutorial",
  "Alternating bicep curl – 8 lb": "https://www.youtube.com/results?search_query=alternating+dumbbell+bicep+curl+form+tutorial",
  "Overhead tricep extension – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+overhead+tricep+extension+form+tutorial",
  "Dead bug": "https://www.youtube.com/results?search_query=dead+bug+exercise+core+form+tutorial+beginner",
  "Plank hold": "https://www.youtube.com/results?search_query=plank+forearm+hold+form+tutorial+beginner",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Pigeon pose": "https://www.youtube.com/results?search_query=pigeon+pose+hip+stretch+tutorial+yoga",
  "90/90 hip stretch": "https://www.youtube.com/results?search_query=90+90+hip+stretch+tutorial+form+beginner",
  "Calf + soleus wall stretch": "https://www.youtube.com/results?search_query=calf+and+soleus+wall+stretch+tutorial+form",
  "Kneeling hip flexor stretch": "https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch+tutorial+form+beginner",
  "Overhead tricep stretch": "https://www.youtube.com/results?search_query=overhead+tricep+stretch+tutorial+form",
  "Supine spinal twist": "https://www.youtube.com/results?search_query=supine+spinal+twist+stretch+form+tutorial",
  "Legs-up-the-wall": "https://www.youtube.com/results?search_query=legs+up+the+wall+tutorial+benefits",
  "Romanian deadlift – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form+tutorial",
  "Sumo squat – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+sumo+squat+form+tutorial+beginner",
  "Arnold press – 8 lb": "https://www.youtube.com/results?search_query=arnold+press+dumbbell+form+tutorial+beginner",
  "Close-grip push-up (or knee)": "https://www.youtube.com/results?search_query=close+grip+push+up+tricep+form+tutorial+beginner",
  "Pallof press (resistance band)": "https://www.youtube.com/results?search_query=pallof+press+resistance+band+core+tutorial",
};

const days = [
  {
    label: "Mon", name: "Monday", type: "Lower body strength", tag: "strength",
    warmup: "3 min — high knees x20, standing hamstring sweep x10 each leg, leg swings x10 each (left hand on a wall), ankle rolls x10 each",
    warmupItems: ["High knees", "Standing hamstring sweep", "Leg swings", "Ankle rolls"],
    note: "Right-palm rule for the whole week: nothing grips, presses or bears weight through the right hand, and the right hand does not lift or move dumbbells. Left-hand-only work uses the left hand; anything that hurts the palm gets skipped. If you get numbness, tingling, weakness, swelling, a deformity, or pain that is not clearly improving over a few days, please have a doctor look at it — palm injuries can involve tendons or small bones. Stop each set with about 2 reps still in the tank. Monday needs no hands, so legs carry the week: the same movements as planned, bodyweight instead of dumbbells, with the slow lowering doing the work the weight would. Keep the arms crossed over the chest or on the hips, and use the left hand only for balance on a wall or chair.",
    exercises: [
      { name: "Bodyweight squat (slow lowering)", sets: "3 x 10 reps", superset: "A", note: "Replaces the goblet squat this week, because it needs two hands. Arms crossed over your chest, feet shoulder-width, lower for 4 seconds, pause for 2 seconds at the bottom, then stand up. Chest tall, knees tracking over the toes. Without the dumbbell the slow lowering and pause are what make it hard." },
      { name: "Hip thrust (bodyweight)", sets: "3 x 12 reps", superset: "A", note: "Same set-up as before without the dumbbell: shoulders on a sofa or the bottom stair, arms crossed over your chest, feet flat. Lower for 4 seconds and squeeze for 3 seconds at the top, ribs down, driving through the heels. If it feels too easy, pause 1 second at the top before adding reps." },
      { name: "Split squat (bodyweight)", sets: "2 x 8 each leg", superset: "B", note: "Both feet flat on the floor, one a big step in front of the other, hip-width apart, right hand on your hip and left hand ready to touch a wall or chair for balance. Lower straight down for 4 seconds until the back knee hovers above the floor, then push through the front heel to stand. Both feet stay put the whole set." },
      { name: "Lateral lunge (bodyweight)", sets: "2 x 12 each side", superset: "B", note: "Without the dumbbell this week. Hands on hips, step wide, sit back into the hip, and push back to centre. Same inner-thigh caution as always — adductor work on the tissue you strained, so keep the range comfortable and stop if anything feels sharp or one-sided." },
      { name: "Calf raise (single leg)", sets: "2 x 10 each side", note: "Left fingertips on a wall for balance — use the fingertips, do not push through the right palm. 5-count descent, full stretch at the bottom." },
      { name: "Low-impact skaters (finisher)", sets: "60 sec continuous", note: "Back to 60 sec, from 45. Land soft, keep it smooth rather than fast." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg, left hand on a chair), calf stretch against a wall (30 sec each leg, using the left hand or forearm), figure-4 hip stretch lying on your back (30 sec each side)",
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walk, arm swings, ankle rolls",
    warmupItems: ["Slow walk", "Arm swings", "Ankle rolls"],
    note: "Walking is fully fine with one hand out of action — let the right arm swing loosely or keep it relaxed at your side, whichever is more comfortable. Same plan as the week: 20 minutes, with the interval option if you feel good. Cycling and swimming are out this week because both need a grip.",
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Walk only this week: 4 min easy, then 6 x (1 min brisk + 1 min easy) if you want intervals, otherwise a steady talk-but-slightly-breathless pace. Let the right hand hang relaxed — do not carry anything in it." },
      { name: "Alternatively: dance or swim", sets: "20 min", note: "Dancing is fine if you prefer it; skip the swimming this week, as it needs both hands. Keep the right hand relaxed." },
    ],
    cooldown: "2 min — slow walk, deep breathing, standing hamstring stretch (30 sec each leg)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — slow walk, arm circles, shoulder rolls x10 backward, seated cat-cow x10 (hands resting on your thighs, not pressing)",
    warmupItems: ["Slow walk", "Arm circles", "Shoulder rolls", "Cat-cow"],
    note: "Hand rule for Wednesday: the thumb and finger of the right hand are hurt, so you can hold dumbbells with a relaxed grip, but nothing that presses through the hand, thumb or fingers — no push-ups. Stop any exercise where the thumb or finger hurts, and drop to the left hand only for that set. Stop each set with about 2 reps still in the tank. Wednesday is back to two-arm weights with the push-up gone. Overhead press goes first, paired with the row. The reps are a step below the usual week-35 numbers because the hand is healing and the last two weeks were uncertain. If the thumb or finger gets worse, numbness or tingling appears, or the pain is not improving over a few days, please have a doctor look at it.",
    exercises: [
      { name: "Overhead press – 8 lb (tempo)", sets: "3 x 10 reps", superset: "A", note: "Both arms, 8 lb each, still first in the session. 4-count up, 4-count down. Hold the dumbbell with a relaxed grip — if the right thumb or finger hurts, use the left hand only for that set and go lighter on the right. Stop if your back arches or your neck tenses. Drop to 8 reps if the third round is a grind." },
      { name: "Bent-over row – 12 lb", sets: "3 x 12 reps", superset: "A", note: "Both arms, 12 lb each, paired with the overhead press so the shoulders and triceps get a round off between sets. Hinge forward with a flat back, elbows driving toward your hips, no yanking with the lower back. Keep the grip relaxed rather than squeezing hard — if the right thumb or finger hurts, switch to the supported one-arm row with the right forearm on a chair (left arm first, then right with a lighter weight)." },
      { name: "Dead bug", sets: "2 x 16 each side", superset: "B", note: "Back to 16 per side. Open hands and relaxed fingers (no fists), reach the arms toward the ceiling, lower the opposite arm and leg slowly, and keep the lower back flat — shorten the range before you let it arch." },
      { name: "Prone T raise", sets: "2 x 10 reps", superset: "B", note: "Lie face down, forehead on a folded towel, arms out in a T with the thumbs pointing up and the hands open and relaxed (no pressing into the floor). Squeeze the shoulder blades together and lift the arms a few centimetres, hold 2 seconds, lower slowly. Small and controlled; skip it if the neck, back or right palm twinges." },
      { name: "Alternating bicep curl – 8 lb", sets: "2 x 12 each arm", superset: "C", note: "Both arms, alternating, 8 lb each, 5-count lowering, full extension at the bottom, no swing from the hips. Easy grip — do not squeeze the handle. Use the left arm only if the right thumb or finger complains." },
      { name: "Overhead tricep extension – 8 lb", sets: "2 x 12 reps", superset: "C", note: "One 8 lb dumbbell held overhead with both hands, elbows pointing forward rather than flared. If holding it with the right thumb or finger hurts, do it one arm at a time with the left hand only. Stop if your back arches. Still the designated trim if Wednesday runs past 25 minutes." },
      { name: "Plank hold", sets: "2 x 30 sec", note: "On the forearms with the hands open and relaxed — rest on the forearms, not the fingers, and do not make a fist. If the right hand complains at all, skip it and do an extra round of dead bug instead. Stop the moment your hips sag." },
    ],
    cooldown: "2 min — overhead tricep stretch (20 sec each arm), doorframe pec stretch on the forearms (20 sec each side), gentle upper-trap stretch (ear toward shoulder, no pulling)",
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "Same mobility routine with the hand-loaded parts adjusted for the right palm: cat-cow is done seated with hands resting on the thighs, the 90/90 skips the hands-forward fold, and pigeon pose (which presses through the palms) is replaced by the figure-4 hip stretch lying on your back. Standing hamstring stretch is untouched, with the left hand on a chair.",
    exercises: [
      { name: "Standing hamstring stretch", sets: "2 x 45 sec each leg", note: "Unchanged, and the one that never moves. Foot forward on a low step or the floor, hinge from the hips with a flat back, left hand resting on a chair or counter if you need balance. No bouncing." },
      { name: "Cat-cow", sets: "2 x 10 slow reps", note: "Seated version this week: sit tall on a chair with your hands resting on your thighs, not pressing. Inhale to arch and lift the chest, exhale to round the back. Full breath with every rep." },
      { name: "90/90 hip stretch", sets: "2 x 45 sec each side", note: "Both knees at right angles. Sit tall and stay tall — skip the hands-forward fold this week since it needs the palms on the floor. If sitting upright is hard, put a cushion under your seat." },
      { name: "Figure-4 hip stretch", sets: "2 x 60 sec each side", note: "Replaces pigeon pose this week, because pigeon presses through the hands. Lie on your back with both knees bent and feet on the floor, cross the right ankle over the left knee, then pull the left thigh toward you by wrapping the left hand behind the thigh (or just let gravity do it if the right palm cannot help). Repeat on the other side. No pinching in the knee." },
      { name: "Overhead tricep stretch", sets: "1 x 30 sec each arm", note: "Reach one arm overhead, bend the elbow, and gently pull the elbow with the other hand. For the right arm use the left hand; for the left arm, just reach without pulling — the right palm sits this out." },
      { name: "Supine spinal twist", sets: "2 x 45 sec each side", note: "Back to 2 rounds. Let the knee drop completely and keep both shoulders on the floor." },
      { name: "Legs-up-the-wall", sets: "1 x 4 min", note: "Standard 4 min. Eyes closed, nothing else going on." },
    ],
    cooldown: "5 slow deep breaths — inhale 5, hold 2, exhale 7"
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — slow walk, high knees x20, goblet squat hold (12 lb, 20 sec, relaxed grip), hip circles x10 each way",
    warmupItems: ["Slow walk", "High knees", "Goblet squat hold", "Hip circles"],
    note: "Hand rule for Friday: the right thumb and finger are hurt, so you can hold dumbbells with a relaxed grip, but nothing that presses through the hand or fingers — no push-ups. If the thumb or finger hurts on any set, use the left hand only or put the dumbbell down. Stop each set with about 2 reps still in the tank. Friday is back to two-hand dumbbells, one step below the usual reps while the hand heals. The close-grip push-up is replaced by a wall sit (hands free), and the row is supported with the forearm so no weight goes through the hand. Wall sit sits behind the RDL, which is the hinge, so the hamstrings and quads work in turn. If the thumb or finger gets worse, numbness or tingling appears, or the pain is not improving over a few days, please have a doctor look at it.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "3 x 7 reps", superset: "A", note: "Both hands, 12 lb dumbbell held along the front of the thighs with a relaxed grip. Hinge at the hips with a flat back, 4 seconds lowering and a 1-second pause at the bottom, then stand tall. Stop where you feel the hamstring stretch, not where the back rounds. If the right thumb or finger hurts, hold the dumbbell with the left hand only and keep the right hand resting on your hip." },
      { name: "Wall sit", sets: "2 x 25 sec", superset: "A", note: "Replaces the close-grip push-up, which needs the palms. Back flat against a wall, feet about 60 cm out, slide down until the thighs are roughly parallel to the floor (higher is fine), arms crossed over your chest. Breathe and keep the neck relaxed. Stop with a few seconds left." },
      { name: "Sumo squat – 12 lb", sets: "2 x 8 reps", superset: "B", note: "Dumbbell held at the chest with both hands, wide stance, toes turned out, 3 seconds lowering. Hold it by the head of the dumbbell rather than gripping a handle if that is easier on the thumb. Wide stance is adductor work on the strained tissue, so it stays at 2 rounds. If the right hand complains, go bodyweight with arms crossed." },
      { name: "Supported one-arm row – 12 lb", sets: "2 x 10 each arm", superset: "B", note: "Both arms, one at a time. Rest the opposite forearm (not the hand or fingers) on a chair seat, flat back, 12 lb in the working hand, relaxed grip. Pull the elbow toward your hip and pause for a second. The forearm rest means no weight goes through the thumb or fingers; if the right thumb or finger still hurts holding the dumbbell, do the right arm with a lighter weight or skip it." },
      { name: "Side plank (from knees)", sets: "2 x 20 sec each side", note: "On the forearm with the hand open and relaxed — rest on the forearm, not the palm. Knees bent, hips lifted in a straight line. If the right palm or wrist complains on the right side, skip that side and do two rounds on the left only, or an extra dead bug round instead." },
      { name: "Low-impact skaters (finisher)", sets: "60 sec continuous", note: "Back to 60 sec, same as Monday. Smooth and controlled, not a sprint." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg, hand on a chair), overhead tricep stretch (20 sec each arm), figure-4 hip stretch lying on your back (45 sec each side)",
  },
  {
    label: "Sat", name: "Saturday", type: "Easy walk (optional)", tag: "rest", isRest: true,
    note: "Easy walk, 30 to 40 minutes at a conversational pace, if the hand and legs feel good. Let the right hand hang relaxed. Two things worth noticing this week: how the right palm is doing day to day (better, same or worse — and what aggravates it), and the inner thigh after the lateral lunge and sumo squat.",
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest and meal prep. This week is week 35 reworked around the right hand: legs went bodyweight, Wednesday is back to two-arm weights with the push-up dropped, and push-ups, hand-supported poses and band work are out until the thumb and finger are healed. Worth reporting before next week: (1) how the right thumb and finger are — whether they can grip, bear weight or press yet; (2) how the press, rows and Romanian deadlift felt on the hand, back and neck; (3) how the legs held up to the slow bodyweight work; (4) how the inner thigh handled the lateral lunge and sumo squat; (5) whether Wednesday and Friday fit inside 25 minutes.",
  }
];
const tagStyles = {
  strength: { background: "#ede9fe", color: "#4c1d95" },
  cardio:   { background: "#d1fae5", color: "#065f46" },
  mobility: { background: "#fef3c7", color: "#78350f" },
  rest:     { background: "#f3f4f6", color: "#374151" },
};

const supersetColors = { A: "#dbeafe", B: "#fef3c7", C: "#fce7f3" };
const supersetText   = { A: "#1e40af", B: "#92400e", C: "#831843" };

export default function WorkoutSchedule() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState({});
  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const d = days[active];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 680, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week thirty-five workout schedule</h1>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>Tap a day · illustrations show correct form · watch video · check off as you go</p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
        {days.map((day, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: "6px 14px", borderRadius: 999, fontFamily: "inherit",
            border: day.isRest ? "1px dashed #ccc" : "1px solid #ccc",
            fontSize: 13, cursor: "pointer",
            background: active === i ? "#dbeafe" : "transparent",
            color: active === i ? "#1e40af" : "#666",
            fontWeight: active === i ? 500 : 400,
            borderColor: active === i ? "#93c5fd" : "#ccc",
          }}>{day.label}</button>
        ))}
      </div>

      <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: "1.25rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <span style={{ fontSize: 17, fontWeight: 500 }}>{d.name}</span>
          <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 999, fontWeight: 500, ...tagStyles[d.tag] }}>{d.type}</span>
        </div>

        {d.isRest ? (
          <p style={{ textAlign: "center", padding: "2rem 0.5rem", color: "#555", fontSize: 15, lineHeight: 1.7 }}>{d.note}</p>
        ) : (
          <>
            {d.note && (
              <div style={{ background: d.tag === "mobility" ? "#fefce8" : "#f0fdf4", border: `1px solid ${d.tag === "mobility" ? "#fde68a" : "#bbf7d0"}`, borderRadius: 8, padding: "8px 12px", marginBottom: 14, fontSize: 12, color: d.tag === "mobility" ? "#713f12" : "#166534", lineHeight: 1.5 }}>
                {d.tag === "mobility" ? <span>&#9675; {d.note}</span> : <span>&#9654; {d.note}</span>}
              </div>
            )}
            <p style={{ fontSize: 11, fontWeight: 500, color: "#999", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>Warm-up</p>
            <div style={{ background: "#f9f9f7", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#555", lineHeight: 1.6 }}>
              {d.warmup ?? "No structured warm-up needed — start the session slowly."}
              {d.warmupItems && (
                <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {d.warmupItems.map((item, i) => (
                    <a key={i} href={WARMUP_VIDEO[item] || "#"} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 11, color: "#1d4ed8", textDecoration: "none", display: "inline-flex", alignItems: "center", background: "#eff6ff", padding: "2px 8px", borderRadius: 999, border: "1px solid #bfdbfe" }}>
                      <PlayIcon />{item}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <p style={{ fontSize: 11, fontWeight: 500, color: "#999", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 0 }}>Exercises</p>
            {d.exercises.map((ex, i) => {
              const id = `${active}-${i}`;
              const done = !!checked[id];
              const IllusComp = ILLUS[ex.name];
              const videoUrl = VIDEO[ex.name];
              return (
                <div key={id} style={{ borderTop: "1px solid #eee", padding: "12px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  {IllusComp && (
                    <div style={{ width: 72, flexShrink: 0, color: "#6b7280", opacity: done ? 0.3 : 0.9, paddingTop: 2 }}>
                      <IllusComp />
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ flex: 1 }}>
                        {ex.superset && (
                          <span style={{ fontSize: 10, fontWeight: 500, padding: "1px 6px", borderRadius: 999, marginRight: 6, background: supersetColors[ex.superset], color: supersetText[ex.superset] }}>
                            Superset {ex.superset}
                          </span>
                        )}
                        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3, marginTop: ex.superset ? 3 : 0, textDecoration: done ? "line-through" : "none", color: done ? "#bbb" : "#1a1a1a" }}>
                          {ex.name}
                        </div>
                        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginBottom: videoUrl && !done ? 5 : 0 }}>{ex.note}</div>
                        {videoUrl && !done && (
                          <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#1d4ed8", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                            <PlayIcon />watch tutorial
                          </a>
                        )}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                        <span style={{ fontSize: 13, fontWeight: 500, color: "#1d4ed8", whiteSpace: "nowrap" }}>{ex.sets}</span>
                        <div onClick={() => toggle(id)} style={{ width: 18, height: 18, borderRadius: 4, border: `1px solid ${done ? "#6ee7b7" : "#ccc"}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: done ? "#d1fae5" : "transparent" }}>
                          {done && <svg width="10" height="10" viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #eee" }} />
            <div style={{ background: "#f9f9f7", borderRadius: 8, padding: "10px 14px", marginTop: 16, fontSize: 13, color: "#555", lineHeight: 1.6 }}>
              <strong style={{ fontWeight: 500 }}>Cool-down:</strong> {d.cooldown}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
              <span style={{ fontSize: 12, color: "#6b7280" }}>{d.tag === "mobility" ? "~50-60 cal (recovery session)" : "~80-90 cal"}</span>
              <span style={{ fontSize: 12, color: "#bbb" }}>~20-24 min total</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
