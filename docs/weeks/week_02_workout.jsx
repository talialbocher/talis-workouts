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
  "Bodyweight squat (slow tempo)": () => (<SvgWrap><Gnd /><Hd cx={50} cy={13} /><Ln p={[[50,19],[48,43]]} /><Ln p={[[48,43],[34,61],[38,79]]} /><Ln p={[[48,43],[62,60],[58,79]]} /><Ln p={[[49,29],[37,43]]} w={1.5} /><Ln p={[[49,29],[62,42]]} w={1.5} /><Ln p={[[72,30],[72,50]]} w={1} /><Ln p={[[69,47],[72,51],[75,47]]} w={1} /></SvgWrap>),
  "Single-leg glute bridge": () => (<SvgWrap><Gnd y={77} /><Hd cx={90} cy={70} r={5} /><Ln p={[[82,73],[54,44]]} /><Ln p={[[54,44],[30,66],[18,73]]} /><Ln p={[[68,60],[56,42],[46,36]]} /><Ln p={[[72,73],[69,77]]} w={1.5} /></SvgWrap>),
  "Reverse lunge with knee drive": () => (<SvgWrap><Gnd /><Hd cx={50} cy={12} /><Ln p={[[50,18],[50,42]]} /><Ln p={[[50,42],[44,66],[44,79]]} /><Ln p={[[50,42],[58,56],[54,42]]} /><Ln p={[[50,28],[40,44]]} w={1.5} /><Ln p={[[50,28],[62,38]]} w={1.5} /></SvgWrap>),
  "Lateral band walk": () => (<SvgWrap><Gnd /><Hd cx={50} cy={13} /><Ln p={[[50,19],[50,43]]} /><Ln p={[[50,43],[38,65],[34,79]]} /><Ln p={[[50,43],[62,65],[68,79]]} /><Ln p={[[50,29],[40,43]]} w={1.5} /><Ln p={[[50,29],[60,43]]} w={1.5} /><line x1="34" y1="66" x2="68" y2="66" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="3,2" /></SvgWrap>),
  "Calf raise (single leg)": () => (<SvgWrap><Gnd /><Hd cx={50} cy={11} /><Ln p={[[50,17],[50,43]]} /><Ln p={[[50,43],[46,65],[44,76],[42,79]]} /><Ln p={[[50,43],[56,58],[60,52]]} /><Ln p={[[50,28],[40,44]]} w={1.5} /><Ln p={[[50,28],[60,44]]} w={1.5} /></SvgWrap>),
  "Step touch (finisher)": () => (<SvgWrap><Gnd /><Hd cx={50} cy={12} /><Ln p={[[50,18],[52,42]]} /><Ln p={[[52,42],[38,62],[34,79]]} /><Ln p={[[52,42],[66,58],[72,76]]} /><Ln p={[[51,28],[64,20]]} w={1.5} /><Ln p={[[51,28],[38,22]]} w={1.5} /></SvgWrap>),
  "Brisk walk or light cycling": () => (<SvgWrap><Gnd /><Hd cx={52} cy={12} /><Ln p={[[52,18],[54,42]]} /><Ln p={[[54,42],[39,61],[35,79]]} /><Ln p={[[54,42],[67,58],[70,76]]} /><Ln p={[[53,28],[66,44]]} w={1.5} /><Ln p={[[53,28],[42,46]]} w={1.5} /></SvgWrap>),
  "Alternatively: dance or swim": () => (<SvgWrap><Gnd /><Hd cx={50} cy={12} /><Ln p={[[50,18],[50,42]]} /><Ln p={[[50,42],[36,64],[32,79]]} /><Ln p={[[50,42],[64,62],[68,79]]} /><Ln p={[[50,28],[34,18]]} w={1.5} /><Ln p={[[50,28],[66,18]]} w={1.5} /></SvgWrap>),
  "Incline push-up (chair or couch)": () => (<SvgWrap><rect x="58" y="46" width="34" height="18" rx="3" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} /><Gnd /><Hd cx={22} cy={22} r={6} /><Ln p={[[22,28],[32,36],[64,46]]} /><Ln p={[[22,28],[30,38],[60,46]]} /><Ln p={[[64,46],[72,62],[70,79]]} /></SvgWrap>),
  "Bent-over row – 12 lb": () => (<SvgWrap><Gnd /><Hd cx={16} cy={29} r={5} /><Ln p={[[16,34],[20,40],[70,44]]} /><Ln p={[[70,44],[66,66],[62,79]]} /><Ln p={[[70,44],[76,64],[74,79]]} /><Ln p={[[36,41],[32,57]]} /><Ln p={[[50,42],[46,57]]} /></SvgWrap>),
  "Lateral raise – 8 lb": () => (<SvgWrap><Gnd /><Hd cx={50} cy={14} /><Ln p={[[50,20],[50,46]]} /><Ln p={[[50,28],[28,22]]} w={1.5} /><Ln p={[[50,28],[72,22]]} w={1.5} /><circle cx={24} cy={21} r={4} stroke="currentColor" strokeWidth={1.5} /><circle cx={76} cy={21} r={4} stroke="currentColor" strokeWidth={1.5} /><Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} /></SvgWrap>),
  "Dead bug": () => (<SvgWrap><Gnd y={72} /><Hd cx={90} cy={54} r={5} /><Ln p={[[84,57],[38,57]]} /><Ln p={[[80,57],[78,40],[76,26]]} /><Ln p={[[68,57],[66,69]]} w={1.5} /><Ln p={[[44,57],[22,65]]} /><Ln p={[[55,57],[54,42],[44,40]]} /></SvgWrap>),
  "Plank hold": () => (<SvgWrap><Gnd y={67} /><Hd cx={86} cy={38} r={5} /><Ln p={[[80,43],[30,57]]} /><Ln p={[[80,43],[76,58],[68,67]]} /><Ln p={[[65,50],[62,63],[54,67]]} /><Ln p={[[30,57],[26,67]]} /></SvgWrap>),
  "Cat-cow": () => (<SvgWrap><Gnd y={72} /><Hd cx={17} cy={36} r={5} /><Ln p={[[17,41],[20,50],[50,56],[80,50],[83,44]]} /><Ln p={[[22,50],[18,66]]} /><Ln p={[[30,52],[28,66]]} /><Ln p={[[78,50],[76,66]]} /><Ln p={[[84,47],[82,66]]} /></SvgWrap>),
  "90/90 hip stretch": () => (<SvgWrap><Gnd y={74} /><Hd cx={50} cy={20} r={5} /><Ln p={[[50,25],[50,46]]} /><Ln p={[[50,46],[28,54],[12,54],[12,74]]} /><Ln p={[[50,46],[72,46],[72,66]]} /><Ln p={[[50,32],[38,44]]} w={1.5} /><Ln p={[[50,32],[62,44]]} w={1.5} /></SvgWrap>),
  "Thread-the-needle": () => (<SvgWrap><Gnd y={70} /><Hd cx={20} cy={56} r={5} /><Ln p={[[30,42],[70,38]]} /><Ln p={[[30,42],[28,64]]} /><Ln p={[[70,38],[66,64]]} /><Ln p={[[58,40],[56,64]]} /><Ln p={[[42,42],[32,48],[22,52],[12,56]]} /></SvgWrap>),
  "Supine spinal twist": () => (<SvgWrap><Gnd y={74} /><Hd cx={14} cy={44} r={5} /><Ln p={[[14,49],[14,62],[80,62]]} /><Ln p={[[50,62],[60,48],[72,52]]} /><Ln p={[[14,55],[14,44],[6,44]]} w={1.5} /></SvgWrap>),
  "Legs-up-the-wall": () => (<SvgWrap><line x1="92" y1="8" x2="92" y2="78" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" /><Gnd /><Hd cx={10} cy={70} r={5} /><Ln p={[[10,75],[80,75]]} /><Ln p={[[78,75],[80,44],[84,10]]} /><Ln p={[[70,75],[72,44],[76,10]]} /><Ln p={[[28,75],[24,79]]} w={1.5} /><Ln p={[[42,75],[38,79]]} w={1.5} /></SvgWrap>),
  "Romanian deadlift – 12 lb": () => (<SvgWrap><Gnd /><Hd cx={15} cy={27} r={5} /><Ln p={[[15,32],[20,38],[68,44]]} /><Ln p={[[68,44],[64,67],[60,79]]} /><Ln p={[[68,44],[74,65],[72,79]]} /><Ln p={[[34,40],[30,57]]} /><Ln p={[[48,42],[44,59]]} /><circle cx={30} cy={60} r={4} stroke="currentColor" strokeWidth={1.5} /><circle cx={44} cy={62} r={4} stroke="currentColor" strokeWidth={1.5} /></SvgWrap>),
  "Push-up (wall or incline)": () => (<SvgWrap><rect x="66" y="58" width="28" height="20" rx="3" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} /><Gnd /><Hd cx={28} cy={25} r={6} /><Ln p={[[28,31],[36,40],[70,57]]} /><Ln p={[[28,31],[34,42],[66,56]]} /><Ln p={[[70,57],[76,72],[74,79]]} /></SvgWrap>),
  "Sumo squat with pause – 12 lb": () => (<SvgWrap><Gnd /><Hd cx={50} cy={14} /><Ln p={[[50,20],[50,44]]} /><Ln p={[[50,44],[30,63],[24,79]]} /><Ln p={[[50,44],[70,63],[76,79]]} /><Ln p={[[50,31],[40,44]]} w={1.5} /><Ln p={[[50,31],[60,44]]} w={1.5} /><Ln p={[[24,79],[18,75]]} w={1} /><Ln p={[[76,79],[82,75]]} w={1} /></SvgWrap>),
  "Resistance band pull-apart": () => (<SvgWrap><Gnd /><Hd cx={50} cy={14} /><Ln p={[[50,20],[50,46]]} /><Ln p={[[50,28],[30,30]]} w={1.5} /><Ln p={[[50,28],[70,30]]} w={1.5} /><line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="3,2" /><circle cx={28} cy={30} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={72} cy={30} r={3} stroke="currentColor" strokeWidth={1.5} /><Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} /></SvgWrap>),
  "Pallof press (resistance band)": () => (<SvgWrap><circle cx={92} cy={35} r={5} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} /><Gnd /><Hd cx={44} cy={14} /><Ln p={[[44,20],[44,44]]} /><Ln p={[[44,30],[24,33]]} /><line x1="24" y1="33" x2="92" y2="35" stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} strokeDasharray="4,3" /><Ln p={[[44,44],[38,68],[36,79]]} /><Ln p={[[44,44],[50,68],[52,79]]} /></SvgWrap>),
};

const VIDEO = {
  "Bodyweight squat (slow tempo)": "https://www.youtube.com/results?search_query=bodyweight+squat+slow+tempo+form+beginner",
  "Single-leg glute bridge": "https://www.youtube.com/results?search_query=single+leg+glute+bridge+form+tutorial+beginner",
  "Reverse lunge with knee drive": "https://www.youtube.com/results?search_query=reverse+lunge+knee+drive+form+tutorial",
  "Lateral band walk": "https://www.youtube.com/results?search_query=lateral+band+walk+form+tutorial+glutes",
  "Calf raise (single leg)": "https://www.youtube.com/results?search_query=single+leg+calf+raise+form+tutorial",
  "Step touch (finisher)": "https://www.youtube.com/results?search_query=step+touch+low+impact+cardio+tutorial",
  "Brisk walk or light cycling": "https://www.youtube.com/results?search_query=brisk+walking+technique+fitness+beginners",
  "Alternatively: dance or swim": "https://www.youtube.com/results?search_query=beginner+dance+workout+low+impact",
  "Incline push-up (chair or couch)": "https://www.youtube.com/results?search_query=incline+push+up+chair+form+beginner+tutorial",
  "Bent-over row – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+bent+over+row+form+beginner+tutorial",
  "Lateral raise – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+lateral+raise+form+tutorial+beginner",
  "Dead bug": "https://www.youtube.com/results?search_query=dead+bug+exercise+core+form+tutorial+beginner",
  "Plank hold": "https://www.youtube.com/results?search_query=plank+form+tutorial+beginner+correct+technique",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "90/90 hip stretch": "https://www.youtube.com/results?search_query=90+90+hip+stretch+tutorial+form+beginner",
  "Thread-the-needle": "https://www.youtube.com/results?search_query=thread+the+needle+stretch+thoracic+mobility+tutorial",
  "Supine spinal twist": "https://www.youtube.com/results?search_query=supine+spinal+twist+stretch+form+tutorial",
  "Legs-up-the-wall": "https://www.youtube.com/results?search_query=legs+up+the+wall+tutorial+benefits+form",
  "Romanian deadlift – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form+beginner+tutorial",
  "Push-up (wall or incline)": "https://www.youtube.com/results?search_query=wall+incline+push+up+form+beginner+tutorial",
  "Sumo squat with pause – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+sumo+squat+pause+form+tutorial",
  "Resistance band pull-apart": "https://www.youtube.com/results?search_query=resistance+band+pull+apart+form+tutorial+posture",
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
    warmup: "3 min — march in place, leg swings (10 each leg), bodyweight squats x10, hip circles",
    warmupItems: ["March in place", "Leg swings", "Bodyweight squat", "Hip circles"],
    note: "Do each superset back-to-back with no rest between exercises. Rest 30 sec between rounds.",
    exercises: [
      { name: "Bodyweight squat (slow tempo)", sets: "3 x 15 reps", superset: "A", note: "3-sec descent, 1-sec pause at the bottom. Same movement as week 1, meaningfully harder." },
      { name: "Single-leg glute bridge", sets: "3 x 10 each side", superset: "A", note: "From glute bridge, extend one leg straight. Drive through the grounded heel. Keep hips level." },
      { name: "Reverse lunge with knee drive", sets: "3 x 10 each leg", superset: "B", note: "Step back into lunge, then drive the back knee up toward your chest as you stand. Don't swing." },
      { name: "Lateral band walk", sets: "3 x 12 steps each way", superset: "B", note: "Band just above knees, slight squat, step sideways keeping band tension throughout. Great for outer glutes." },
      { name: "Calf raise (single leg)", sets: "2 x 15 each side", note: "Hold a wall for balance. Lower slowly (4 counts down). Straight sets — no superset." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Brisk side-to-side steps with arms swinging. Keeps heart rate up and gets you to ~100 cal." },
    ],
    cooldown: "2 min — seated hamstring stretch, figure-4 hip stretch (45 sec each side), child's pose with side reach"
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walking pace, arm circles, ankle rolls",
    warmupItems: ["Slow walk", "Arm circles", "Ankle rolls"],
    exercises: [
      { name: "Brisk walk or light cycling", sets: "18-20 min", note: "Two more minutes than week 1. Aim to feel slightly more breathless at the same effort — a sign your fitness is improving." },
      { name: "Alternatively: dance or swim", sets: "18-20 min", note: "Add more intensity this week — bigger arm movements, faster tempo for short bursts. Keep moving with minimal rest." },
    ],
    cooldown: "2 min — slow walk, deep breathing (4 in, 6 out x6), light quad and hip flexor stretch"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — arm circles, shoulder rolls, cat-cow x10, thoracic rotation with reach",
    warmupItems: ["Arm circles", "Shoulder rolls", "Cat-cow", "Thoracic rotation"],
    note: "Do each superset back-to-back with no rest between exercises. Rest 30 sec between rounds.",
    exercises: [
      { name: "Incline push-up (chair or couch)", sets: "3 x 12 reps", superset: "A", note: "Hands on sturdy chair or couch edge — harder than the wall. Keep body in a straight plank line." },
      { name: "Bent-over row – 12 lb", sets: "3 x 15 reps", superset: "A", note: "Step up to 12 lb this week. Hinge at hips, back flat. Squeeze shoulder blades at top, hold 1 sec." },
      { name: "Lateral raise – 8 lb", sets: "3 x 12 reps", superset: "B", note: "Use 8 lb dumbbells. Raise arms out to shoulder height, pause, lower slowly (3 counts). Deceptively hard." },
      { name: "Dead bug", sets: "3 x 10 each side", superset: "B", note: "Two more reps than week 1. Slow it way down — the slower the better for core activation." },
      { name: "Plank hold", sets: "3 x 30 sec", note: "Up from 20 sec. Drop to knees before letting form break. Rest 20 sec between sets." },
    ],
    cooldown: "2 min — chest opener, thread-the-needle (30 sec each side), child's pose"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "This session is intentionally gentle (~60-70 cal). Its job is recovery, not burn — it directly improves your strength day performance.",
    exercises: [
      { name: "Cat-cow", sets: "2 x 10 slow reps", note: "Inhale on cow (back dips), exhale on cat (back rounds). More range of motion than week 1." },
      { name: "90/90 hip stretch", sets: "2 x 45 sec each side", note: "Both knees at 90°, one in front, one to the side. Sit tall. Targets hip internal and external rotation simultaneously." },
      { name: "Thread-the-needle", sets: "2 x 40 sec each side", note: "Five extra seconds this week. Try to relax the shoulder a little closer to the floor than week 1." },
      { name: "Supine spinal twist", sets: "2 x 45 sec each side", note: "Lie on back, pull one knee across body. Arm out to the side, look opposite. Let gravity do the work." },
      { name: "Legs-up-the-wall", sets: "1 x 3 min", note: "Non-negotiable. Close your eyes, breathe slowly, fully relax. This is your cortisol reset for the week." },
    ],
    cooldown: "Finish with 5 slow deep breaths — inhale 4 counts, hold 2, exhale 6"
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — side-to-side steps, hip hinges x12, wrist circles, band pull-aparts x10",
    warmupItems: ["Side-to-side steps", "Hip hinges", "Band pull-aparts", "Wrist circles"],
    note: "Do each superset back-to-back with no rest between exercises. Rest 30 sec between rounds.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "3 x 12 reps", superset: "A", note: "Step up to 12 lb this week. Focus on the hamstring stretch at the bottom. Slow the lowering to 4 counts if easy." },
      { name: "Push-up (wall or incline)", sets: "3 x 12 reps", superset: "A", note: "Two more reps than week 1. Move from wall to incline if you haven't yet — progress is moving toward the floor." },
      { name: "Sumo squat with pause – 12 lb", sets: "3 x 12 reps", superset: "B", note: "Hold 12 lb dumbbell vertically at chest. Pause 2 sec at the bottom — removes momentum and forces harder muscle work." },
      { name: "Resistance band pull-apart", sets: "3 x 15 reps", superset: "B", note: "Band at chest height, arms straight. Pull ends apart until band touches chest. Great for posture and upper back." },
      { name: "Pallof press (resistance band)", sets: "3 x 12 each side", note: "Two more reps per side. Add a 3-sec hold with arms extended before returning. Alternate sides." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Brisk side-to-side to close out the week strong. Arms swinging, keep moving the full 2 minutes." },
    ],
    cooldown: "3 min — pigeon pose or figure-4 (60 sec each side), supine spinal twist, final deep breath"
  },
  { label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true, note: "Rest. Two weeks in — notice anything? More energy, better sleep, a little more strength? These are early signs the plan is working. Recovery is where the gains happen." },
  { label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true, note: "Rest. Use today to prep protein-rich meals for the week. Even one or two prepped items — hard-boiled eggs, cooked lentils, Greek yogurt portioned out — makes a big difference." }
];

const tagStyles = {
  strength: { background: "#ede9fe", color: "#4c1d95" },
  cardio:   { background: "#d1fae5", color: "#065f46" },
  mobility: { background: "#fef3c7", color: "#78350f" },
  rest:     { background: "#f3f4f6", color: "#374151" },
};

const supersetColors = { A: "#dbeafe", B: "#fef3c7" };
const supersetText   = { A: "#1e40af", B: "#92400e" };

export default function WorkoutSchedule() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState({});
  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const d = days[active];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 680, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week two workout schedule</h1>
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
