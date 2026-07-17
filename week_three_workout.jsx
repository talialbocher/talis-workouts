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
  "Goblet squat – 8 lb": () => (
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
  "Lateral lunge": () => (
    <SvgWrap>
      <Gnd /><Hd cx={50} cy={13} />
      <Ln p={[[50,19],[50,43]]} />
      <Ln p={[[50,43],[26,63],[20,79]]} />
      <Ln p={[[50,43],[54,65],[54,79]]} />
      <Ln p={[[50,29],[38,43]]} w={1.5} />
      <Ln p={[[50,29],[62,43]]} w={1.5} />
    </SvgWrap>
  ),
  "Standing hip abduction": () => (
    <SvgWrap>
      <Gnd /><Hd cx={46} cy={13} />
      <Ln p={[[46,19],[46,43]]} />
      <Ln p={[[46,43],[42,79]]} />
      <Ln p={[[46,43],[68,62]]} />
      <Ln p={[[46,29],[34,46]]} w={1.5} />
      <Ln p={[[46,29],[60,44]]} w={1.5} />
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
  "Knee push-up": () => (
    <SvgWrap>
      <Gnd /><Hd cx={22} cy={28} r={6} />
      <Ln p={[[22,34],[34,42],[66,52]]} />
      <Ln p={[[22,34],[32,44],[62,52]]} />
      <Ln p={[[66,52],[70,63],[62,72],[58,79]]} />
      <circle cx={60} cy={74} r={4} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} />
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
  "Overhead press – 8 lb": () => (
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
  "Plank hold": () => (
    <SvgWrap>
      <Gnd y={67} /><Hd cx={86} cy={38} r={5} />
      <Ln p={[[80,43],[30,57]]} />
      <Ln p={[[80,43],[76,58],[68,67]]} />
      <Ln p={[[65,50],[62,63],[54,67]]} />
      <Ln p={[[30,57],[26,67]]} />
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
  "Incline or knee push-up": () => (
    <SvgWrap>
      <Gnd /><Hd cx={22} cy={28} r={6} />
      <Ln p={[[22,34],[34,42],[66,52]]} />
      <Ln p={[[22,34],[32,44],[62,52]]} />
      <Ln p={[[66,52],[70,63],[62,72],[58,79]]} />
      <circle cx={60} cy={74} r={4} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} />
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
  "Goblet squat – 8 lb": "https://www.youtube.com/results?search_query=goblet+squat+dumbbell+form+tutorial+beginner",
  "Single-leg glute bridge – 12 lb": "https://www.youtube.com/results?search_query=single+leg+glute+bridge+weighted+form+tutorial",
  "Lateral lunge": "https://www.youtube.com/results?search_query=lateral+lunge+form+tutorial+beginner",
  "Standing hip abduction": "https://www.youtube.com/results?search_query=standing+hip+abduction+form+tutorial",
  "Calf raise (single leg)": "https://www.youtube.com/results?search_query=single+leg+calf+raise+form+tutorial",
  "Step touch (finisher)": "https://www.youtube.com/results?search_query=step+touch+low+impact+cardio+tutorial",
  "Brisk walk or light cycling": "https://www.youtube.com/results?search_query=brisk+walking+technique+fitness+beginners",
  "Alternatively: dance or swim": "https://www.youtube.com/results?search_query=beginner+dance+workout+low+impact",
  "Knee push-up": "https://www.youtube.com/results?search_query=knee+push+up+form+tutorial+beginner",
  "Bent-over row – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+bent+over+row+form+beginner+tutorial",
  "Overhead press – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+overhead+shoulder+press+form+beginner",
  "Bicep curl – 8 lb": "https://www.youtube.com/results?search_query=dumbbell+bicep+curl+form+tutorial+beginner",
  "Dead bug": "https://www.youtube.com/results?search_query=dead+bug+exercise+core+form+tutorial+beginner",
  "Plank hold": "https://www.youtube.com/results?search_query=plank+form+tutorial+beginner+correct+technique",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Pigeon pose": "https://www.youtube.com/results?search_query=pigeon+pose+hip+stretch+tutorial+beginner+yoga",
  "90/90 hip stretch": "https://www.youtube.com/results?search_query=90+90+hip+stretch+tutorial+form+beginner",
  "Thread-the-needle": "https://www.youtube.com/results?search_query=thread+the+needle+stretch+thoracic+mobility+tutorial",
  "Supine spinal twist": "https://www.youtube.com/results?search_query=supine+spinal+twist+stretch+form+tutorial",
  "Legs-up-the-wall": "https://www.youtube.com/results?search_query=legs+up+the+wall+tutorial+benefits+form",
  "Romanian deadlift – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form+beginner+tutorial",
  "Incline or knee push-up": "https://www.youtube.com/results?search_query=knee+push+up+incline+push+up+progression+tutorial",
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
    warmup: "3 min — march in place, leg swings x12 each, hip circles, lateral side steps x10 each way",
    warmupItems: ["March in place", "Leg swings", "Hip circles", "Lateral side steps"],
    note: "Supersets A and B: no rest between exercises, 30 sec rest between rounds.",
    exercises: [
      { name: "Goblet squat – 8 lb", sets: "3 x 12 reps", superset: "A", note: "Hold the 8 lb dumbbell vertically at your chest. Feet wider than hip-width, toes slightly out. Squat deep — the weight counterbalances and helps you go lower with good posture." },
      { name: "Single-leg glute bridge – 12 lb", sets: "3 x 12 each side", superset: "A", note: "Rest the 12 lb dumbbell just below your hip crease on the working side. Same movement as week 2 — added load makes it significantly harder. Keep hips level." },
      { name: "Lateral lunge", sets: "3 x 10 each side", superset: "B", note: "Step wide to one side, bend that knee and sit back into it while the other leg stays straight. Push back to center. Targets inner thighs and glutes differently than any squat variation." },
      { name: "Standing hip abduction", sets: "3 x 20 each side", superset: "B", note: "Up from 15 reps. Same movement — hold a wall, lift leg out to the side slowly. Add a resistance band above the knees if you have one." },
      { name: "Calf raise (single leg)", sets: "3 x 15 each side", note: "Third set added this week. No superset — straight sets with 20 sec rest between." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Brisk side-to-side steps to finish. Push the pace a little harder than week 2." },
    ],
    cooldown: "2 min — figure-4 hip stretch (60 sec each side), seated forward fold 45 sec, child's pose"
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walking pace, arm circles, ankle rolls",
    warmupItems: ["Slow walk", "Arm circles", "Ankle rolls"],
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Full 20 minutes this week at a pace that feels moderately challenging. If walking outdoors, try a slightly hilly route. You're hitting ~110 cal at this pace and duration." },
      { name: "Alternatively: dance or swim", sets: "20 min", note: "No stopping, no breaks. 20 minutes of continuous movement. This is your aerobic base — it gets easier each week." },
    ],
    cooldown: "2 min — slow walk, deep breathing (4 in, 6 out x6), standing quad stretch (30 sec each side)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — arm circles, shoulder rolls, cat-cow x10, band pull-aparts x10 (or arm pulls across chest)",
    warmupItems: ["Arm circles", "Shoulder rolls", "Cat-cow", "Band pull-aparts"],
    note: "Supersets A and B: no rest between exercises, 30 sec rest between rounds.",
    exercises: [
      { name: "Knee push-up", sets: "3 x 15 reps", superset: "A", note: "From wall and incline, you're now on the floor — knees down. Keep your body in a straight line from knees to shoulders. Don't let your hips sag or pike up. This is real progress." },
      { name: "Bent-over row – 12 lb", sets: "3 x 15 reps", superset: "A", note: "Same weight and reps as week 2 — but now paired with a harder push-up, so the combined effort is greater. Focus on the 1-sec squeeze at the top." },
      { name: "Overhead press – 8 lb", sets: "3 x 12 reps", superset: "B", note: "Two more reps than week 2. Press straight up, lower slowly (3 counts). Brace your core before every rep — don't let your ribs flare." },
      { name: "Bicep curl – 8 lb", sets: "3 x 12 reps", superset: "B", note: "New this week. Stand tall, elbows pinned to your sides. Curl both dumbbells up slowly, lower with control (3 counts down). The lowering phase builds more muscle than the lifting phase." },
      { name: "Dead bug", sets: "3 x 12 each side", superset: "C", note: "Two more reps. You should feel comfortable with this now — focus on keeping your lower back glued to the floor even as the reps add up." },
      { name: "Plank hold", sets: "3 x 40 sec", superset: "C", note: "Up from 30 sec. If 40 sec feels solid by end of week, target 45 sec next week. Perfect form throughout — stop before you collapse." },
    ],
    cooldown: "2 min — chest opener, doorframe pec stretch, child's pose with arms extended"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "Intentionally gentle (~60-70 cal). Your body rebuilds on this day — treat it as training, not skippable.",
    exercises: [
      { name: "Cat-cow", sets: "2 x 12 slow reps", note: "Two more reps than last week. By now you should feel a meaningful difference in your spinal mobility compared to week 1." },
      { name: "Pigeon pose", sets: "2 x 60 sec each side", note: "New this week. From all fours, slide one knee forward behind your wrist and extend the other leg back. Lower your hips toward the floor. One of the best hip openers — breathe deeply into any tightness." },
      { name: "90/90 hip stretch", sets: "2 x 45 sec each side", note: "Sit tall, both knees at 90°. Try leaning forward slightly over the front shin this week for a deeper stretch." },
      { name: "Thread-the-needle", sets: "2 x 45 sec each side", note: "Five more seconds. See how much further your shoulder drops to the floor compared to week 1." },
      { name: "Supine spinal twist", sets: "2 x 60 sec each side", note: "Up from 45 sec. Fully relax — let the knee drop to the floor rather than holding it there. Breathe into the rotation." },
      { name: "Legs-up-the-wall", sets: "1 x 3 min", note: "Non-negotiable. End every Thursday here. Close your eyes. Three weeks in, this should feel like a ritual." },
    ],
    cooldown: "5 slow deep breaths — inhale 4, hold 2, exhale 6. Then inhale 5, hold 2, exhale 7."
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — side-to-side steps, hip hinges x12, goblet squat hold (8 lb, 20 sec), wrist circles",
    warmupItems: ["Side-to-side steps", "Hip hinges", "Goblet squat hold", "Wrist circles"],
    note: "Supersets A and B: no rest between exercises, 30 sec rest between rounds.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "3 x 14 reps", superset: "A", note: "Two more reps than week 2. If the tempo feels easy, slow the lowering phase to 4 counts. You should feel the hamstrings working hard by rep 12." },
      { name: "Incline or knee push-up", sets: "3 x 14 reps", superset: "A", note: "Your choice: knee push-ups on the floor or incline. Push for the harder variation. Two more reps than last week." },
      { name: "Sumo squat – 12 lb", sets: "3 x 15 reps", superset: "B", note: "Three more reps than week 2. Hold the 12 lb dumbbell at chest. Add a 2-sec pause at the bottom if reps start feeling easy." },
      { name: "Bent-over rear delt fly – 8 lb", sets: "3 x 15 reps", superset: "B", note: "Three more reps. Hinge forward, lift arms like wings. Lower slowly (3 counts). Your upper back should be noticeably stronger than week 1." },
      { name: "Pallof press (resistance band)", sets: "3 x 14 each side", note: "Two more reps per side. Keep the 3-sec hold at full extension. The longer you hold, the harder your core works. No superset." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Close out week 3 strong. Push the pace — you've earned it." },
    ],
    cooldown: "3 min — pigeon pose (60 sec each side), supine spinal twist (45 sec each side), final deep breath"
  },
  {
    label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest. Three weeks down — your body is meaningfully stronger than when you started. Recovery today means more results next week."
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest. One week left in month one. Take stock: how's your protein intake? How's sleep? Small improvements in nutrition this week will compound into big results in month two."
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
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week three workout schedule</h1>
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
