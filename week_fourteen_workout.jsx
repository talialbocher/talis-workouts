import React, { useState } from "react";

/**
 * Week 14 Workout — Interactive Program
 *
 * NEW THIS WEEK:
 *  - Explicit rep (or time/hold) count shown for EVERY exercise.
 *  - Lateral lunge REMOVED (open adductor/inner-thigh strain) and replaced
 *    with a stationary split squat — sagittal plane, no direct inner-thigh
 *    loading. Wide-stance sumo squat also avoided for the same reason.
 *
 * Standing preferences respected:
 *  - Max 3 sets; only 8 lb / 12 lb dumbbells; ~20–25 min incl. warm-up + cooldown.
 *  - High knees (not march in place); low-impact skaters (not step touch).
 *  - Hamstring care: RDL (Fri) and lunges (Mon) kept on separate days; standing
 *    hamstring stretch in Mon/Tue/Thu/Fri cooldowns.
 *  - Tempo over load: overhead press & bicep curl stay at 8 lb with 4-count tempo /
 *    alternating arms rather than forcing 12 lb.
 *  - Bent-over row and Arnold press remain removed (time budget), pending
 *    reintroduction once volume feels sustainable.
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const yt = (q) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(
    q + " proper form tutorial"
  )}`;

const SUPERSET_COLORS = {
  A: { bg: "#e0f2fe", text: "#0369a1", border: "#7dd3fc" },
  B: { bg: "#fef3c7", text: "#b45309", border: "#fcd34d" },
  Core: { bg: "#ede9fe", text: "#6d28d9", border: "#c4b5fd" },
  Finisher: { bg: "#fee2e2", text: "#b91c1c", border: "#fca5a5" },
  Solo: { bg: "#f1f5f9", text: "#475569", border: "#cbd5e1" },
};

// Simple, reusable stick-figure poses (kept intentionally minimal & legible).
function StickFigure({ pose = "stand", done }) {
  const stroke = done ? "#cbd5e1" : "#0f172a";
  const common = {
    stroke,
    strokeWidth: 4,
    strokeLinecap: "round",
    fill: "none",
  };
  const head = { fill: done ? "#cbd5e1" : "#0f172a" };

  const poses = {
    stand: (
      <>
        <circle cx="50" cy="18" r="9" {...head} />
        <line x1="50" y1="27" x2="50" y2="60" {...common} />
        <line x1="50" y1="35" x2="34" y2="50" {...common} />
        <line x1="50" y1="35" x2="66" y2="50" {...common} />
        <line x1="50" y1="60" x2="40" y2="88" {...common} />
        <line x1="50" y1="60" x2="60" y2="88" {...common} />
      </>
    ),
    squat: (
      <>
        <circle cx="50" cy="20" r="9" {...head} />
        <line x1="50" y1="29" x2="50" y2="52" {...common} />
        <line x1="50" y1="36" x2="34" y2="30" {...common} />
        <line x1="50" y1="36" x2="66" y2="30" {...common} />
        <line x1="50" y1="52" x2="36" y2="66" {...common} />
        <line x1="36" y1="66" x2="40" y2="88" {...common} />
        <line x1="50" y1="52" x2="64" y2="66" {...common} />
        <line x1="64" y1="66" x2="60" y2="88" {...common} />
      </>
    ),
    lunge: (
      <>
        <circle cx="50" cy="18" r="9" {...head} />
        <line x1="50" y1="27" x2="50" y2="55" {...common} />
        <line x1="50" y1="35" x2="38" y2="48" {...common} />
        <line x1="50" y1="35" x2="62" y2="48" {...common} />
        <line x1="50" y1="55" x2="34" y2="70" {...common} />
        <line x1="34" y1="70" x2="34" y2="88" {...common} />
        <line x1="50" y1="55" x2="68" y2="72" {...common} />
        <line x1="68" y1="72" x2="62" y2="88" {...common} />
      </>
    ),
    press: (
      <>
        <circle cx="50" cy="24" r="9" {...head} />
        <line x1="50" y1="33" x2="50" y2="66" {...common} />
        <line x1="50" y1="40" x2="36" y2="20" {...common} />
        <line x1="50" y1="40" x2="64" y2="20" {...common} />
        <line x1="50" y1="66" x2="42" y2="90" {...common} />
        <line x1="50" y1="66" x2="58" y2="90" {...common} />
        <rect x="30" y="14" width="12" height="6" rx="2" fill={stroke} />
        <rect x="58" y="14" width="12" height="6" rx="2" fill={stroke} />
      </>
    ),
    row: (
      <>
        <circle cx="30" cy="30" r="9" {...head} />
        <line x1="38" y1="34" x2="72" y2="46" {...common} />
        <line x1="54" y1="40" x2="54" y2="26" {...common} />
        <line x1="72" y1="46" x2="66" y2="72" {...common} />
        <line x1="72" y1="46" x2="80" y2="72" {...common} />
        <rect x="50" y="20" width="10" height="6" rx="2" fill={stroke} />
      </>
    ),
    plank: (
      <>
        <circle cx="20" cy="52" r="9" {...head} />
        <line x1="28" y1="54" x2="82" y2="66" {...common} />
        <line x1="34" y1="55" x2="30" y2="74" {...common} />
        <line x1="82" y1="66" x2="80" y2="82" {...common} />
        <line x1="82" y1="66" x2="72" y2="82" {...common} />
      </>
    ),
    bridge: (
      <>
        <circle cx="80" cy="60" r="9" {...head} />
        <path d="M28 78 Q50 40 72 60" {...common} />
        <line x1="28" y1="60" x2="28" y2="80" {...common} />
        <line x1="36" y1="58" x2="30" y2="78" {...common} />
      </>
    ),
    stretch: (
      <>
        <circle cx="34" cy="26" r="9" {...head} />
        <line x1="34" y1="35" x2="50" y2="60" {...common} />
        <line x1="42" y1="47" x2="70" y2="40" {...common} />
        <line x1="50" y1="60" x2="78" y2="66" {...common} />
        <line x1="50" y1="60" x2="46" y2="88" {...common} />
      </>
    ),
    cardio: (
      <>
        <circle cx="50" cy="16" r="9" {...head} />
        <line x1="50" y1="25" x2="50" y2="55" {...common} />
        <line x1="50" y1="33" x2="34" y2="22" {...common} />
        <line x1="50" y1="33" x2="66" y2="46" {...common} />
        <line x1="50" y1="55" x2="38" y2="70" {...common} />
        <line x1="38" y1="70" x2="44" y2="88" {...common} />
        <line x1="50" y1="55" x2="60" y2="60" {...common} />
        <line x1="60" y1="60" x2="60" y2="82" {...common} />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 100 100" width="72" height="72" aria-hidden="true">
      {poses[pose] || poses.stand}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Program data — Week 14
// ---------------------------------------------------------------------------

const PROGRAM = {
  Mon: {
    focus: "Lower Body Strength",
    calories: "≈ 105 cal",
    time: "≈ 23 min",
    warmup: [
      { name: "High knees", detail: "2 × 30 sec", pose: "cardio" },
      { name: "Bodyweight squats", detail: "1 × 10", pose: "squat" },
      { name: "Hip circles", detail: "8 each direction", pose: "stand" },
      { name: "Leg swings", detail: "10 per leg", pose: "stand" },
    ],
    exercises: [
      {
        group: "A",
        name: "Goblet squat (12 lb)",
        reps: "3 × 12",
        pose: "squat",
        note: "Chest tall, sit back into the heels.",
      },
      {
        group: "A",
        name: "Glute bridge",
        reps: "3 × 15",
        pose: "bridge",
        note: "Squeeze glutes at the top for 1 count.",
      },
      {
        group: "B",
        name: "Reverse lunge (8 lb)",
        reps: "3 × 10 per leg",
        pose: "lunge",
        note: "Step straight back — sagittal plane only.",
      },
      {
        group: "B",
        name: "Stationary split squat (8 lb)",
        reps: "3 × 10 per leg",
        pose: "lunge",
        note: "Replaces lateral lunge — no inner-thigh loading while the strain heals.",
      },
      {
        group: "Solo",
        name: "Calf raise",
        reps: "2 × 20",
        pose: "stand",
        note: "Slow lower, full stretch at the bottom.",
      },
    ],
    cooldown: [
      "Standing hamstring stretch — 30 sec per leg",
      "Hip flexor stretch — 30 sec per side",
      "Quad stretch — 30 sec per leg",
    ],
  },

  Tue: {
    focus: "Low-Impact Cardio",
    calories: "≈ 110 cal",
    time: "≈ 20 min",
    warmup: [
      { name: "Ankle rolls", detail: "10 each", pose: "stand" },
      { name: "Arm swings", detail: "10 each", pose: "stand" },
    ],
    exercises: [
      {
        group: "Solo",
        name: "Brisk walk / cycling",
        reps: "12 min steady (choose one)",
        pose: "cardio",
        note: "Conversational-but-working pace.",
      },
      {
        group: "Finisher",
        name: "High knees",
        reps: "4 × 30 sec (30 sec rest)",
        pose: "cardio",
        note: "Replaces march in place.",
      },
      {
        group: "Finisher",
        name: "Low-impact skaters",
        reps: "4 × 30 sec (30 sec rest)",
        pose: "cardio",
        note: "Replaces step touch. Stay light on the feet.",
      },
    ],
    cooldown: [
      "Standing hamstring stretch — 30 sec per leg",
      "Calf stretch — 30 sec per leg",
    ],
  },

  Wed: {
    focus: "Upper Body + Core",
    calories: "≈ 95 cal",
    time: "≈ 24 min",
    warmup: [
      { name: "Arm circles", detail: "10 each direction", pose: "stand" },
      { name: "Band pull-apart", detail: "1 × 12", pose: "row" },
      { name: "High knees", detail: "1 × 30 sec", pose: "cardio" },
    ],
    exercises: [
      {
        group: "A",
        name: "Overhead press (8 lb, 4-count tempo)",
        reps: "3 × 10",
        pose: "press",
        note: "Tempo over load — 4 up / 4 down.",
      },
      {
        group: "A",
        name: "Bicep curl (8 lb, alternating)",
        reps: "3 × 10 per arm",
        pose: "stand",
        note: "Alternating arms, controlled.",
      },
      {
        group: "B",
        name: "Overhead tricep extension (8 lb)",
        reps: "3 × 12",
        pose: "press",
        note: "Added week 12 for underarm work.",
      },
      {
        group: "B",
        name: "Tricep kickback (8 lb)",
        reps: "3 × 12 per arm",
        pose: "row",
        note: "Hinge slightly, elbow pinned to side.",
      },
      {
        group: "Core",
        name: "Dead bug",
        reps: "2 × 10 per side",
        pose: "plank",
        note: "Low back stays flat to the floor.",
      },
      {
        group: "Core",
        name: "Plank hold",
        reps: "2 × 25 sec",
        pose: "plank",
        note: "Dropping to knees mid-set is valid pacing.",
      },
    ],
    cooldown: [
      "Chest / shoulder stretch — 30 sec per side",
      "Overhead tricep stretch — 30 sec per side",
      "Cat-cow — 8 slow reps",
    ],
  },

  Thu: {
    focus: "Mobility + Recovery",
    calories: "≈ 45 cal",
    time: "≈ 20 min",
    warmup: [{ name: "Gentle marching / breathing", detail: "1 min", pose: "stand" }],
    exercises: [
      {
        group: "Solo",
        name: "90/90 hip stretch",
        reps: "60 sec per side (hold)",
        pose: "stretch",
        note: "Ease deeper on each exhale.",
      },
      {
        group: "Solo",
        name: "Pigeon pose",
        reps: "60 sec per side (hold)",
        pose: "stretch",
        note: "Prop a cushion under the hip if needed.",
      },
      {
        group: "Solo",
        name: "Standing hamstring stretch",
        reps: "45 sec per leg (hold)",
        pose: "stretch",
        note: "Hamstring care — never bounce.",
      },
      {
        group: "Solo",
        name: "Cat-cow",
        reps: "10 slow reps",
        pose: "plank",
        note: "Move with the breath.",
      },
      {
        group: "Solo",
        name: "Hip flexor stretch",
        reps: "45 sec per side (hold)",
        pose: "stretch",
        note: "Tuck the pelvis to deepen.",
      },
    ],
    cooldown: ["Standing hamstring stretch — 30 sec per leg", "Child's pose — 60 sec"],
  },

  Fri: {
    focus: "Full Body Strength",
    calories: "≈ 105 cal",
    time: "≈ 24 min",
    warmup: [
      { name: "High knees", detail: "2 × 30 sec", pose: "cardio" },
      { name: "Low-impact skaters", detail: "1 × 30 sec", pose: "cardio" },
      { name: "Bodyweight squats", detail: "1 × 10", pose: "squat" },
    ],
    exercises: [
      {
        group: "A",
        name: "Goblet squat (12 lb)",
        reps: "3 × 12",
        pose: "squat",
        note: "Drive through mid-foot.",
      },
      {
        group: "A",
        name: "Push-up (knees or full)",
        reps: "3 × 8",
        pose: "plank",
        note: "Knee push-ups are not a fallback — valid choice.",
      },
      {
        group: "B",
        name: "Romanian deadlift (12 lb)",
        reps: "3 × 10",
        pose: "row",
        note: "Hamstring care — hold reps steady, soft knees, flat back.",
      },
      {
        group: "B",
        name: "Close-grip push-up",
        reps: "2 × 8",
        pose: "plank",
        note: "Elbows tucked; targets triceps.",
      },
      {
        group: "Finisher",
        name: "Cardio finisher (high knees / skaters)",
        reps: "90 sec (alternate 20 sec each)",
        pose: "cardio",
        note: "Shortened finisher to hold the time budget.",
      },
    ],
    cooldown: [
      "Standing hamstring stretch — 30 sec per leg",
      "Pigeon pose — 45 sec per side",
      "Chest stretch — 30 sec per side",
    ],
  },

  Sat: {
    focus: "Rest",
    calories: "—",
    time: "—",
    warmup: [],
    exercises: [
      {
        group: "Solo",
        name: "Optional gentle walk",
        reps: "20–30 min easy (optional)",
        pose: "stand",
        note: "Recovery only — keep it light.",
      },
    ],
    cooldown: [],
  },

  Sun: {
    focus: "Rest — Meal Prep",
    calories: "—",
    time: "—",
    warmup: [],
    exercises: [
      {
        group: "Solo",
        name: "Rest & meal prep",
        reps: "No training",
        pose: "stand",
        note: "Pescatarian, intuitive eating — prep for the week ahead.",
      },
    ],
    cooldown: [],
  },
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------

function GroupPill({ group }) {
  const c = SUPERSET_COLORS[group] || SUPERSET_COLORS.Solo;
  const label =
    group === "Solo"
      ? "Standalone"
      : group === "Core" || group === "Finisher"
      ? group
      : `Superset ${group}`;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        borderRadius: 999,
        padding: "2px 10px",
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ExerciseCard({ ex, done, onToggle }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: 14,
        borderRadius: 14,
        border: "1px solid #e2e8f0",
        background: done ? "#f8fafc" : "#ffffff",
        opacity: done ? 0.6 : 1,
        transition: "opacity 0.2s ease, background 0.2s ease",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <StickFigure pose={ex.pose} done={done} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <GroupPill group={ex.group} />
          <span
            style={{
              background: "#0f172a",
              color: "#fff",
              borderRadius: 8,
              padding: "2px 10px",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {ex.reps}
          </span>
        </div>

        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginTop: 6,
            color: "#0f172a",
            textDecoration: done ? "line-through" : "none",
          }}
        >
          {ex.name}
        </div>

        {ex.note && (
          <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{ex.note}</div>
        )}

        <a
          href={yt(ex.name)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "#2563eb", marginTop: 4, display: "inline-block" }}
        >
          ▶ Watch tutorial
        </a>
      </div>

      <label style={{ flexShrink: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={done}
          onChange={onToggle}
          style={{ width: 22, height: 22, cursor: "pointer" }}
        />
      </label>
    </div>
  );
}

export default function WeekFourteenWorkout() {
  const [activeDay, setActiveDay] = useState("Mon");
  const [completed, setCompleted] = useState({}); // key: `${day}-${index}`

  const day = PROGRAM[activeDay];

  const toggle = (idx) => {
    const key = `${activeDay}-${idx}`;
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const doneCount = day.exercises.filter((_, i) => completed[`${activeDay}-${i}`]).length;

  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
        color: "#0f172a",
      }}
    >
      <header style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>WEEK 14</div>
        <h1 style={{ fontSize: 26, margin: "2px 0 0" }}>{day.focus}</h1>
        <div style={{ display: "flex", gap: 16, marginTop: 6, fontSize: 14, color: "#475569" }}>
          <span>🔥 {day.calories}</span>
          <span>⏱ {day.time}</span>
          {day.exercises.length > 0 && (
            <span>
              ✅ {doneCount}/{day.exercises.length} done
            </span>
          )}
        </div>
      </header>

      {/* Day tabs */}
      <nav
        style={{
          display: "flex",
          gap: 6,
          marginBottom: 16,
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        {DAYS.map((d) => {
          const active = d === activeDay;
          return (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              style={{
                flex: "1 0 auto",
                padding: "8px 12px",
                borderRadius: 10,
                border: active ? "1px solid #0f172a" : "1px solid #e2e8f0",
                background: active ? "#0f172a" : "#fff",
                color: active ? "#fff" : "#475569",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {d}
            </button>
          );
        })}
      </nav>

      {/* Warm-up */}
      {day.warmup.length > 0 && (
        <section style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 15, textTransform: "uppercase", color: "#64748b" }}>
            Warm-up
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {day.warmup.map((w, i) => (
              <a
                key={i}
                href={yt(w.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  background: "#f1f5f9",
                  borderRadius: 10,
                  padding: "6px 10px",
                  color: "#0f172a",
                  textDecoration: "none",
                  border: "1px solid #e2e8f0",
                }}
              >
                {w.name} · <strong>{w.detail}</strong> ▶
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Exercises */}
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {day.exercises.map((ex, i) => (
          <ExerciseCard
            key={i}
            ex={ex}
            done={!!completed[`${activeDay}-${i}`]}
            onToggle={() => toggle(i)}
          />
        ))}
      </section>

      {/* Cooldown */}
      {day.cooldown.length > 0 && (
        <section style={{ marginTop: 18 }}>
          <h2 style={{ fontSize: 15, textTransform: "uppercase", color: "#64748b" }}>
            Cooldown
          </h2>
          <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "#334155", fontSize: 14 }}>
            {day.cooldown.map((c, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer style={{ marginTop: 22, fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>
        Week 14 · Reps shown per exercise. Lateral lunge removed while the adductor strain
        heals — swapped for a stationary split squat (no inner-thigh loading). Stop and reassess
        with sharp pain, swelling, or instability.
      </footer>
    </div>
  );
}
