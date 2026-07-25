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
  "March in place": "https://www.youtube.com/results?search_query=march+in+place+warm+up+tutorial",
  "Hip circles": "https://www.youtube.com/results?search_query=hip+circles+warm+up+mobility+tutorial",
  "Bodyweight squat": "https://www.youtube.com/results?search_query=bodyweight+squat+form+beginner+tutorial",
  "Slow walk": "https://www.youtube.com/results?search_query=walking+warm+up+technique",
  "Arm swings": "https://www.youtube.com/results?search_query=arm+swings+warm+up+tutorial",
  "Ankle rolls": "https://www.youtube.com/results?search_query=ankle+rolls+warm+up+mobility",
  "Arm circles": "https://www.youtube.com/results?search_query=arm+circles+warm+up+shoulder+mobility",
  "Shoulder rolls": "https://www.youtube.com/results?search_query=shoulder+rolls+warm+up+tutorial",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Thoracic rotation": "https://www.youtube.com/results?search_query=thoracic+rotation+warm+up+mobility+tutorial",
  "Side-to-side steps": "https://www.youtube.com/results?search_query=side+to+side+steps+warm+up+tutorial",
  "Hip hinges": "https://www.youtube.com/results?search_query=hip+hinge+warm+up+tutorial+beginner",
  "Wrist circles": "https://www.youtube.com/results?search_query=wrist+circles+warm+up+mobility",
  "Leg swings": "https://www.youtube.com/results?search_query=leg+swings+warm+up+hip+mobility+tutorial",
  "Band pull-aparts": "https://www.youtube.com/results?search_query=band+pull+apart+warm+up+shoulder+tutorial",
  "Goblet squat hold": "https://www.youtube.com/results?search_query=goblet+squat+hold+warm+up+tutorial",
  "Lateral steps": "https://www.youtube.com/results?search_query=lateral+steps+warm+up+tutorial",
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
  "Step touch (finisher)": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={12} />
      <Ln p={[[50,18],[52,42]]} /><Ln p={[[52,42],[38,62],[34,79]]} /><Ln p={[[52,42],[66,58],[72,76]]} />
      <Ln p={[[51,28],[64,20]]} w={1.5} /><Ln p={[[51,28],[38,22]]} w={1.5} />
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
  "Full push-up (or knee push-up)": () => (
    <SvgWrap><Gnd /><Hd cx={20} cy={28} r={6} />
      <Ln p={[[20,34],[32,42],[70,54]]} /><Ln p={[[20,34],[30,44],[66,54]]} />
      <Ln p={[[70,54],[76,68],[74,79]]} /><Ln p={[[60,51],[58,64],[52,79]]} />
    </SvgWrap>
  ),
  "Renegade row – 8 lb": () => (
    <SvgWrap><Gnd /><Hd cx={20} cy={30} r={6} />
      <Ln p={[[20,36],[32,44],[68,54]]} /><Ln p={[[20,36],[30,46],[64,54]]} />
      <Ln p={[[68,54],[74,68],[72,79]]} /><Ln p={[[58,51],[56,64],[50,79]]} />
      <Ln p={[[44,48],[40,34]]} w={1.5} />
      <circle cx={40} cy={31} r={4} stroke="currentColor" strokeWidth={1.5} />
    </SvgWrap>
  ),
  "Overhead press – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={17} />
      <Ln p={[[50,23],[50,48]]} /><Ln p={[[50,30],[38,22],[34,10]]} /><Ln p={[[50,30],[62,22],[66,10]]} />
      <circle cx={34} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={66} cy={8} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,48],[44,70],[42,79]]} /><Ln p={[[50,48],[56,70],[58,79]]} />
    </SvgWrap>
  ),
  "Bicep curl – 12 lb": () => (
    <SvgWrap><Gnd /><Hd cx={50} cy={14} />
      <Ln p={[[50,20],[50,46]]} /><Ln p={[[50,30],[36,38],[30,26]]} w={1.5} /><Ln p={[[50,30],[64,38],[70,26]]} w={1.5} />
      <circle cx={30} cy={23} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={70} cy={23} r={4} stroke="currentColor" strokeWidth={1.5} />
      <Ln p={[[50,46],[44,68],[42,79]]} /><Ln p={[[50,46],[56,68],[58,79]]} />
    </SvgWrap>
  ),
  "Plank with shoulder tap": () => (
    <SvgWrap><Gnd y={67} /><Hd cx={86} cy={36} r={5} />
      <Ln p={[[80,41],[30,55]]} /><Ln p={[[80,41],[76,56],[68,67]]} />
      <Ln p={[[65,48],[62,61],[54,67]]} /><Ln p={[[30,55],[26,67]]} />
      <Ln p={[[76,41],[66,34]]} w={1.5} />
    </SvgWrap>
  ),
  "Dead bug": () => (
    <SvgWrap><Gnd y={72} /><Hd cx={90} cy={54} r={5} />
      <Ln p={[[84,57],[38,57]]} /><Ln p={[[80,57],[78,40],[76,26]]} />
      <Ln p={[[68,57],[66,69]]} w={1.5} /><Ln p={[[44,57],[22,65]]} />
      <Ln p={[[55,57],[54,42],[44,40]]} />
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
  "Thread-the-needle": () => (
    <SvgWrap><Gnd y={70} /><Hd cx={20} cy={56} r={5} />
      <Ln p={[[30,42],[70,38]]} /><Ln p={[[30,42],[28,64]]} />
      <Ln p={[[70,38],[66,64]]} /><Ln p={[[58,40],[56,64]]} />
      <Ln p={[[42,42],[32,48],[22,52],[12,56]]} />
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
  "Step touch (finisher)": "https://www.youtube.com/results?search_query=step+touch+low+impact+cardio+tutorial",
  "Brisk walk or light cycling": "https://www.youtube.com/results?search_query=brisk+walking+technique+fitness+beginners",
  "Alternatively: dance or swim": "https://www.youtube.com/results?search_query=beginner+dance+workout+low+impact",
  "Full push-up (or knee push-up)": "https://www.youtube.com/results?search_query=full+push+up+form+tutorial+beginner",
  "Renegade row – 8 lb": "https://www.youtube.com/results?search_query=renegade+row+dumbbell+form+tutorial+beginner",
  "Overhead press – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+overhead+press+form+tutorial+beginner",
  "Bicep curl – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+bicep+curl+form+tutorial+beginner",
  "Plank with shoulder tap": "https://www.youtube.com/results?search_query=plank+shoulder+tap+form+tutorial+core",
  "Dead bug": "https://www.youtube.com/results?search_query=dead+bug+exercise+core+form+tutorial+beginner",
  "Cat-cow": "https://www.youtube.com/results?search_query=cat+cow+stretch+form+tutorial+beginner",
  "Pigeon pose": "https://www.youtube.com/results?search_query=pigeon+pose+hip+stretch+tutorial+yoga",
  "90/90 hip stretch": "https://www.youtube.com/results?search_query=90+90+hip+stretch+tutorial+form+beginner",
  "Thread-the-needle": "https://www.youtube.com/results?search_query=thread+the+needle+stretch+thoracic+mobility",
  "Supine spinal twist": "https://www.youtube.com/results?search_query=supine+spinal+twist+stretch+form+tutorial",
  "Legs-up-the-wall": "https://www.youtube.com/results?search_query=legs+up+the+wall+tutorial+benefits",
  "Romanian deadlift – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form+tutorial",
  "Sumo squat – 12 lb": "https://www.youtube.com/results?search_query=dumbbell+sumo+squat+form+tutorial",
  "Arnold press – 8 lb": "https://www.youtube.com/results?search_query=arnold+press+dumbbell+form+tutorial+beginner",
  "Pallof press (resistance band)": "https://www.youtube.com/results?search_query=pallof+press+resistance+band+core+tutorial",
};

const days = [
  {
    label: "Mon", name: "Monday", type: "Lower body strength", tag: "strength",
    warmup: "3 min — march in place, leg swings x12 each, hip circles, lateral steps x12 each way",
    warmupItems: ["March in place", "Leg swings", "Hip circles", "Lateral steps"],
    note: "Back to 4 sets on key movements. Weights return to week 5 levels. Supersets A and B — 30 sec rest between rounds.",
    exercises: [
      { name: "Goblet squat – 12 lb", sets: "4 x 12 reps", superset: "A", note: "Back to 12 lb after week 6's 8 lb reset. Pause 2 sec at the bottom. You should feel noticeably stronger here than after the vacation." },
      { name: "Hip thrust – 12 lb", sets: "4 x 12 reps", superset: "A", note: "Four sets — this is the same as week 5. Drive through your heels, squeeze hard at the top, 2-sec hold. Your biggest glute exercise." },
      { name: "Reverse lunge – 8 lb", sets: "3 x 12 each leg", superset: "B", note: "Up from 10 reps in week 6. Controlled 3-count descent. If this feels solid, it's a sign your legs have fully recovered." },
      { name: "Lateral lunge – 8 lb", sets: "3 x 12 each side", superset: "B", note: "Up from 10 reps. Sit deep into the working hip — don't rush back to center. Feel the inner thigh load." },
      { name: "Calf raise (single leg)", sets: "3 x 18 each side", superset: null, note: "Up from 15 reps in week 6. 5-count descent. No superset — full rest between sets." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Full 2 minutes back. Push the pace — you've had two weeks to recover." },
    ],
    cooldown: "3 min — figure-4 hip stretch (60 sec each side), pigeon pose (40 sec each side), child's pose"
  },
  {
    label: "Tue", name: "Tuesday", type: "Low-impact cardio", tag: "cardio",
    warmup: "2 min — slow walk, arm swings, ankle rolls",
    warmupItems: ["Slow walk", "Arm swings", "Ankle rolls"],
    exercises: [
      { name: "Brisk walk or light cycling", sets: "20 min", note: "Back to the month 2 intensity cue — only a few words at a time. You've been active for two weeks; your cardio base is solid. Push a little." },
      { name: "Alternatively: dance or swim", sets: "20 min", note: "Full 20 minutes. Try short 30-sec intensity bursts every few minutes with easy movement in between — same interval-lite approach as week 5." },
    ],
    cooldown: "2 min — slow walk, deep breathing, standing quad stretch (40 sec each side)"
  },
  {
    label: "Wed", name: "Wednesday", type: "Upper body + core", tag: "strength",
    warmup: "3 min — arm circles, shoulder rolls, cat-cow x10, band pull-aparts x12",
    warmupItems: ["Arm circles", "Shoulder rolls", "Cat-cow", "Band pull-aparts"],
    note: "Overhead press and bicep curl return to 12 lb. Renegade row back in. Supersets A, B, C — 30 sec rest between rounds.",
    exercises: [
      { name: "Full push-up (or knee push-up)", sets: "3 x 10 reps", superset: "A", note: "Track your full push-up count again. Compare it to your week 6 benchmark — you should be at or near your week 4/5 numbers after the reset." },
      { name: "Renegade row – 8 lb", sets: "3 x 8 each side", superset: "A", note: "Back after the week 6 break. Plank position, row one dumbbell at a time. Keep hips square — resist the rotation. This is the hardest exercise in the program." },
      { name: "Overhead press – 12 lb", sets: "3 x 12 reps", superset: "B", note: "Back to 12 lb. After two weeks at lower load your shoulders should feel fresh. Press straight up, 3-count descent, core braced." },
      { name: "Bicep curl – 12 lb", sets: "3 x 12 reps", superset: "B", note: "Back to 12 lb. Elbows pinned, 4-count descent. The heavier weight after a reset week often feels surprisingly manageable." },
      { name: "Dead bug", sets: "3 x 12 each side", superset: "C", note: "Up from 10 in week 6. Slow and deliberate — lower back flat throughout. Your core has had two weeks to consolidate." },
      { name: "Plank with shoulder tap", sets: "3 x 20 taps (10 each side)", superset: "C", note: "Back to week 5 numbers. Slow taps, minimal hip sway. Stop before form breaks." },
    ],
    cooldown: "2 min — chest opener, doorframe pec stretch, thread-the-needle (30 sec each side), child's pose"
  },
  {
    label: "Thu", name: "Thursday", type: "Mobility + recovery", tag: "mobility",
    warmup: null,
    note: "Recovery is training. Two weeks of varied activity means your body needs this session as much as ever.",
    exercises: [
      { name: "Cat-cow", sets: "2 x 12 slow reps", note: "Inhale on cow, exhale on cat. Take stock of how your spine feels after two weeks of mixed activity." },
      { name: "Pigeon pose", sets: "2 x 75 sec each side", note: "Hips may still carry some residual hiking tightness. Breathe into the compression — each exhale lets you sink a little deeper." },
      { name: "90/90 hip stretch", sets: "2 x 60 sec each side", note: "Lean forward over the front shin for the deeper version. Both hip internal and external rotation." },
      { name: "Thread-the-needle", sets: "2 x 50 sec each side", note: "Upper back release. Notice how far your shoulder drops compared to week 1 — that's months of accumulated mobility work." },
      { name: "Supine spinal twist", sets: "2 x 60 sec each side", note: "Full passive rotation. Let the knee drop, let the shoulder release, breathe slowly." },
      { name: "Legs-up-the-wall", sets: "1 x 5 min", note: "Five minutes. Eyes closed. This is your weekly nervous system reset — don't skip it." },
    ],
    cooldown: "5 slow deep breaths — inhale 5, hold 2, exhale 7"
  },
  {
    label: "Fri", name: "Friday", type: "Full body strength", tag: "strength",
    warmup: "3 min — side-to-side steps, hip hinges x12, goblet squat hold (12 lb, 20 sec), wrist circles",
    warmupItems: ["Side-to-side steps", "Hip hinges", "Goblet squat hold", "Wrist circles"],
    note: "4 sets on RDL and push-ups — back to full week 5 volume. Arnold press replaces rear delt fly again. 30 sec rest between rounds.",
    exercises: [
      { name: "Romanian deadlift – 12 lb", sets: "4 x 12 reps", superset: "A", note: "Four sets, 12 reps. Your hamstrings are strong after two active weeks. 4-count lowering phase — feel the stretch at the bottom of every rep." },
      { name: "Full push-up (or knee push-up)", sets: "4 x 10 reps", superset: "A", note: "Four sets — same as week 5. Second push-up session of the week. Cumulative fatigue from Wednesday makes this harder. That's the point." },
      { name: "Sumo squat – 12 lb", sets: "3 x 15 reps", superset: "B", note: "Up from 12 reps in week 6. 12 lb dumbbell at chest. Wide stance, toes out, 2-sec pause at the bottom." },
      { name: "Arnold press – 8 lb", sets: "3 x 10 reps", superset: "B", note: "Back after week 6. Start with palms facing you at shoulder height, rotate to face forward as you press. More shoulder activation than a standard press." },
      { name: "Pallof press (resistance band)", sets: "3 x 14 each side", superset: null, note: "3-sec hold at full extension. Up from 12 reps in week 6. Your anti-rotation core strength is one of the best things you've built in this program." },
      { name: "Step touch (finisher)", sets: "2 min continuous", note: "Full 2 minutes. End of week 7 — you've come back strong." },
    ],
    cooldown: "3 min — pigeon pose (75 sec each side), supine spinal twist (60 sec each side), deep breathing x5"
  },
  {
    label: "Sat", name: "Saturday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest. Week 7 done — you've successfully returned to full training volume after the break. Next week builds from here."
  },
  {
    label: "Sun", name: "Sunday", type: "Rest", tag: "rest", isRest: true,
    note: "Rest and meal prep. You're back on track — keep the protein consistent this week and you'll feel the difference in your energy and recovery."
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
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Week seven workout schedule</h1>
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
