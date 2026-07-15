# Fitness Program Summary — Context for Claude Code

## User Profile

- **Age:** 43, Female
- **Height:** 5'6" | **Weight:** 128 lbs
- **Diet:** Pescatarian, intuitive eating
- **Fitness level:** Beginner
- **Job:** Desk / sedentary
- **Goal:** General fitness / "best version of myself" — 3-month timeline
- **Equipment:** 8 lb and 12 lb dumbbell sets, minimal other equipment (resistance band available)
- **Constraints:** 20-minute sessions, 5 days/week, home workouts

## Program Structure (Weekly Template)

| Day | Focus | Notes |
|---|---|---|
| Monday | Lower body strength | Supersets A + B, standalone calf raise |
| Tuesday | Low-impact cardio | Brisk walk/cycling or dance/swim, 20 min |
| Wednesday | Upper body + core | Supersets, includes tricep/underarm work (added week 12) |
| Thursday | Mobility + recovery | No structured warm-up; hip/spine/hamstring stretches |
| Friday | Full body strength | Supersets, cardio finisher |
| Saturday | Rest | Optional gentle walk |
| Sunday | Rest | Meal prep day |

## File Deliverables

13 interactive React (.jsx) artifacts were created: `week_one_workout.jsx` through `week_thirteen_workout.jsx`.

**Each file includes:**
- SVG stick-figure illustrations demonstrating correct form per exercise
- YouTube tutorial search links per exercise AND per warm-up movement
- Superset grouping shown via color-coded pill labels (Superset A/B/C)
- Interactive checkboxes to mark exercises complete (fade illustration when done)
- Day-tab navigation (Mon–Sun)
- Calorie estimate and total time displayed per session
- Cooldown section per day

## Standing User Preferences (Critical — Apply to All Future Sessions)

1. **Units:** Celsius and kilometers (not Fahrenheit/miles)
2. **Equipment:** Only 8 lb and 12 lb dumbbells — do not assume access to other weights
3. **Sets:** Capped at **3 sets maximum** per exercise — user cannot reliably complete 4 sets
4. **Session length:** Must stay close to **20–25 minutes total**, including warm-up and cooldown stretching
5. **Banned "too easy" exercises (replaced permanently):**
   - ~~March in place~~ → **High knees**
   - ~~Step touch~~ → **Low-impact skaters**
6. **Push-up/plank targets:** Should reflect what the user can actually complete (dropping to knees mid-set is valid pacing, not failure) — do not set aspirational-only numbers
7. **Hamstring care:** Recurring sensitivity — avoid stacking too much hip-hinge volume (RDL + lunges + hip thrust) in back-to-back sessions without adequate stretching in cooldowns
8. **Tempo/technique over raw weight increases:** When 12 lb was too heavy for overhead press and bicep curl, the fix was tempo training (4-count up/4-count down) and alternating-arm curls at 8 lb — NOT simply forcing the heavier weight

## Chronological Program Evolution (Weeks 1–13)

### Week 1
Foundational exercises introduced: bodyweight squat, glute bridge, reverse lunge, wall push-up, bent-over row, overhead press, dead bug, plank, cat-cow, hip flexor stretch, RDL, sumo squat.

### Week 2
Progressive variations added: single-leg glute bridge, lunge with knee drive, lateral band walk, incline push-up, lateral raise, 90/90 hip stretch, resistance band pull-apart.

### Week 3
New variations: goblet squat (8 lb), lateral lunge, knee push-up, bicep curl (8 lb), pigeon pose.

### Week 4
Weight increases: goblet squat to 12 lb, first attempts at full push-ups, overhead press to 12 lb, plank with shoulder taps introduced.

### Week 5 (Month 2 begins)
Volume increase to 4 sets on key lifts. New exercises: hip thrust (12 lb, replacing glute bridge), renegade row, Arnold press.

### Weeks 6–7: Vacation Interruption & Return
- User took a vacation week with **no structured training**, but did **daily hiking**.
- Week 6 was rebuilt as a **return-to-training week**: reduced to 3 sets, lighter upper body weights (8 lb), shorter finishers (90 sec), extra hamstring/hip mobility given hiking-specific tightness.
- Week 7 rebuilt back toward week 5 intensity (~95% of peak).

### Week 8
User reported inability to complete Wednesday's session at 12 lb (overhead press, bicep curl). **Fix:** kept these at 8 lb but added **tempo training** (4-count tempo) and switched to **alternating bicep curls** — increasing difficulty via technique, not load. Step touch replaced with low-impact skaters (user feedback: too easy).

### Week 9
User could not consistently complete 4 sets. **Program permanently capped at 3 sets.** March in place replaced with high knees (user feedback: too easy) across all warm-ups.

### Week 10
User reported hamstring tightness after Sunday makeup session (RDL-heavy) + Monday (lunges/hip thrust) back-to-back. **Fix:** held hamstring-loading exercise reps steady (no increase), added standing hamstring stretch to Monday, Tuesday, Thursday, and Friday cooldowns/sessions.

### Week 11
Retro feedback: Monday couldn't complete 3rd round of reverse lunge/lateral lunge superset; Wednesday plank shoulder-taps too hard as last exercise, only did 1 round.
**Fixes:**
- Monday Superset B (lunges) officially reduced to **2 rounds** (matching actual completion)
- Wednesday plank reverted from shoulder-taps to **regular plank hold**, reduced to 3×35 sec, made standalone (not supersetted)
- Bent-over row, dead bug, and plank all separated into standalone straight sets rather than triple-supersetted

### Week 12
User requested: (1) integrate underarm/tricep work, (2) keep sessions under 25 min including stretching, (3) accommodate incomplete push-ups/plank from Wednesday.
**Fixes:**
- Added **overhead tricep extension** and **tricep kickback** (Wednesday), **close-grip push-up** (Friday)
- To fit under 25 min: bent-over row and dead bug reduced to 2 sets on Wednesday, Friday finisher shortened to 90 sec
- Push-up/plank reframed: knee push-ups explicitly validated as not a fallback; plank reduced to 2×25 sec (from 3×35 sec)

### Week 13 (Major Reset)
Retro feedback: Monday and Wednesday both running ~30 min (over budget). Monday Superset A barely completable at 3 rounds; calf raise only 1 round done. Wednesday: bent-over row skipped entirely due to time; dead bug and plank only 1 round each.
**Fixes (Reset phase):**
- Monday: Superset A cut to 2 rounds, lateral lunge removed, calf raise cut to 1 round, Superset B eliminated (reverse lunge made standalone)
- Wednesday: Bent-over row removed entirely; all other exercises cut to 2 rounds; dead bug/plank cut to 1 round
- Friday: Arnold press removed; all exercises cut to 2 rounds

**Fixes (Restoration phase, same week — user found reset too easy):**
- User requested: raise difficulty back toward ~100 cal, keep lower reps but restore **3 rounds** on Monday
- Applied same "3 rounds, lower reps" logic to Wednesday and Friday for consistency
- User then flagged Monday still felt too easy with only one superset → **Superset B reinstated** (reverse lunge + lateral lunge back to 3×12), calf raise remains standalone at 2 rounds
- Bent-over row and Arnold press remain removed for now (time budget), to be reintroduced once the current version feels sustainable

## Open Threads / Next Steps for Week 14+

- User strained a muscle during **lateral lunge** (Wednesday session inquiry) — reported as intermittent pain only under load, not constant, no swelling mentioned. **Advised:** avoid direct adductor/inner-thigh loading (lateral lunge, wide-stance sumo squat) until resolved; monitor for sharp pain, swelling, or instability as red flags requiring medical attention.
- Bent-over row (removed in week 13 reset) and Arnold press (removed in week 13 reset) are candidates for reintroduction once current volume feels sustainable and the leg strain has resolved.
- Consider whether lateral lunge should be modified, reduced in load, or resequenced (e.g., not paired with reverse lunge) given the strain — worth flagging to the user before simply resuming.
