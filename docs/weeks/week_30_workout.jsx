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
  "Shoulder rolls": "https://www.youtube.com/results?search_query=shoulder+rolls+warm+up+mobility+tutorial",
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

ILLUS["Supported one-arm row – 8 lb"] = ILLUS["Bent-over row – 12 lb"];
ILLUS["Chair squat (bodyweight)"] = ILLUS["Goblet squat – 12 lb"];
ILLUS["Reverse lunge (bodyweight)"] = ILLUS["Reverse lunge – 8 lb"];
ILLUS["Lateral lunge (bodyweight)"] = ILLUS["Lateral lunge – 8 lb"];
ILLUS["Glute bridge (bodyweight)"] = ILLUS["Hip thrust – 12 lb"];
ILLUS["Sumo squat (bodyweight)"] = ILLUS["Sumo squat – 12 lb"];
ILLUS["Chin tuck"] = () => (
  <SvgWrap><Gnd /><Hd cx={50} cy={22} r={9} />
    <Ln p={[[50,31],[50,50]]} /><Ln p={[[50,36],[38,46]]} w={1.5} /><Ln p={[[50,36],[62,46]]} w={1.5} />
    <Ln p={[[50,50],[44,70],[42,79]]} /><Ln p={[[50,50],[56,70],[58,79]]} />
    <Ln p={[[78,22],[66,22]]} w={1.5} /><Ln p={[[69,19],[66,22],[69,25]]} w={1.5} />
  </SvgWrap>
);
ILLUS["Wall angel"] = () => (
  <SvgWrap>
    <line x1="30" y1="4" x2="30" y2="79" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
    <Gnd /><Hd cx={38} cy={16} r={6} />
    <Ln p={[[38,22],[38,50]]} /><Ln p={[[38,28],[52,24],[50,10]]} w={1.5} /><Ln p={[[38,28],[52,34],[56,22]]} w={1.5} />
    <Ln p={[[38,50],[36,70],[36,79]]} /><Ln p={[[38,50],[44,70],[44,79]]} />
  </SvgWrap>
);
ILLUS["Band pull-apart (light)"] = () => (
  <SvgWrap><Gnd /><Hd cx={50} cy={14} />
    <Ln p={[[50,20],[50,48]]} /><Ln p={[[50,30],[22,32]]} w={1.5} /><Ln p={[[50,30],[78,32]]} w={1.5} />
    <line x1="22" y1="32" x2="78" y2="32" stroke="currentColor" strokeOpacity={0.35} strokeWidth={1} strokeDasharray="4,3" />
    <Ln p={[[50,48],[44,68],[42,79]]} /><Ln p={[[50,48],[56,68],[58,79]]} />
  </SvgWrap>
);
ILLUS["Child's pose"] = () => (
  <SvgWrap><Gnd y={72} /><Hd cx={20} cy={58} r={5} />
    <Ln p={[[26,56],[60,44],[74,60],[60,68]]} /><Ln p={[[24,56],[6,66]]} w={1.5} />
    <Ln p={[[74,60],[70,72]]} w={1.5} />
  </SvgWrap>
);
ILLUS["Wall sit"] = () => (
  <SvgWrap>
    <line x1="24" y1="4" x2="24" y2="79" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
    <Gnd /><Hd cx={32} cy={16} r={6} />
    <Ln p={[[32,22],[32,52]]} /><Ln p={[[32,52],[62,52],[62,78]]} /><Ln p={[[32,32],[48,42]]} w={1.5} />
  </SvgWrap>
);

const VIDEO = {
  "Supported one-arm row – 8 lb": "https://www.youtube.com/results?search_query=supported+one+arm+dumbbell+row+bench+form+beginner",
  "Chair squat (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+chair+squat+form+tutorial+beginner",
  "Reverse lunge (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+reverse+lunge+form+tutorial+beginner",
  "Lateral lunge (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+lateral+lunge+form+tutorial+beginner",
  "Chin tuck": "https://www.youtube.com/results?search_query=chin+tuck+exercise+neck+pain+tutorial",
  "Wall angel": "https://www.youtube.com/results?search_query=wall+angels+exercise+form+tutorial+beginner",
  "Band pull-apart (light)": "https://www.youtube.com/results?search_query=band+pull+apart+form+tutorial+beginner",
  "Child's pose": "https://www.youtube.com/results?search_query=childs+pose+stretch+tutorial+beginner",
  "Wall sit": "https://www.youtube.com/results?search_query=wall+sit+exercise+form+tutorial+beginner",
  "Glute bridge (bodyweight)": "https://www.youtube.com/results?search_query=glute+bridge+form+tutorial+beginner",
  "Sumo squat (bodyweight)": "https://www.youtube.com/results?search_query=bodyweight+sumo+squat+form+tutorial+beginner",
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
    label: "Mon", name: "Monday", type: "Gentle lower body", tag: "strength", cal: "~50-60 cal", time: "~18-22 min total",
    warmup: "3 min — slow walk, hip circles x10 each way, ankle rolls x10 each, cat-cow x6 (small and slow)",
    warmupItems: ["Slow walk", "Hip circles", "Ankle rolls", "Cat-cow"],
    note: "Week 30 — no neck/back report arrived, so this is a small, cautious step off week 29: legs gain 2 reps, still 2 rounds, still bodyweight. Return week after the neck and back strain. Everything is bodyweight, nothing is held overhead or at the chest, nothing hinges forward, and there is no finisher. Reps are at or below week 27's, with fewer rounds. The rule for the whole week: if a movement pulls on the neck or back, stop that movement and move on — pain-free is the only way to do it. Stand tall, ribs stacked over hips, eyes forward.",
    exercises: [
      { name: "Chair squat (bodyweight)", sets: "2 x 12 reps", superset: "A", note: "Sit back to a chair, touch down lightly, stand up. No weight in your hands, so nothing pushes down on the spine. Chest up, eyes forward, don't tuck the chin or look at the floor." },
      { name: "Calf raise (single leg)", sets: "2 x 10 each side", superset: "A", note: "Fingertips on a wall or counter for balance, so you can stay upright. 5-count descent, full stretch at the bottom." },
      { name: "Reverse lunge (bodyweight)", sets: "2 x 10 each leg", superset: "B", note: "Hands on hips, step straight back, torso stays upright. Short step is fine — you are not chasing depth this week." },
      { name: "Lateral lunge (bodyweight)", sets: "2 x 8 each side", superset: "B", note: "No dumbbell and a small range. Stay tall and keep the hips back only as far as is comfortable. Inner-thigh gate unchanged — stop and tell me if it feels sharp or one-sided." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg, upright, hand on a chair — don't round the back), calf stretch against a wall (30 sec each leg), slow walk and deep breathing"
  },
  {
    label: "Tue", name: "Tuesday", type: "Easy walk", tag: "cardio", cal: "~60-70 cal", time: "~20 min total",
    warmup: "2 min — slow walk, relaxed arm swings, ankle rolls",
    warmupItems: ["Slow walk", "Arm swings", "Ankle rolls"],
    note: "Walking is the best thing you can do for a strained back, so this is the one day that stays at full length — but at an easy, conversational pace, on flat ground. Cycling and swimming are out for now: both hold the neck and upper back in one bent or turned position for 20 minutes.",
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Easy walk only. Walk tall, eyes on the horizon rather than the ground, arms swinging loosely. You should be able to chat the whole way. Cut it short if the back or neck starts to ache — even 10 minutes counts. (Skip the cycling option this week.)" },
    ],
    cooldown: "2 min — slow walk, deep breathing, standing hamstring stretch (30 sec each leg, hand on a chair)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Neck + upper-back care", tag: "mobility", cal: "~30-40 cal", time: "~18-22 min total",
    warmup: "2 min — slow walk, shoulder rolls x10 backward, cat-cow x6",
    warmupItems: ["Slow walk", "Shoulder rolls", "Cat-cow"],
    note: "Week 30 adds one movement: a supported one-arm row (hand and knee on a sofa, back fully supported) and the curl goes to 12. Everything else stays parked. This week's upper-body day is gentle posture work instead of the usual session. Overhead press, bent-over row, push-ups, tricep extension, dead bug and plank are all parked: they load the neck, upper back or lower back, and each needs a felt-fine report before it returns. Move slowly, stop at the first twinge, and skip anything that provokes pain.",
    exercises: [
      { name: "Chin tuck", sets: "2 x 8 reps (3-sec hold)", superset: "A", note: "Standing or sitting tall, glide the head straight back as if making a double chin, without tilting down. Hold 3 seconds, release. Tiny movement, no force." },
      { name: "Wall angel", sets: "2 x 8 slow reps", superset: "A", note: "Back and head against a wall, elbows bent at your sides, slide the arms up only as far as they stay on the wall without the ribs flaring or the neck cranking. Stop well short of the top if needed." },
      { name: "Band pull-apart (light)", sets: "2 x 10 reps", superset: "B", note: "Light band at chest height, arms straight, pull apart from the shoulder blades. Shoulders stay down away from the ears. Stop at 80 percent of your range." },
      { name: "Supported one-arm row – 8 lb", sets: "2 x 8 each arm", superset: "C", note: "The one movement returning this week. One hand and one knee on a sofa or sturdy chair so the back stays flat and fully supported, 8 lb in the other hand. Pull the elbow toward the hip, no twisting, neck long and eyes on the floor just ahead. Stop at the first twinge in the neck or back and skip it — the full bent-over row stays parked." },
      { name: "Alternating bicep curl – 8 lb", sets: "2 x 12 each arm", superset: "B", note: "Seated with your back against a chair, so the spine is supported. Slow 4-count down. No swing, and don't shrug." },
    ],
    cooldown: "3 min — doorframe chest stretch (30 sec, elbows below shoulder height), gentle upper-trap stretch (ear toward shoulder, 20 sec each side, no pulling), 5 slow breaths"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility", cal: "~40-50 cal (recovery session)", time: "~18-22 min total",
    warmup: null,
    note: "Gentle version of the usual mobility routine. Hip flexors and hamstrings are the priority — sitting tightens both and they pull on the lower back — so those stay in. Pigeon pose and the spinal twist step out for the week because they twist and load the lower back; child's pose takes their place. Hold every stretch to a mild pull, never a pinch.",
    exercises: [
      { name: "Standing hamstring stretch", sets: "2 x 30 sec each leg", note: "Hold stays in every week. Heel on a low step, hinge only until you feel the back of the leg, spine long. If the back objects, lie on your back and use a towel around the foot instead." },
      { name: "Cat-cow", sets: "2 x 8 slow reps", note: "Small, comfortable range, with the breath leading it: inhale into the arch, exhale into the round. Don't push to the end of the range." },
      { name: "Kneeling hip flexor stretch", sets: "2 x 30 sec each side", note: "Tuck the pelvis under so the stretch is in the front of the hip rather than the lower back. Pad the kneeling knee." },
      { name: "90/90 hip stretch", sets: "1 x 30 sec each side", note: "Sit tall first. Skip the forward fold this week — just sit tall and breathe. Cushion under the seat if the back rounds." },
      { name: "Child's pose", sets: "2 x 45 sec", note: "Knees wide, sit hips back toward heels, arms long in front or resting by your sides. Let the back relax and the breath move into the lower ribs." },
      { name: "Legs-up-the-wall", sets: "1 x 4 min", note: "Standard 4 min. Eyes closed, nothing else going on. It takes load off the lower back." },
    ],
    cooldown: "5 slow deep breaths — inhale 5, hold 2, exhale 7"
  },
  {
    label: "Fri", name: "Friday", type: "Gentle lower body", tag: "strength", cal: "~45-55 cal", time: "~18-22 min total",
    warmup: "3 min — slow walk, hip circles x10 each way, leg swings x8 each (small), cat-cow x6",
    warmupItems: ["Slow walk", "Hip circles", "Leg swings", "Cat-cow"],
    note: "Week 30: wall sit 25 sec, glute bridge 12. Same idea as Monday — bodyweight legs and glutes only, with the back supported. Romanian deadlift, hip thrust and the loaded hinge work, close-grip push-up, Arnold press, Pallof press and finishers are parked until you report the neck and back as fine.",
    exercises: [
      { name: "Wall sit", sets: "2 x 25 sec", superset: "A", note: "Back flat against the wall, thighs roughly parallel to the floor (higher is fine). The wall supports the back, so this is a good leg-strength choice right now. Breathe and keep the neck relaxed." },
      { name: "Glute bridge (bodyweight)", sets: "2 x 12 reps", superset: "A", note: "On your back, feet flat, press through the heels until hips and shoulders line up, with a 2-sec squeeze at the top. Stop when the glutes are doing it — don't arch the lower back to go higher." },
      { name: "Sumo squat (bodyweight)", sets: "2 x 10 reps", superset: "B", note: "Wide stance, toes turned out, hands clasped at the chest or on hips. Inner-thigh gate unchanged. Stay tall." },
      { name: "Calf raise (single leg)", sets: "2 x 10 each side", superset: "B", note: "Fingertips on a wall, 5-count descent." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg, hand on a chair), figure-4 hip stretch (30 sec each side, lying on your back), slow breathing"
  },
  {
    label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest or a gentle walk. This week is about getting the neck and back settled, not training. If you are noticeably better by now, a short walk is great. If pain is sharp or radiating, if you get numbness or tingling in the arms or legs, or if it is not improving over a week or so, please see a doctor or physio rather than training through it."
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest and meal prep. Week 30 is a cautious step off week 29 (assumed trained, since no report arrived): leg reps +2, curl +2, and one supported row back in. Still parked until you report them fine: overhead press, full bent-over row, push-ups, plank, dead bug, Romanian deadlift, hip thrust, Arnold press, tricep extension. Please report how the neck and back feel and whether the supported row was fine — that decides week 31. (Earlier note, week 29:) Week 29 was a return week built from week 27's levels or lower, not week 28's — week 28 was never trained, so nothing was banked. Nothing ramps this week, and every movement that loads the neck or back is parked. Worth reporting before next week: (1) how the neck and back feel now — better, same or worse, and which sessions (if any) provoked them; (2) whether each of these felt fine: overhead press, bent-over row, push-ups, plank, dead bug, Romanian deadlift, hip thrust, Arnold press — this decides what returns in week 30; (3) how the inner thigh handled the bodyweight lateral lunge and sumo squat; (4) whether the overhead press fix for the Wednesday reshuffle held up before the strain — still unreported."
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
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week thirty workout schedule</h1>
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
              <span style={{ fontSize: 12, color: "#6b7280" }}>{d.cal}</span>
              <span style={{ fontSize: 12, color: "#bbb" }}>{d.time}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
