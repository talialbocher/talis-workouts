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

24 interactive React (.jsx) artifacts were created: `week_one_workout.jsx` through `week_twenty_four_workout.jsx`.

⚠️ **Prescribed ≠ performed.** Weeks 19, 20, 21 and 22 were all generated and pushed but **never trained** (see weeks 21 and 23). Week 23's status is unconfirmed as of week 24. Treat this file as a record of what was written, not what was done.

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
7. **Hamstring care:** Recurring sensitivity — avoid stacking too much hip-hinge volume (RDL + lunges + hip thrust) in back-to-back sessions without adequate stretching in cooldowns. The standing hamstring stretch belongs in the **Monday, Tuesday, Thursday, and Friday** cooldowns/sessions — Friday (RDL day) especially. Hold **30 sec each leg** in cooldowns; in the Thursday mobility session do **2 × 45 sec each leg**. ⚠️ Weeks 13–14 drifted: the Thursday stretch was dropped in the reset and Friday's cooldown lost it too — restore both in week 15.
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
| Mon | High knees (finisher) | Finisher | 60 sec |
| Tue | Brisk walk / cycling (or dance / swim) | — | 20 min |
| Wed | Knee push-up (→ full) | Superset A | 3 × 11 |
| Wed | Overhead press – 8 lb (tempo) | Superset A | 3 × 15 |
| Wed | Alternating bicep curl – 8 lb | Superset B | 3 × 15 / arm |
| Wed | Overhead tricep extension – 8 lb | Superset B | 3 × 12 |
| Wed | Band pull-apart | Standalone | 2 × 15 |
| Wed | Dead bug | Standalone | 2 × 16 / side |
| Wed | Plank hold | Standalone | 2 × 28 sec |
| Thu | Standing hamstring stretch | Mobility | 2 × 45 sec / leg |
| Thu | Cat-cow | Mobility | 2 × 10 slow reps |
| Thu | Pigeon pose | Mobility | 2 × 60 sec / side |
| Thu | 90/90 hip stretch | Mobility | 2 × 45 sec / side |
| Thu | Overhead tricep stretch | Mobility | 1 × 30 sec / arm |
| Thu | Supine spinal twist | Mobility | 2 × 45 sec / side |
| Thu | Legs-up-the-wall | Mobility | 1 × 4 min |
| Fri | Romanian deadlift – 12 lb | Superset A | 3 × 14 |
| Fri | Close-grip push-up (or knee) | Superset A | 3 × 10 |
| Fri | Goblet squat – 12 lb (narrow) — *replaces sumo squat* | Superset B | 3 × 16 |
| Fri | Pallof press (resistance band) | Superset B | 3 × 14 / side |
| Fri | High knees (finisher) | Finisher | 60 sec |

Delivered as `week_fourteen_workout.jsx`, matching the real weeks' structure (SvgWrap/Gnd/Hd/Ln figures, ILLUS/VIDEO/WARMUP_VIDEO maps, day tabs, superset pills, checkboxes, per-exercise `sets` count).

**Week 14 revision (July 2026)** — applied review findings 1–3 to the file:
- **Band pull-apart 2 × 15** added to Wednesday (standalone, ~90 sec) so the week has at least one pulling movement while bent-over/renegade row are out.
- **Standing hamstring stretch reinstated**: Thursday mobility (2 × 45 sec/leg, as in weeks 10–12) and Friday cooldown (30 sec/leg — RDL day).
- **Finishers restored at half length (60 sec)** on Monday and Friday, using **high knees instead of skaters** while the adductor strain heals (skaters are a lateral push). Skaters return when the strain resolves. This makes the ~95–105 cal label honest again.

> Confirm with the user: (1) is the strain healed enough to keep lateral lunge / sumo squat, or hold the substitutions; (2) the split squat and narrow goblet squat substitutions.

### Week 15 (Return to full volume)

User confirmed the adductor strain was **fully healed** and asked to bring back both removed exercises. Built from the revised week-14 file.

**Changes vs. week 14:**
- **Lateral lunge returns** (3 × 12/side, replacing the split squat) — at week 13's rep count, not week 10's 14, to ease back into lateral load.
- **Sumo squat returns** (3 × 16, replacing the narrow-stance goblet squat) on Friday.
- **Bent-over row returns** (2 × 15, Wednesday, supersetted with dead bug) — reintroduced at 2 rounds, not 3. The band pull-apart moves up into the Wednesday warm-up now that a real horizontal pull is back.
- **Arnold press returns** (2 × 12, Friday, supersetted with sumo squat). **Paid for by dropping Pallof press to 2 rounds** — the time budget did not otherwise absorb both returning exercises.
- **Skater finishers replace high knees** on Monday and Friday (60 sec) now the lateral push is safe again.
- **Review finding #4 applied — lower-body progression via technique, not rep-creep:** goblet squat holds at 3 × 15 but gains a **3-sec bottom pause**; hip thrust top squeeze goes 2 sec → 3 sec. Wednesday's press and curl **hold at 15 reps** to make room for the row.
- Small progressions: knee push-up 11 → 12, plank 28 → 30 sec.

> ⚠️ **Time-budget risk:** week 15 is the fullest Wednesday and Friday since week 12. Both were explicitly trimmed elsewhere to compensate, but this is the exact pattern that caused the week 13 blowout. The Sunday note asks the user to report whether Wed/Fri stayed under 25 min. **If over budget, cut rounds — do not drop the pull again.**

### Week 16 (Holding pattern + technique progression)

No retro feedback had come in yet on whether week 15's fuller Wednesday and Friday (row and Arnold press both back) stayed under the 25-minute budget, or on how the returning lateral lunge/sumo squat felt the day after. Rather than guess, week 16 holds those volumes steady and applies the one open item that didn't depend on that feedback.

**Changes vs. week 15:**
- **Goblet squat progresses to 1.5-rep style** (finding #4, next step after the 3-sec pause): 3 × 12 reps, each rep = full depth → halfway up → back down → full stand. Reps drop from 15 to 12 since each rep takes ~1.5x as long, so time under tension still increases without adding session length. Hip thrust holds at its week-15 3-sec squeeze — only one lower-body lift progresses at a time.
- **Everything else holds at week 15's volume**: lateral lunge (3×12/side), sumo squat (3×16), bent-over row (2×15), Arnold press (2×12), Pallof press (2×14/side). Sunday's note asks for the three data points needed to unlock the next moves — row/Pallof to 3 rounds if Wed/Fri fit under budget, lateral lunge/sumo squat progression if the inner thigh held up, and how the new goblet squat progression felt.

### Week 17 (Third week holding pattern)

No retro feedback arrived on any of the three questions week 16 asked — Wednesday/Friday time budget with the row and Arnold press back, whether lateral lunge/sumo squat felt fine through their second week back, or how the new 1.5-rep goblet squat landed. Rather than guess at any of them, week 17 holds every gated number at week 15/16's level for a third straight week; only the narrative notes were updated to reflect the elapsed time (e.g. "third week," "two clean weeks with nothing reported wrong").

**Changes vs. week 16:** none numerically. `week_16_workout.jsx` and `week_17_workout.jsx` are byte-identical except for note text.

**New rule for week 18:** if the same three questions still go unanswered, treat two consecutive clean weeks with no negative report as sufficient signal to make one small, low-risk move rather than holding a fourth week — most likely bent-over row to 3 rounds (pulling work is the highest program-review priority, and a rep bump on an already-tolerated exercise is lower-risk than bumping a previously-injured lift). Lateral lunge/sumo squat and hip thrust remain "wait for an explicit felt-fine report" items given the injury history.

### Week 18 (Fallback rule applied — bent-over row to 3 rounds)

No feedback arrived on any of the three open questions for a fourth straight week (Wed/Fri time budget, lateral lunge/sumo squat feel, 1.5-rep goblet squat). Per the week-17 fallback rule, week 18 makes the one designated low-risk move rather than holding a fourth time.

**Changes vs. week 17:**
- **Bent-over row moves to 3 rounds** (3 × 15, up from 2 × 15) — the only numeric change in the file. Chosen per the fallback rule: pulling work is the highest program-review priority, and a rep bump on an already-tolerated exercise is lower-risk than bumping a previously-injured lift.
- **Everything else holds at week 15/16/17's level**: goblet squat (3×12, 1.5-rep style), hip thrust (3×15, 3-sec squeeze), lateral lunge (3×12/side), sumo squat (3×16), knee push-up/press/curl (week 15 volumes), Arnold press (2×12), Pallof press (2×14/side). These remain "wait for an explicit felt-fine report" items given the injury history — the fallback rule only authorized moving the row.
- Narrative notes updated throughout (third week → fourth week where applicable) to reflect the elapsed time; Wednesday and Sunday notes explain the fallback move.

`week_eighteen_workout.jsx` reviewed against `week_seventeen_workout.jsx`: confirmed the row's `sets` field is the only exercise-level value that changed, all other exercises byte-identical, standing preferences (3-set cap, 8/12 lb only, hamstring stretch placement) intact.

### Week 19 (Second clean week on the row's bump — everything else holds)

No feedback arrived on any of the open questions for a fifth straight week (lateral lunge/sumo squat feel, 1.5-rep goblet squat) or on the Wednesday time budget since the row moved to 3 rounds in week 18. Week 19 makes no numeric change — it's the second consecutive clean week (no budget complaint) on the row's own bump, mirroring the same two-clean-weeks bar that authorized that bump in the first place.

**Changes vs. week 18:** none numerically. `week_18_workout.jsx` and `week_19_workout.jsx` are identical except note text, which now reflects: goblet squat / hip thrust / lateral lunge / sumo squat all one week further into their holding pattern (fourth/fifth week depending on when each returned), and the bent-over row's 3-round bump completing its second clean week with Pallof press queued to follow it to 3 rounds next week if the budget check stays clean.

**New rule for week 20:** if week 19 also passes without a Wednesday budget complaint, move Pallof press to 3 rounds (2 → 3) — that's the second half of the original row/Pallof reintroduction and completes the same two-clean-week bar already used for the row. Lateral lunge/sumo squat and goblet squat/hip thrust remain "wait for an explicit felt-fine or landed-well report" items given the injury history — no fallback rule authorizes a move there yet, however many weeks pass.

`week_nineteen_workout.jsx` reviewed against `week_eighteen_workout.jsx`: confirmed every exercise's `sets` field is byte-identical, only note text changed, standing preferences (3-set cap, 8/12 lb only, hamstring stretch placement) intact.

### Week 20 (Pallof press to 3 rounds — row/Pallof reintroduction complete)

No feedback arrived on any of the open questions for a sixth straight week (lateral lunge/sumo squat feel, 1.5-rep goblet squat) or on the Wednesday time budget. Per the week-19 rule, the row's 3-round bump has now passed two clean weeks (18, 19) with no budget complaint, so week 20 makes the one authorized move: Pallof press follows the row to 3 rounds.

**Changes vs. week 19:**
- **Pallof press moves to 3 rounds** (3 × 14/side, up from 2 × 14/side) — the only numeric change in the file. This completes the row/Pallof reintroduction under the same two-clean-week bar already used for the row in week 18.
- **Everything else holds at week 15/16/17/18/19's level**: goblet squat (3×12, 1.5-rep style, fifth week), hip thrust (3×15, 3-sec squeeze, sixth week), lateral lunge (3×12/side, sixth week back), sumo squat (3×16, sixth week back), bent-over row (3×15, third clean week), knee push-up/press/curl (week 15 volumes), Arnold press (2×12). These remain "wait for an explicit felt-fine or landed-well report" items given the injury history — no fallback rule authorizes a move there yet.
- Narrative notes updated throughout (fifth week → sixth week where applicable) to reflect the elapsed time; Wednesday and Friday notes explain the Pallof move, and now warn that a future budget overage should roll back Pallof first, not the row.

`week_twenty_workout.jsx` reviewed against `week_nineteen_workout.jsx`: confirmed the Pallof press `sets` field is the only exercise-level value that changed, all other exercises byte-identical, standing preferences (3-set cap, 8/12 lb only, hamstring stretch placement) intact.

### Week 21 (Return week after two weeks travelling — Brazil)

User reported no structured training for **two weeks** while travelling in Brazil. Activity during the trip: **heavy walking daily, some swimming**. No pain or injury reported. This is the second travel interruption in the program (week 6 was the first, after a hiking vacation), and week 21 follows the same shape: cut volume, re-groove patterns, rebuild over the following one to two weeks.

**Critical bookkeeping — weeks 19 and 20 were never trained.** Both files were generated on schedule and both described their predecessors' bumps as having passed "clean weeks." Those weeks were *unworked*, not clean, so the signal they were supposed to provide does not exist:
- **Bent-over row** at 3 rounds has exactly **one** real week of training (week 18), not three.
- **Pallof press** at 3 rounds (introduced week 20) was **never trained at all**.
Both were rolled back to 2 rounds in week 21 to re-earn the bump on real data. This is the risk the `derive-state-from-the-ledger` habit does not cover: the repo records what was *prescribed*, not what was *performed*.

**What the trip did and did not maintain** — this drove every per-exercise decision:

| Preserved by walking / swimming | Not trained at all on the trip |
|---|---|
| Aerobic base (Tuesday cardio uncut) | Loaded pressing (push-up, overhead press, close-grip) |
| Calves, quads, general leg endurance | Lateral / frontal-plane load (lateral lunge, sumo squat, skaters) |
| Glutes (partially — walking) | Anti-rotation and anti-extension core (Pallof, plank, dead bug) |
| Pulling, partially (swimming) | Eccentric hamstring work (RDL) — walking is not hiking descents |

**Changes vs. week 20:**
- **Volume cut roughly 20–25% across all three strength days**, weights held at 8/12 lb throughout. Two weeks off costs coordination and work capacity, not much strength, and the 12 lb ceiling means dropping load is not a useful lever anyway (contrast week 6, which dropped goblet squat to 8 lb when 12 lb was still new).
- **Rounds cut to 2** on the four movements the trip did nothing for and that carry injury or novelty risk: **lateral lunge** (2 × 10/side), **sumo squat** (2 × 12) — both adductor work, same tissue as the old strain; **bent-over row** (2 × 12) and **Pallof press** (2 × 12/side) — both rolled back per the bookkeeping note above. **Overhead tricep extension** also dropped to 2 × 10 for the Wednesday time budget.
- **1.5-rep goblet squat parked for one week** — plain 3 × 12 @ 12 lb. High time-under-tension technique work is the wrong first session back; the 1.5-rep style returns in week 22, which also gives the still-unanswered "how did it feel" question a fresh chance.
- **Finishers shortened 60 → 45 sec** on Monday and Friday, mirroring week 6's precedent.
- **Thursday rebuilt around the trip, not the training week:** added **calf + soleus wall stretch** (2 × 45 sec/leg) and **kneeling hip flexor stretch** (2 × 45 sec/side) — walking loads the calves and shortens the hip flexors, and long flights compound both. Paid for by **90/90 hip stretch sitting out one week**, pigeon trimmed 60 → 45 sec/side, and supine spinal twist trimmed to 1 round. Legs-up-the-wall raised 4 → 5 min. Standing hamstring stretch untouched (preference #7). Still ~20 min. Two new SVG illustrations and video links were authored for the new stretches.
- **Tuesday cardio is the only session not cut** — 20 min at normal effort. It is the one quality the trip actively maintained; swimming flagged as the preferred option since the user has been doing it and it is the only choice there that also loads the shoulders and lats.
- **Calorie and time labels corrected to `~75-85 cal` and `~18-22 min total`** (from `~95-105 cal` / `~22-25 min`), per program review finding #3 — do not leave a reduced session wearing the old labels.

**Week 21 rep scheme (vs. week 20):**

| Day | Exercise | Week 20 | Week 21 |
|---|---|---|---|
| Mon | Goblet squat – 12 lb | 3 × 12 (1.5-rep) | 3 × 12 (straight) |
| Mon | Hip thrust – 12 lb | 3 × 15 | 3 × 12 |
| Mon | Reverse lunge – 8 lb | 3 × 12/leg | 3 × 10/leg |
| Mon | Lateral lunge – 8 lb | 3 × 12/side | **2** × 10/side |
| Mon | Calf raise (single leg) | 2 × 15/side | 2 × 12/side |
| Mon | Low-impact skaters | 60 sec | 45 sec |
| Wed | Knee push-up | 3 × 12 | 3 × 9 |
| Wed | Overhead press – 8 lb (tempo) | 3 × 15 | 3 × 11 |
| Wed | Alternating bicep curl – 8 lb | 3 × 15/arm | 3 × 11/arm |
| Wed | Overhead tricep extension – 8 lb | 3 × 12 | **2** × 10 |
| Wed | Bent-over row – 12 lb | 3 × 15 | **2** × 12 |
| Wed | Dead bug | 2 × 16/side | 2 × 12/side |
| Wed | Plank hold | 2 × 30 sec | 2 × 20 sec |
| Fri | Romanian deadlift – 12 lb | 3 × 14 | 3 × 10 |
| Fri | Close-grip push-up | 3 × 10 | 3 × 7 |
| Fri | Sumo squat – 12 lb | 3 × 16 | **2** × 12 |
| Fri | Arnold press – 8 lb | 2 × 12 | 2 × 9 |
| Fri | Pallof press (band) | 3 × 14/side | **2** × 12/side |
| Fri | Low-impact skaters | 60 sec | 45 sec |

**Ramp plan for weeks 22–23:** week 22 moves back toward week 20's numbers — restore lateral lunge, bent-over row and Pallof press to 3 rounds, bring back the 1.5-rep goblet squat, finishers to 60 sec, 90/90 hip stretch back in — provided week 21 passed without complaint. Week 23 lands the reps fully. Do **not** compress this into a single week; week 7 needed a full week at ~95% before returning to peak.

### Week 22 (Ramp — restore what week 21 pre-authorized)

No feedback had arrived on how week 21 (the return week) actually felt by the time week 22 was due. Rather than guess, week 22 executes exactly the ramp plan week 21 wrote for itself — the plan named specific items to restore rather than leaving the whole week open, so it went ahead on schedule.

**Changes vs. week 21:**
- **Lateral lunge, bent-over row, and Pallof press all return to 3 rounds** — the three items the week-21 plan named explicitly for this week's restore. Lateral lunge because it's the movement behind the old strain and the plan called it out by name; row and Pallof because they complete the same reintroduction that started (and was undone by the untrained weeks 19–20) earlier in the program.
- **1.5-rep goblet squat returns**, reps unchanged at 12 — this is a technique restore, not a load or rep change. How it actually feels is still unanswered, now nine weeks running.
- **Every other strength number steps roughly halfway back toward week 20's level**: hip thrust 12→14 reps, reverse lunge 10→11, calf raise 12→14/side, knee push-up 9→11, overhead press 11→14, bicep curl 11→14, dead bug 12→14/side, plank 20→25 sec, RDL 10→12, close-grip push-up 7→9, Arnold press 9→11. Week 23 is set to land all of these fully if week 22 goes cleanly.
- **Sumo squat and overhead tricep extension deliberately hold at 2 rounds for one more week.** Sumo squat carries the same adductor-strain reasoning as lateral lunge but wasn't named in the week-21 plan, so it waits for week 23 rather than assuming the same green light. Overhead tricep extension holds to keep Wednesday's time budget in check now that the row's third round is back — it's the one to trim further if Wednesday runs long, not the row.
- **Finishers back to 60 sec** (Monday, Friday), matching week 20.
- **Thursday mobility reverts to the standard seven-stretch routine.** The two stretches added for the trip (calf + soleus wall stretch, kneeling hip flexor stretch) step back out now that travel is two weeks behind; 90/90 hip stretch returns, pigeon pose and supine spinal twist return to their full week-20 durations (60 sec/side and 2 rounds respectively), and legs-up-the-wall returns to 4 min from the travel week's 5.
- **Calorie/time labels updated to `~85-95 cal` / `~20-23 min total`** — halfway between week 21's deload labels and week 20's peak labels, matching the halfway rep ramp.

`week_22_workout.jsx` built directly from `week_21_workout.jsx`'s own pre-written ramp plan; reviewed against `week_20_workout.jsx` and `week_21_workout.jsx` to confirm every restored number matches one of those two files' values and no exercise was added or dropped beyond the two Thursday stretches named above.

### Week 23 (Return week after three weeks with no training)

User reported **no workouts for three weeks** (reported 2026-09-06). This supersedes the week-22 ramp plan entirely.

**Bookkeeping — weeks 21 and 22 were also never trained.** Week 21 was written as the return week from the Brazil trip and week 22 as its ramp, but neither was performed. Combined with the already-recorded weeks 19–20, **the last actually-trained week was week 18**. Consequences carried into week 23:
- **Bent-over row** at 3 rounds still has exactly **one** real week of training (week 18). Prescribed at 3 rounds again in week 22; never trained. Back to 2 rounds.
- **Pallof press** at 3 rounds has now been prescribed twice (weeks 20 and 22) and trained **zero** times. Back to 2 rounds.
- **Lateral lunge** at 3 rounds was restored in week 22 and never trained. Back to 2 rounds.
- **Week 22's halfway ramp numbers are not a baseline** — nothing was performed at them. Week 23 does not build on them.

**Why not week 21's numbers exactly.** Week 21 was the closest precedent (a return week), but its situation was more favourable in two ways: the break was two weeks, not three, and it contained daily heavy walking plus swimming. This break had no reported activity at all. So week 23 sits one step below week 21 throughout, and makes one structural change week 21 did not:
- **Tuesday cardio is eased in** (20 min at conversational effort). Week 21 deliberately left cardio uncut because walking and swimming had preserved the aerobic base. That reasoning does not transfer to a break with no activity — this is the one place week 23 departs from the week 21 template rather than just scaling it.
- **Calf raise cut further** (2 × 10/side vs week 21's 2 × 12) for the same reason: week 21's calves had two weeks of walking behind them; these did not.
- **Thursday rebuilt for sitting, not travelling.** The kneeling hip flexor stretch **stays in** — three weeks of desk work without training shortens hip flexors as effectively as long flights did. The **calf + soleus wall stretch steps out** (no walking load this time) and **90/90 hip stretch takes its slot back**. Eight items, still ~20 min, standing hamstring stretch untouched (preference #7).
- **1.5-rep goblet squat parked again** — technique work under load is the wrong ask for a first session back. Now unanswered for ten weeks running.
- **Finishers 45 sec**, calorie/time labels `~70-80 cal` / `~18-22 min` (below week 21's `~75-85`), per finding #3.

**Week 23 rep scheme (vs. week 21, the previous return week):**

| Day | Exercise | Week 21 | Week 23 |
|---|---|---|---|
| Mon | Goblet squat – 12 lb | 3 × 12 | 3 × 10 |
| Mon | Hip thrust – 12 lb | 3 × 12 | 3 × 10 |
| Mon | Reverse lunge – 8 lb | 3 × 10/leg | 3 × 8/leg |
| Mon | Lateral lunge – 8 lb | 2 × 10/side | 2 × 8/side |
| Mon | Calf raise (single leg) | 2 × 12/side | 2 × 10/side |
| Tue | Cardio | 20 min, normal effort | 20 min, **conversational effort** |
| Wed | Knee push-up | 3 × 9 | 3 × 8 |
| Wed | Overhead press – 8 lb (tempo) | 3 × 11 | 3 × 10 |
| Wed | Alternating bicep curl – 8 lb | 3 × 11/arm | 3 × 10/arm |
| Wed | Overhead tricep extension – 8 lb | 2 × 10 | 2 × 9 |
| Wed | Bent-over row – 12 lb | 2 × 12 | 2 × 10 |
| Wed | Dead bug | 2 × 12/side | 2 × 10/side |
| Wed | Plank hold | 2 × 20 sec | 2 × 18 sec |
| Fri | Romanian deadlift – 12 lb | 3 × 10 | 3 × 9 |
| Fri | Close-grip push-up | 3 × 7 | 3 × 6 |
| Fri | Sumo squat – 12 lb | 2 × 12 | 2 × 10 |
| Fri | Arnold press – 8 lb | 2 × 9 | 2 × 8 |
| Fri | Pallof press (band) | 2 × 12/side | 2 × 10/side |

**Ramp plan for weeks 24–25:** do **not** repeat the weeks 21→22 mistake of ramping on an unconfirmed week. Week 24 should only step up **if week 23 was actually trained** — confirm that first. If confirmed clean, week 24 moves back toward week 21's numbers (not week 20's), restores 60-sec finishers, and brings the 1.5-rep goblet squat back. Lateral lunge, sumo squat, row and Pallof stay at 2 rounds until a trained week is confirmed. Week 25 lands week 20's numbers at the earliest.

### Week 24 (Hold — week 23 unconfirmed)

No word arrived on whether week 23 (the three-week return week) was actually trained by the time week 24 was due. Per the standing rule written into week 23's own plan — "do not repeat the weeks 21→22 mistake of ramping on an unconfirmed week" — week 24 holds rather than climbs.

**Changes vs. week 23:** none. `week_23_workout.jsx` and `week_24_workout.jsx` are byte-identical on every `sets` field; only the title and narrative note text changed, to explain the hold and re-ask the still-open questions (lateral lunge/sumo squat feel, 1.5-rep goblet squat feel — both now eleven weeks unanswered) rather than to claim progress that hasn't been confirmed.

**Rule for week 25:** if week 23 and/or week 24 are confirmed as actually trained (not just generated), week 25 steps toward week 21's return-week numbers — not week 20's, and not a full restoration. If still unconfirmed, week 25 repeats week 24's numbers again rather than guessing. Do not let more than one hold week pass without an explicit check-in question to the user about whether sessions are happening.

`week_24_workout.jsx` reviewed against `week_23_workout.jsx`: confirmed every exercise's `sets` field is byte-identical; only the `<h1>` title and the day/exercise note strings listed above changed. No exercise added or removed.

## Open Threads / Next Steps for Week 25+

- **Highest priority — do not treat generated weeks as trained weeks.** Weeks 19, 20, 21 and 22 were all written, pushed, and never performed, and weeks 20 and 22 wrote notes claiming clean weeks that never happened. **The last confirmed trained week is still week 18.** Week 23's status remains unconfirmed as of week 24, which is why week 24 repeated week 23's numbers instead of ramping. Before applying any "two clean weeks" style fallback rule, or ramping off a previous week, confirm the weeks in question were actually trained. The repo is a record of prescriptions, not of sessions. This has now caused two bad ramps in a row — it is the single most expensive recurring failure in this program.
- **Ask before ramping, every time.** The routine has no way to know whether a week was performed. A one-line check ("did you get last week's sessions in?") is worth more than any inference from the file history. If there's no answer, hold rather than climb — the cost of an extra easy week is far lower than ramping onto three or four weeks of detraining.
- **Week 25 must not assume weeks 23–24 happened.** If confirmed trained, week 25 steps toward week 21's return-week numbers (not week 20's) and restores 60-sec finishers and the 1.5-rep goblet squat. If still unconfirmed, repeat week 24's numbers again rather than guessing — do not let a second consecutive hold week pass without asking explicitly.
- **Open (asked eleven weeks running):** did lateral lunge / sumo squat feel fine? Still no confirmation, and both have now been cold-started twice. Weeks 23 and 24 keep both at 2 rounds — the morning-after report is the gate for going back to 3.
- **Open:** how does the 1.5-rep goblet squat feel? Parked again in weeks 23 and 24 (wrong thing to reintroduce before a trained week is confirmed). Last actually trained during weeks 15–18; unanswered for eleven weeks.
- **Watching:** the kneeling hip flexor stretch stayed in for weeks 23–24 on desk-sitting grounds rather than travel grounds; the calf + soleus wall stretch stepped back out and 90/90 returned. Revisit if the layoff pattern changes again.
- Standing red-flag guidance still applies: sharp pain, swelling, or instability warrant medical attention.

## Program Review Findings (July 2026) — Apply When Building Week 15+

A review of weeks 1–14 found the overall structure and feedback-driven adjustments sound, but the week 13 reset overshot in three ways that week 14 inherited. **Items 1–3 were applied to the revised week 14 file (July 2026)** — keep them in place for week 15+; items 4–5 remain open:

1. **Restore pulling work (highest priority).** Since the week 13 reset removed bent-over row (and renegade row disappeared with it), weeks 13–14 contain **zero pulling exercises** — both upper-body days are all push (push-up, overhead press, triceps) plus biceps. For a desk worker this risks postural/shoulder imbalance if it continues. Until the full bent-over row fits the time budget again, include at minimum a cheap pull — e.g. **band pull-aparts 2 × 12–15** (already in the warm-up repertoire, ~90 sec) or a 2-set row on Wednesday.
2. **Reinstate hamstring stretches on Thursday and Friday** (see standing preference #7). The Thursday standing hamstring stretch (present weeks 10–12 as **2 × 45 sec each leg**) and the Friday cooldown hamstring stretch (**30 sec each leg**) were both lost in the week 13 reset. Friday is RDL day — it needs one most.
3. **Resolve the finisher/calorie mismatch.** The Monday and Friday cardio finishers (2 min, later 90 sec of skaters) were silently removed in the week 13 reset, but the files still display "~95–105 cal" and the restoration explicitly targeted ~100 cal. Either restore a short (60–90 sec) finisher, or keep them removed for time and correct the calorie label — don't leave the two inconsistent.
4. **Plan lower-body progression via technique, not rep-creep.** Goblet squat and hip thrust have been static at 3 × 15 @ 12 lb since week 9. With the 12 lb ceiling, adding reps is the only lever being used, and longer sets are what caused the week 13 time blowout. Apply the same fix that worked for upper body (preference #8): **paused or 1.5-rep goblet squats, tempo work, or single-leg hip thrust progressions** — once the leg strain is resolved.
5. **Keep this file in sync with the artifacts.** Update the deliverables count and the evolution log whenever a new week file is added, and document intentional removals (like the finishers) so they aren't mistaken for accidental losses.
