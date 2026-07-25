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

const ILLUS = {
  "Goblet squat – 12 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[48,43]]} />
      <Ln p={[[48,43],[34,62],[36,79]]} />
      <Ln p={[[48,43],[62,61],[60,79]]} />
      <circle cx={50} cy={26} r={5} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,28],[44,36]]} w={1.5} />
      <Ln p={[[50,28],[56,36]]} w={1.5} />
    </SvgWrap>
  ),
  "Single-leg glute bridge – 12 lb": () => (
    <SvgWrap>
      <Gnd y={77} /><Hd cx={90} cy={70} r={5} />
      <Ln p={[[82,73],[54,44]]} />
      <Ln p={[[54,44],[30,66],[18,73]]} />
      <Ln p={[[68,60],[56,42],[46,36]]} />
      <Ln p={[[72,73],[69,77]]} w={1.5} />
      <circle cx={64} cy={44} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Lateral lunge – 8 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[50,43]]} />
      <Ln p={[[50,43],[26,63],[20,79]]} />
      <Ln p={[[50,43],[54,65],[54,79]]} />
      <Ln p={[[50,29],[38,36]]} w={1.5} />
      <Ln p={[[50,29],[62,36]]} w={1.5} />
      <circle cx={50} cy={34} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Reverse lunge – 8 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={52} cy={13} />
      <Ln p={[[52,19],[52,43]]} />
      <Ln p={[[52,43],[37,62],[33,79]]} />
      <Ln p={[[52,43],[68,60],[70,79]]} />
      <circle cx={52} cy={30} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[52,32],[42,40]]} w={1.5} />
      <Ln p={[[52,32],[62,40]]} w={1.5} />
    </SvgWrap>
  ),
  "Calf raise (single leg)": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={11} />
      <Ln p={[[50,17],[50,43]]} />
      <Ln p={[[50,43],[46,65],[44,76],[42,79]]} />
      <Ln p={[[50,43],[56,58],[60,52]]} />
      <Ln p={[[50,28],[40,44]]} w={1.5} />
      <Ln p={[[50,28],[60,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Step touch (finisher)": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={12} />
      <Ln p={[[50,18],[52,42]]} />
      <Ln p={[[52,42],[38,62],[34,79]]} />
      <Ln p={[[52,42],[66,58],[72,76]]} />
      <Ln p={[[51,28],[64,20]]} w={1.5} />
      <Ln p={[[51,28],[38,22]]} w={1.5} />
    </SvgWrap>
  ),
  "Brisk walk or light cycling": () => (
    <SvgWrap>
      <Gnd /><Hd cx={52} cy={12} />
      <Ln p={[[52,18],[54,42]]} />
      <Ln p={[[54,42],[39,61],[35,79]]} />
      <Ln p={[[54,42],[67,58],[70,76]]} />
      <Ln p={[[53,28],[66,44]]} w={1.5} />
      <Ln p={[[53,28],[42,46]]} w={1.5} />
    </SvgWrap>
  ),
  "Alternatively: dance or swim": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={12} />
      <Ln p={[[50,18],[50,42]]} />
      <Ln p={[[50,42],[36,64],[32,79]]} />
      <Ln p={[[50,42],[64,62],[68,79]]} />
      <Ln p={[[50,28],[34,18]]} w={1.5} />
      <Ln p={[[50,28],[66,18]]} w={1.5} />
    </SvgWrap>
  ),
  "Full push-up (or knee push-up)": () => (
    <SvgWrap>
      <Gnd /><Hd cx={20} cy={28} r={6} />
      <Ln p={[[20,34],[32,42],[70,54]]} />
      <Ln p={[[20,34],[30,44],[66,54]]} />
      <Ln p={[[70,54],[76,68],[74,79]]} />
      <Ln p={[[60,51],[58,64],[52,79]]} />
    </SvgWrap>
  ),
  "Bent-over row – 12 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={16} cy={29} r={5} />
      <Ln p={[[16,34],[20,40],[70,44]]} />
      <Ln p={[[70,44],[66,66],[62,79]]} />
      <Ln p={[[70,44],[76,64],[74,79]]} />
      <Ln p={[[36,41],[32,57]]} />
      <Ln p={[[50,42],[46,57]]} />
    </SvgWrap>
  ),
  "Overhead press – 12 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={17} />
      <Ln p={[[50,23],[50,48]]} />
      <Ln p={[[50,30],[38,22],[34,10]]} />
      <Ln p={[[50,30],[62,22],[66,10]]} />
      <circle cx={34} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={66} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,48],[44,70],[42,79]]} />
      <Ln p={[[50,48],[56,70],[58,79]]} />
    </SvgWrap>
  ),
  "Bicep curl – 8 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,46]]} />
      <Ln p={[[50,30],[36,38],[30,26]]} w={1.5} />
      <Ln p={[[50,30],[64,38],[70,26]]} w={1.5} />
      <circle cx={30} cy={23} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={70} cy={23} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,46],[44,68],[42,79]]} />
      <Ln p={[[50,46],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Plank with shoulder tap": () => (
    <SvgWrap>
      <Gnd y={67} /><Hd cx={86} cy={36} r={5} />
      <Ln p={[[80,41],[30,55]]} />
      <Ln p={[[80,41],[76,56],[68,67]]} />
      <Ln p={[[65,48],[62,61],[54,67]]} />
      <Ln p={[[30,55],[26,67]]} />
      <Ln p={[[76,41],[66,34]]} w={1.5} />
    </SvgWrap>
  ),
  "Dead bug": () => (
    <SvgWrap>
      <Gnd y={72} /><Hd cx={90} cy={54} r={5} />
      <Ln p={[[84,57],[38,57]]} />
      <Ln p={[[80,57],[78,40],[76,26]]} />
      <Ln p={[[68,57],[66,69]]} w={1.5} />
      <Ln p={[[44,57],[22,65]]} />
      <Ln p={[[55,57],[54,42],[44,40]]} />
    </SvgWrap>
  ),
  "Cat-cow": () => (
    <SvgWrap>
      <Gnd y={72} /><Hd cx={17} cy={36} r={5} />
      <Ln p={[[17,41],[20,50],[50,56],[80,50],[83,44]]} />
      <Ln p={[[22,50],[18,66]]} />
      <Ln p={[[30,52],[28,66]]} />
      <Ln p={[[78,50],[76,66]]} />
      <Ln p={[[84,47],[82,66]]} />
    </SvgWrap>
  ),
  "Pigeon pose": () => (
    <SvgWrap>
      <Gnd y={75} /><Hd cx={14} cy={38} r={5} />
      <Ln p={[[14,43],[20,55],[50,60],[80,58]]} />
      <Ln p={[[50,60],[44,72],[36,75]]} />
      <Ln p={[[50,60],[70,64],[80,75]]} />
      <Ln p={[[14,43],[10,55],[8,68]]} w={1.5} />
      <Ln p={[[14,43],[18,56],[16,68]]} w={1.5} />
    </SvgWrap>
  ),
  "90/90 hip stretch": () => (
    <SvgWrap>
      <Gnd y={74} /><Hd cx={50} cy={20} r={5} />
      <Ln p={[[50,25],[50,46]]} />
      <Ln p={[[50,46],[28,54],[12,54],[12,74]]} />
      <Ln p={[[50,46],[72,46],[72,66]]} />
      <Ln p={[[50,32],[38,44]]} w={1.5} />
      <Ln p={[[50,32],[62,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Thread-the-needle": () => (
    <SvgWrap>
      <Gnd y={70} /><Hd cx={20} cy={56} r={5} />
      <Ln p={[[30,42],[70,38]]} />
      <Ln p={[[30,42],[28,64]]} />
      <Ln p={[[70,38],[66,64]]} />
      <Ln p={[[58,40],[56,64]]} />
      <Ln p={[[42,42],[32,48],[22,52],[12,56]]} />
    </SvgWrap>
  ),
  "Supine spinal twist": () => (
    <SvgWrap>
      <Gnd y={74} /><Hd cx={14} cy={44} r={5} />
      <Ln p={[[14,49],[14,62],[80,62]]} />
      <Ln p={[[50,62],[60,48],[72,52]]} />
      <Ln p={[[14,55],[14,44],[6,44]]} w={1.5} />
    </SvgWrap>
  ),
  "Legs-up-the-wall": () => (
    <SvgWrap>
      <line x1="92" y1="8" x2="92" y2="78" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
      <Gnd /><Hd cx={10} cy={70} r={5} />
      <Ln p={[[10,75],[80,75]]} />
      <Ln p={[[78,75],[80,44],[84,10]]} />
      <Ln p={[[70,75],[72,44],[76,10]]} />
      <Ln p={[[28,75],[24,79]]} w={1.5} />
      <Ln p={[[42,75],[38,79]]} w={1.5} />
    </SvgWrap>
  ),
  "Romanian deadlift – 12 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={15} cy={27} r={5} />
      <Ln p={[[15,32],[20,38],[68,44]]} />
      <Ln p={[[68,44],[64,67],[60,79]]} />
      <Ln p={[[68,44],[74,65],[72,79]]} />
      <Ln p={[[34,40],[30,57]]} />
      <Ln p={[[48,42],[44,59]]} />
      <circle cx={30} cy={60} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={44} cy={62} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Sumo squat – 12 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,44]]} />
      <Ln p={[[50,44],[30,63],[24,79]]} />
      <Ln p={[[50,44],[70,63],[76,79]]} />
      <Ln p={[[50,31],[40,44]]} w={1.5} />
      <Ln p={[[50,31],[60,44]]} w={1.5} />
      <Ln p={[[24,79],[18,75]]} w={1} />
      <Ln p={[[76,79],[82,75]]} w={1} />
    </SvgWrap>
  ),
  "Bent-over rear delt fly – 8 lb": () => (
    <SvgWrap>
      <Gnd /><Hd cx={15} cy={28} r={5} />
      <Ln p={[[15,33],[20,40],[68,44]]} />
      <Ln p={[[68,44],[64,66],[60,79]]} />
      <Ln p={[[68,44],[74,64],[72,79]]} />
      <Ln p={[[36,41],[34,22]]} />
      <Ln p={[[50,42],[48,23]]} />
      <circle cx={34} cy={20} r={3} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={48} cy={21} r={3} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Pallof press (resistance band)": () => (
    <SvgWrap>
      <circle cx={92} cy={35} r={5} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} />
      <Gnd /><Hd cx={44} cy={14} />
      <Ln p={[[44,20],[44,44]]} />
      <Ln p={[[44,30],[24,33]]} />
      <line x1="24" y1="33" x2="92" y2="35" stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} strokeDasharray="4,3" />
      <Ln p={[[44,44],[38,68],[36,79]]} />
      <Ln p={[[44,44],[50,68],[52,79]]} />
    </SvgWrap>
  ),
};

const VIDEO = {
  "Goblet squat – 12 lb": "https://www.youtube.com/results?search_query=goblet+squat+dumbbell+form+tutorial+beginner",
  "Single-leg glute bridge – 12 lb": "https://www.youtube.com/results?search_query=single+leg+glute+bridge+weighted+form+tutorial",
  "Lateral lunge – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+lateral+lunge+form+tutorial+beginner",
  "Reverse lunge – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+reverse+lunge+form+tutorial+beginner",
  "Calf raise (single leg)": "https://www.youtube.com/results?search_query=single+leg+calf+raise+form+tutorial",
  "Step touch (finisher)": "https://www.youtube.com/results?search_query=step+touch+low+impact+cardio+tutorial",
  "Brisk walk or light cycling": "https://www.youtube.com/results?search_query=brisk+walking+technique+fitness+beginners",
  "Alternatively: dance or swim": "https://www.youtube.com/results?search_query=beginner+dance+workout+low+impact",
  "Full push-up (or knee push-up)": "https://www.youtube.com/results?search_query=full+push+up+form+tutorial+beginner+correct+technique",
  "Bent-over row – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+bent+over+row+form+beginner+tutorial",
  "Overhead press – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+overhead+shoulder+press+form+beginner",
  "Bicep curl – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+bicep+curl+form+tutorial+beginner",
  "Plank with shoulder tap": "https://www.youtube.com/results?search_query=plank+shoulder+tap+form+tutorial+core+beginner",
  "Dead bug": "https://www.youtube.com/results?search_query=dead+bug+exercise+core+form+tutorial+beginner",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Pigeon pose": "https://www.youtube.com/results?search_query=pigeon+pose+hip+stretch+tutorial+beginner+yoga",
  "90/90 hip stretch": "https://www.youtube.com/results?search_query=90+90+hip+stretch+tutorial+form+beginner",
  "Thread-the-needle": "https://www.youtube.com/results?search_query=thread+the+needle+stretch+thoracic+mobility+tutorial",
  "Supine spinal twist": "https://www.youtube.com/results?search_query=supine+spinal+twist+stretch+form+tutorial",
  "Legs-up-the-wall": "https://www.youtube.com/results?search_query=legs+up+the+wall+tutorial+benefits+form",
  "Romanian deadlift – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form+beginner+tutorial",
  "Sumo squat – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+sumo+squat+form+tutorial+beginner",
  "Bent-over rear delt fly – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+rear+delt+fly+form+tutorial+beginner",
  "Pallof press (resistance band)": "https://www.youtube.com/results?search_query=pallof+press+resistance+band+core+tutorial",
};

const WARMUP_VIDEO = {
  "March in place": "https://www.youtube.com/results?search_query=march+in+place+warm+up+tutorial",
  "Hip circles": "https://www.youtube.com/results?search_query=hip+circles+warm+up+mobility+tutorial",
  "Bodyweight squat": "https://www.youtube.com/results?search_query=bodyweight+squat+form+beginner+tutorial",
  "Slow walk": "https://www.youtube.com/results?search_query=walking+warm+up+technique",
  "Arm swings": "https://www.youtube.com/results?search_query=arm+swings+warm+up+tutorial",
  "Ankle rolls": "https://www.youtube.com/results?search_query=ankle+rolls+warm+up+mobility",
  "Ankle circles": "https://www.youtube.com/results?search_query=ankle+circles+warm+up+mobility",
  "Arm circles": "https://www.youtube.com/results?search_query=arm+circles+warm+up+shoulder+mobility",
  "Shoulder rolls": "https://www.youtube.com/results?search_query=shoulder+rolls+warm+up+tutorial",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Thoracic rotation": "https://www.youtube.com/results?search_query=thoracic+rotation+warm+up+mobility+tutorial",
  "Side-to-side steps": "https://www.youtube.com/results?search_query=side+to+side+steps+warm+up+tutorial",
  "Lateral steps": "https://www.youtube.com/results?search_query=lateral+steps+warm+up+tutorial",
  "Lateral side steps": "https://www.youtube.com/results?search_query=lateral+steps+warm+up+tutorial",
  "Hip hinges": "https://www.youtube.com/results?search_query=hip+hinge+warm+up+tutorial+beginner",
  "Wrist circles": "https://www.youtube.com/results?search_query=wrist+circles+warm+up+mobility",
  "Leg swings": "https://www.youtube.com/results?search_query=leg+swings+warm+up+hip+mobility+tutorial",
  "Band pull-aparts": "https://www.youtube.com/results?search_query=band+pull+apart+warm+up+shoulder+tutorial",
  "Goblet squat hold": "https://www.youtube.com/results?search_query=goblet+squat+hold+warm+up+tutorial",
};

const days = [
  {
    label: "Mon", name: "Monday", type: "Lower body strength", tag: "strength",
    warmup: "3 min — march in place, leg swings x15 each, hip circles, lateral steps x12 each way",
    warmupItems: ["March in place", "Leg swings", "Hip circles", "Lateral steps"],
    note: "Supersets A and B: no rest between exercises, 30 sec rest between rounds.",
    exercises: [
      { name: "Goblet squat – 12 lb", sets: "3 x 15 reps", superset: "A", note: "Up from 8 lb — the heavier weight challenges your legs and core significantly more. Keep chest tall, elbows inside knees at the bottom." },
      { name: "Single-leg glute bridge – 12 lb", sets: "3 x 14 each side", superset: "A", note: "Two more reps than week 3. Hold the 12 lb dumbbell at your hip crease. Pause 2 sec at the top — squeeze hard." },
      { name: "Lateral lunge – 8 lb", sets: "3 x 12 each side", superset: "B", note: "Hold one 8 lb dumbbell at your chest as a counterweight. Same movement as week 3 but the load changes everything. Control the descent." },
      { name: "Reverse lunge – 8 lb", sets: "3 x 12 each leg", superset: "B", note: "Back in the program, now with dumbbells. Hold 8 lb in each hand at your sides. This is the biggest lower body challenge yet." },
      { name: "Calf raise (single leg)", sets: "3 x 18 each side", note: "Three more reps than week 3. Lower even more slowly — 5 counts down. No superset." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Final week — push harder than any previous session. Full arm swing, brisk pace." },
    ],
    cooldown: "3 min — figure-4 hip stretch (60 sec each side), pigeon pose (30 sec each side), child's pose"
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walking pace, arm circles, ankle rolls",
    warmupItems: ["Slow walk", "Arm circles", "Ankle rolls"],
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Your benchmark walk. Can you maintain a faster pace than week 1 for the full 20 minutes? That difference is your month-one cardio gain." },
      { name: "Alternatively: dance or swim", sets: "20 min", note: "Full 20 minutes, no breaks. Notice how much easier sustained movement feels compared to week 1 — that's real cardiovascular improvement." },
    ],
    cooldown: "2 min — slow walk, deep breathing, standing quad stretch (40 sec each side)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — arm circles, shoulder rolls, cat-cow x12, band pull-aparts x12",
    warmupItems: ["Arm circles", "Shoulder rolls", "Cat-cow", "Band pull-aparts"],
    note: "Supersets A, B, and C: no rest between exercises, 30 sec rest between rounds.",
    exercises: [
      { name: "Full push-up (or knee push-up)", sets: "3 x 10 reps", superset: "A", note: "The milestone of month one. Attempt full push-ups — hands and toes, body in a rigid straight line. If form breaks, drop to knees immediately. Even 3 full + 7 knee is progress. Note your count." },
      { name: "Bent-over row – 12 lb", sets: "3 x 15 reps", superset: "A", note: "Same as week 3. Paired with harder push-ups, the total effort is the highest it's been. Squeeze 2 sec at the top." },
      { name: "Overhead press – 12 lb", sets: "3 x 12 reps", superset: "B", note: "Step up from 8 lb. The 12 lb will feel heavy — that's the point. Strict form: brace core, don't arch back, press straight up." },
      { name: "Bicep curl – 8 lb", sets: "3 x 15 reps", superset: "B", note: "Three more reps than week 3. Lower with a full 4-count descent. The eccentric (lowering) phase is where the most muscle is built." },
      { name: "Dead bug", sets: "3 x 14 each side", superset: "C", note: "Two more reps. Your core is significantly stronger than week 1 — notice how controlled and steady the movement feels now." },
      { name: "Plank with shoulder tap", sets: "3 x 20 taps (10 each side)", superset: "C", note: "Evolution of the plank hold. From high plank, tap each shoulder alternately — slowly, minimising hip rotation. Harder than it looks." },
    ],
    cooldown: "2 min — chest opener, doorframe pec stretch, child's pose with arms extended, deep breathing"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "Final mobility session of month one. Take your time — this is both recovery and reflection.",
    exercises: [
      { name: "Cat-cow", sets: "2 x 12 slow reps", note: "Compare how this feels to week 1. Spinal mobility improves noticeably over 4 weeks of consistent practice." },
      { name: "Pigeon pose", sets: "2 x 75 sec each side", note: "Longest hold yet. Breathe into the hip — each exhale lets you sink a little deeper. No forcing, just gravity and time." },
      { name: "90/90 hip stretch", sets: "2 x 60 sec each side", note: "Up from 45 sec. Try the forward lean variation — hinge over the front shin to deepen the stretch." },
      { name: "Thread-the-needle", sets: "2 x 50 sec each side", note: "Five more seconds each side. By now your shoulder should be resting much closer to the floor than week 1." },
      { name: "Supine spinal twist", sets: "2 x 60 sec each side", note: "Full minute on each side. Completely relax into it — no muscular holding, just passive rotation and breath." },
      { name: "Legs-up-the-wall", sets: "1 x 5 min", note: "Extended to 5 minutes for the final week. Close your eyes. Think about how far you've come in 4 weeks. Breathe slowly." },
    ],
    cooldown: "5 slow deep breaths. Inhale 5, hold 3, exhale 7. Repeat x5. Month one done."
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — side-to-side steps, hip hinges x15, goblet squat hold (12 lb, 20 sec), wrist circles",
    warmupItems: ["Side-to-side steps", "Hip hinges", "Goblet squat hold", "Wrist circles"],
    note: "Supersets A and B: no rest between exercises, 30 sec rest between rounds. Final strength session of month one — make it count.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "4 x 12 reps", superset: "A", note: "Fourth set added this week. Your hamstrings and glutes are ready for it. Keep the tempo controlled — 3 counts down, drive up." },
      { name: "Full push-up (or knee push-up)", sets: "4 x 10 reps", superset: "A", note: "Second push-up session of the week. Track how many full reps you can do — this is your month-one benchmark. Write it down." },
      { name: "Sumo squat – 12 lb", sets: "3 x 18 reps", superset: "B", note: "Highest rep count yet. Hold the 12 lb dumbbell at chest. If last few reps feel too easy, add a 3-sec pause at the bottom." },
      { name: "Bent-over rear delt fly – 8 lb", sets: "3 x 18 reps", superset: "B", note: "Same — push the reps. Hinge forward, lift like wings, lower slowly. Your upper back posture will have visibly improved this month." },
      { name: "Pallof press (resistance band)", sets: "3 x 15 each side", note: "Highest rep count yet. Keep the 3-sec hold. Your anti-rotation core stability is one of the biggest month-one gains — functional and invisible." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Last finisher of month one. Go as hard as you can while keeping it low-impact. Celebrate the consistency." },
    ],
    cooldown: "4 min — pigeon pose (75 sec each side), supine spinal twist (60 sec each side), deep breathing x5. Month one complete."
  },
  {
    label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest. Month one is done. Four weeks of consistent work — that's not nothing, that's the hardest part. Your body is stronger, your movement patterns are sharper, and the habits are forming."
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest. Month two starts Monday. The workouts will get harder — more sets, heavier loads, new exercises. But so will you. Prep your meals, get to bed on time, and enjoy having built something real."
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
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week four workout schedule</h1>
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
              <span style={{ fontSize: 12, color: "#6b7280" }}>{d.tag === "mobility" ? "~60-70 cal (recovery session)" : "~100 cal"}</span>
              <span style={{ fontSize: 12, color: "#bbb" }}>~20 min total</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
