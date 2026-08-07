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

17 interactive React (.jsx) artifacts were created: `week_one_workout.jsx` through `week_seventeen_workout.jsx`.

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

## Open Threads / Next Steps for Week 18+

- ~~User strained a muscle during **lateral lunge**~~ — **resolved as of week 15**; user confirmed fully healed. Lateral lunge and sumo squat both restored. Standing red-flag guidance still applies if it recurs: sharp pain, swelling, or instability warrant medical attention.
- ~~Bent-over row and Arnold press are candidates for reintroduction~~ — **both reintroduced in week 15** at 2 rounds each; **held steady in weeks 16–17** pending feedback.
- **Open for week 18 (asked three weeks running):** did Wednesday and Friday stay under 25 min with the row and Arnold press back? If yes, take the row to 3 rounds and restore Pallof press to 3. If no feedback arrives at all, apply the week-17 fallback rule above and move the row to 3 rounds anyway.
- **Open for week 18 (asked three weeks running):** did lateral lunge / sumo squat feel fine through three weeks back? If yes, a small rep bump is reasonable. Absent explicit confirmation, hold — this is the previously-injured lift and gets a higher bar than the row.
- **Open for week 18:** how did the 1.5-rep goblet squat feel after two weeks — if it landed well, hip thrust is the next candidate for a technique-based progression (longer squeeze or single-leg variation) rather than more reps.

## Program Review Findings (July 2026) — Apply When Building Week 15+

A review of weeks 1–14 found the overall structure and feedback-driven adjustments sound, but the week 13 reset overshot in three ways that week 14 inherited. **Items 1–3 were applied to the revised week 14 file (July 2026)** — keep them in place for week 15+; items 4–5 remain open:

1. **Restore pulling work (highest priority).** Since the week 13 reset removed bent-over row (and renegade row disappeared with it), weeks 13–14 contain **zero pulling exercises** — both upper-body days are all push (push-up, overhead press, triceps) plus biceps. For a desk worker this risks postural/shoulder imbalance if it continues. Until the full bent-over row fits the time budget again, include at minimum a cheap pull — e.g. **band pull-aparts 2 × 12–15** (already in the warm-up repertoire, ~90 sec) or a 2-set row on Wednesday.
2. **Reinstate hamstring stretches on Thursday and Friday** (see standing preference #7). The Thursday standing hamstring stretch (present weeks 10–12 as **2 × 45 sec each leg**) and the Friday cooldown hamstring stretch (**30 sec each leg**) were both lost in the week 13 reset. Friday is RDL day — it needs one most.
3. **Resolve the finisher/calorie mismatch.** The Monday and Friday cardio finishers (2 min, later 90 sec of skaters) were silently removed in the week 13 reset, but the files still display "~95–105 cal" and the restoration explicitly targeted ~100 cal. Either restore a short (60–90 sec) finisher, or keep them removed for time and correct the calorie label — don't leave the two inconsistent.
4. **Plan lower-body progression via technique, not rep-creep.** Goblet squat and hip thrust have been static at 3 × 15 @ 12 lb since week 9. With the 12 lb ceiling, adding reps is the only lever being used, and longer sets are what caused the week 13 time blowout. Apply the same fix that worked for upper body (preference #8): **paused or 1.5-rep goblet squats, tempo work, or single-leg hip thrust progressions** — once the leg strain is resolved.
5. **Keep this file in sync with the artifacts.** Update the deliverables count and the evolution log whenever a new week file is added, and document intentional removals (like the finishers) so they aren't mistaken for accidental losses.
