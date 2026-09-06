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

const VIDEO = {
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
    warmup: "3 min — high knees x20, standing hamstring sweep x10 each leg, leg swings x10 each, ankle rolls x10 each",
    warmupItems: ["High knees", "Standing hamstring sweep", "Leg swings", "Ankle rolls"],
    note: "First session back after three weeks off. Nothing this week is a test. Weeks 21 and 22 were written but never trained, so their numbers are paper, not history — this week restarts from week 21's return-week shape and goes a step lower again, because three weeks is longer than two and this break had no walking in it. Weight stays at 8/12 lb: three weeks costs coordination and work capacity, not much strength, and there is no lighter dumbbell to drop to anyway. The 1.5-rep goblet squat stays parked — technique work under load is the wrong thing to ask of a first session back.",
    exercises: [
      { name: "Goblet squat – 12 lb", sets: "3 x 10 reps", superset: "A", note: "Straight reps, no 1.5-rep style. 12 lb holds — this is about re-grooving the pattern, so think smooth and controlled rather than deep and heavy. If 10 feels like plenty, 10 is the right number." },
      { name: "Hip thrust – 12 lb", sets: "3 x 10 reps", superset: "A", note: "Down from 15 at your peak. Glutes come back faster than anything else after a layoff, so this one will feel closer to normal than the rest. Keep the 3-sec top squeeze — that costs nothing to hold on to." },
      { name: "Reverse lunge – 8 lb", sets: "3 x 8 each leg", superset: "B", note: "Step straight back, slow descent. Single-leg balance is the first thing to go and the first thing to come back — expect the first round to wobble and the third to feel noticeably steadier." },
      { name: "Lateral lunge – 8 lb", sets: "2 x 8 each side", superset: "B", note: "2 rounds, not 3. Week 22 put this back to 3 rounds on paper, but that week was never trained, so the bump does not carry over. This is also the movement behind the old adductor strain, which earns it the most cautious return in the week. Sideways load is the pattern that detrains fastest." },
      { name: "Calf raise (single leg)", sets: "2 x 10 each side", note: "Standalone, and lower than the last return week — that one followed two weeks of heavy walking, which kept the calves loaded. This break did not. 5-count descent, hold the rail if you need it." },
      { name: "Low-impact skaters (finisher)", sets: "45 sec continuous", note: "45 sec, not 60. Easy pace, land soft. Back to 60 sec once a full week goes by without soreness." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg), calf stretch against a wall (30 sec each leg), figure-4 hip stretch (30 sec each side)"
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walk, arm swings, ankle rolls",
    warmupItems: ["Slow walk", "Arm swings", "Ankle rolls"],
    note: "This is the one change from how the last return week was built. That time cardio was left at full effort because two weeks of daily walking and swimming had kept the aerobic base intact. Three weeks of no training does not, so Tuesday eases in this time: same 20 minutes, but at a genuinely conversational pace. Building the habit back matters more this week than the effort level.",
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Full 20 min, easy effort — you should be able to hold a conversation the whole way. Do not chase the pace you had a month ago; it comes back on its own within a week or two." },
      { name: "Alternatively: dance or swim", sets: "20 min", note: "A swim is a good pick after a layoff — it warms up the shoulders and lats gently, which sets Wednesday up nicely. Same rule: easy effort." },
    ],
    cooldown: "2 min — slow walk, deep breathing, standing hamstring stretch (30 sec each leg)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — arm circles, cat-cow x10, band pull-aparts x12, tricep warm-up circles x10",
    warmupItems: ["Arm circles", "Cat-cow", "Band pull-aparts", "Tricep warm-up circles"],
    note: "Upper body detrains fastest with a full break — nothing in three weeks off maintains pressing or pulling. Push-up, press and curl all come down; row and tricep extension stay at 2 rounds. Being straight about the row: it has had exactly one real week at 3 rounds, back in week 18. Every 3-round row prescribed since then landed in a week that was not trained. It re-earns the third round on real sessions rather than inheriting it from files.",
    exercises: [
      { name: "Knee push-up (progressing to full)", sets: "3 x 8 reps", superset: "A", note: "Expect to be on your knees more than you were before the break. That is correct pacing after a layoff, not a step backwards — the reps count either way." },
      { name: "Overhead press – 8 lb (tempo)", sets: "3 x 10 reps", superset: "A", note: "8 lb, and keep the 4-count up and 4-count down. The tempo is doing the work here, which is exactly why it survives the deload when the reps do not." },
      { name: "Alternating bicep curl – 8 lb", sets: "3 x 10 each arm", superset: "B", note: "4-count descent, full extension at the bottom. One arm at a time, no swinging from the hips." },
      { name: "Overhead tricep extension – 8 lb", sets: "2 x 9 reps", superset: "B", note: "2 rounds. Elbows pointing forward rather than flared out. If Wednesday starts running long, this is the first thing to trim — not the row." },
      { name: "Bent-over row – 12 lb", sets: "2 x 10 reps", superset: "C", note: "2 rounds. This is the only real pulling movement in the week, so it matters more than its position on the list suggests — a desk week plus three weeks off is a lot of forward-rounded shoulder time. Back flat, elbows driving toward your hips." },
      { name: "Dead bug", sets: "2 x 10 each side", superset: "C", note: "Paired with the row to save time. Lower back stays flat against the floor the whole way — if it lifts, shorten the range." },
      { name: "Plank hold", sets: "2 x 18 sec", note: "Standalone, and deliberately short. Core endurance falls off faster than anything else across a break. Stop the moment your hips start to sag rather than grinding out the clock." },
    ],
    cooldown: "2 min — overhead tricep stretch (20 sec each arm), chest opener, doorframe pec stretch"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "Built for three weeks of sitting rather than three weeks of travelling. The kneeling hip flexor stretch stays in from the travel weeks — a desk job with no training behind it shortens hip flexors just as effectively as long flights did. The calf and soleus stretch steps back out, since there was no walking load this time, and 90/90 takes its slot back. Still about 20 min, and the standing hamstring stretch is untouched as always.",
    exercises: [
      { name: "Standing hamstring stretch", sets: "2 x 45 sec each leg", note: "Unchanged, and the one stretch that never moves. Foot forward on a low step or the floor, hinge from the hips with a flat back. No bouncing." },
      { name: "Cat-cow", sets: "2 x 10 slow reps", note: "Full breath with every rep. A good first thing after weeks of desk posture." },
      { name: "Kneeling hip flexor stretch", sets: "2 x 45 sec each side", note: "Stays in from the travel weeks, for a different reason: three weeks of sitting without training is exactly what shortens these. Back knee down, front foot forward, squeeze the back glute and tuck the pelvis before you lean in — the tuck is what actually reaches the hip flexor." },
      { name: "90/90 hip stretch", sets: "2 x 45 sec each side", note: "Back in, taking the calf stretch's slot. Both knees at right angles, sit tall first, then walk the hands forward over the front shin." },
      { name: "Pigeon pose", sets: "2 x 45 sec each side", note: "Breathe into the hip and let it release a little further on each exhale. Prop the hip on a cushion if the knee complains." },
      { name: "Overhead tricep stretch", sets: "1 x 30 sec each arm", note: "Reach one arm overhead, bend the elbow, gently pull with the other hand." },
      { name: "Supine spinal twist", sets: "1 x 45 sec each side", note: "Full release — let the knee drop completely and keep both shoulders on the floor." },
      { name: "Legs-up-the-wall", sets: "1 x 4 min", note: "Back to the standard 4 min now that there are no flights to recover from. Eyes closed, nothing else going on." },
    ],
    cooldown: "5 slow deep breaths — inhale 5, hold 2, exhale 7"
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — high knees x20, goblet squat hold (12 lb, 20 sec), wrist circles",
    warmupItems: ["High knees", "Goblet squat hold", "Wrist circles"],
    note: "Same logic as Monday. The RDL comes down hardest — nothing in three weeks off loads hamstrings eccentrically, and this is the lift with the longest history of causing next-day tightness. Sumo squat and Pallof press both stay at 2 rounds; Pallof's move to 3 rounds has now been prescribed twice, in weeks 20 and 22, and trained zero times.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "3 x 9 reps", superset: "A", note: "12 lb held, reps well down. Controlled lowering, moderate range — stop where you feel the stretch, not where your back starts to round. This is the lift to be most patient with after a break." },
      { name: "Close-grip push-up (or knee)", sets: "3 x 6 reps", superset: "A", note: "Hands shoulder-width for extra tricep work. Matching Wednesday's pressing cut — drop to knees whenever you need to." },
      { name: "Sumo squat – 12 lb", sets: "2 x 10 reps", superset: "B", note: "2 rounds. Wide stance is adductor work, the same tissue as the old strain, and it detrains completely across a full break. Toes turned out, dumbbell at the chest, no rushing the bottom." },
      { name: "Arnold press – 8 lb", sets: "2 x 8 reps", superset: "B", note: "Palms facing you to start, rotate outward as you press. Control the rotation rather than throwing it — the rotation is the whole point of the exercise." },
      { name: "Pallof press (resistance band)", sets: "2 x 10 each side", note: "Standalone, 2 rounds. 3-sec hold at full extension, ribs down, and do not let your torso rotate toward the band." },
      { name: "Low-impact skaters (finisher)", sets: "45 sec continuous", note: "45 sec, same as Monday. Easy pace — this is a finisher, not a sprint." },
    ],
    cooldown: "3 min — standing hamstring stretch (30 sec each leg), overhead tricep stretch (20 sec each arm), pigeon pose (45 sec each side)"
  },
  {
    label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest or a gentle walk. The thing worth noticing this week is how Monday and Wednesday felt the morning after. General, even, both-sides soreness after three weeks off is expected and completely fine — it fades by the second week back. Sharp, one-sided, or specifically inner-thigh is a different thing: report that and next week holds here instead of climbing."
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest and meal prep. Getting back after three weeks off is the whole win this week — none of these numbers are a benchmark, and the plan is to climb back over two to three weeks rather than one. Worth reporting before next week: (1) did you actually get the sessions in, and did anything feel harder than expected; (2) how the inner thigh handled lateral lunge and sumo squat coming back cold; (3) whether Wednesday and Friday fit inside 25 minutes at these reduced numbers. Bookkeeping note: weeks 21 and 22 were generated but never trained, so the bent-over row and Pallof press dropped back to 2 rounds again — those bumps have only ever been clean on paper."
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
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week twenty-three workout schedule</h1>
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
              <span style={{ fontSize: 12, color: "#6b7280" }}>{d.tag === "mobility" ? "~50-60 cal (recovery session)" : "~70-80 cal"}</span>
              <span style={{ fontSize: 12, color: "#bbb" }}>~18-22 min total</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
