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

14 interactive React (.jsx) artifacts were created: `week_one_workout.jsx` through `week_fourteen_workout.jsx`.

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
7. **Hamstring care:** Recurring sensitivity — avoid stacking too much hip-hinge volume (RDL + lunges + hip thrust) in back-to-back sessions without adequate stretching in cooldowns. The standing hamstring stretch belongs in the **Monday, Tuesday, Thursday, and Friday** cooldowns/sessions — Friday (RDL day) especially. ⚠️ Weeks 13–14 drifted: the Thursday stretch was dropped in the reset and Friday's cooldown lost it too — restore both in week 15.
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

### Week 14 (Injury substitutions + small upper-body progression)

Built directly from the real week-13 file (all weeks 1–13 `.jsx` are now in the repo). Rep/time/hold counts are shown on every exercise (they always were, via the `sets` field — this week just carries that forward from the real week-13 baseline). Actioned the open leg-strain thread with two substitutions.

**Changes vs. week 13:**
- **Lateral lunge removed** (open adductor/inner-thigh strain) → **stationary split squat (8 lb), 3 × 10/leg** in Monday Superset B. Sagittal plane, no sideways load on the injured adductor.
- **Sumo squat removed** (wide stance loads the same inner-thigh muscles) → **narrow-stance goblet squat (12 lb), 3 × 16** in Friday Superset B. Flagged for user confirmation.
- Small upper-body nudges (as week 13's Sunday note anticipated): Wed knee push-up 10→11, overhead press 14→15, alt bicep curl 14→15, plank 25→28 sec. Lower body held at week-13 loads given the strain.
- Bent-over row and Arnold press **remain removed** (time budget); reintroduce once the strain resolves.
- Standing preferences held: max 3 sets, 8/12 lb only, ~22–25 min, high knees warm-ups, tempo (8 lb press/curl), hamstring care (RDL Fri kept apart from Mon lunges; hamstring stretch in cooldowns).

**Week 14 rep scheme:**

| Day | Exercise | Group | Sets × reps |
|---|---|---|---|
| Mon | Goblet squat – 12 lb | Superset A | 3 × 15 |
| Mon | Hip thrust – 12 lb | Superset A | 3 × 15 |
| Mon | Reverse lunge – 8 lb | Superset B | 3 × 12 / leg |
| Mon | Split squat – 8 lb — *replaces lateral lunge* | Superset B | 3 × 10 / leg |
| Mon | Calf raise (single leg) | Standalone | 2 × 15 / side |
| Tue | Brisk walk / cycling (or dance / swim) | — | 20 min |
| Wed | Knee push-up (→ full) | Superset A | 3 × 11 |
| Wed | Overhead press – 8 lb (tempo) | Superset A | 3 × 15 |
| Wed | Alternating bicep curl – 8 lb | Superset B | 3 × 15 / arm |
| Wed | Overhead tricep extension – 8 lb | Superset B | 3 × 12 |
| Wed | Dead bug | Standalone | 2 × 16 / side |
| Wed | Plank hold | Standalone | 2 × 28 sec |
| Thu | Cat-cow / Pigeon / 90-90 / tricep stretch / spinal twist / legs-up-wall | Mobility | holds (see file) |
| Fri | Romanian deadlift – 12 lb | Superset A | 3 × 14 |
| Fri | Close-grip push-up (or knee) | Superset A | 3 × 10 |
| Fri | Goblet squat – 12 lb (narrow) — *replaces sumo squat* | Superset B | 3 × 16 |
| Fri | Pallof press (resistance band) | Superset B | 3 × 14 / side |

Delivered as `week_fourteen_workout.jsx`, matching the real weeks' structure (SvgWrap/Gnd/Hd/Ln figures, ILLUS/VIDEO/WARMUP_VIDEO maps, day tabs, superset pills, checkboxes, per-exercise `sets` count).

> Confirm with the user: (1) is the strain healed enough to keep lateral lunge / sumo squat, or hold the substitutions; (2) the split squat and narrow goblet squat substitutions.

## Open Threads / Next Steps for Week 14+

- User strained a muscle during **lateral lunge** (Wednesday session inquiry) — reported as intermittent pain only under load, not constant, no swelling mentioned. **Advised:** avoid direct adductor/inner-thigh loading (lateral lunge, wide-stance sumo squat) until resolved; monitor for sharp pain, swelling, or instability as red flags requiring medical attention.
- Bent-over row (removed in week 13 reset) and Arnold press (removed in week 13 reset) are candidates for reintroduction once current volume feels sustainable and the leg strain has resolved.
- Consider whether lateral lunge should be modified, reduced in load, or resequenced (e.g., not paired with reverse lunge) given the strain — worth flagging to the user before simply resuming.

## Program Review Findings (July 2026) — Apply When Building Week 15+

A review of weeks 1–14 found the overall structure and feedback-driven adjustments sound, but the week 13 reset overshot in three ways that week 14 inherited. Address these when building the next week:

1. **Restore pulling work (highest priority).** Since the week 13 reset removed bent-over row (and renegade row disappeared with it), weeks 13–14 contain **zero pulling exercises** — both upper-body days are all push (push-up, overhead press, triceps) plus biceps. For a desk worker this risks postural/shoulder imbalance if it continues. Until the full bent-over row fits the time budget again, include at minimum a cheap pull — e.g. **band pull-aparts 2 × 12–15** (already in the warm-up repertoire, ~90 sec) or a 2-set row on Wednesday.
2. **Reinstate hamstring stretches on Thursday and Friday** (see standing preference #7). The Thursday standing hamstring stretch (present weeks 10–12) and the Friday cooldown hamstring stretch were both lost in the week 13 reset. Friday is RDL day — it needs one most.
3. **Resolve the finisher/calorie mismatch.** The Monday and Friday cardio finishers (2 min, later 90 sec of skaters) were silently removed in the week 13 reset, but the files still display "~95–105 cal" and the restoration explicitly targeted ~100 cal. Either restore a short (60–90 sec) finisher, or keep them removed for time and correct the calorie label — don't leave the two inconsistent.
4. **Plan lower-body progression via technique, not rep-creep.** Goblet squat and hip thrust have been static at 3 × 15 @ 12 lb since week 9. With the 12 lb ceiling, adding reps is the only lever being used, and longer sets are what caused the week 13 time blowout. Apply the same fix that worked for upper body (preference #8): **paused or 1.5-rep goblet squats, tempo work, or single-leg hip thrust progressions** — once the leg strain is resolved.
5. **Keep this file in sync with the artifacts.** Update the deliverables count and the evolution log whenever a new week file is added, and document intentional removals (like the finishers) so they aren't mistaken for accidental losses.
