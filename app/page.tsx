"use client";

import { useState } from "react";

type PreparationTask = {
  id: string;
  name: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  complete: boolean;
};

const initialTasks: PreparationTask[] = [
  {
    id: "sword-control",
    name: "Sword control",
    description: "Sharpen timing and precision so Asta can punish Lucifero's opening attacks.",
    priority: "High",
    complete: false,
  },
  {
    id: "physical-endurance",
    name: "Physical endurance",
    description: "Build the stamina required to survive the brutal pace of a final clash.",
    priority: "High",
    complete: false,
  },
  {
    id: "team-coordination",
    name: "Team coordination",
    description: "Align tactics and support to keep the squad steady when the battle turns chaotic.",
    priority: "Medium",
    complete: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const completedCount = tasks.filter((task) => task.complete).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  function toggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task,
      ),
    );
  }

  return (
    <main className="dashboard-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="dashboard-content">
        <header className="topbar">
          <a className="brand" href="#main" aria-label="Asta's plan against Lucifero home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 3.5 36.5 13v14L20 36.5 3.5 27V13L20 3.5Z" />
                <path d="m20 10 9 5.2v9.6L20 30l-9-5.2v-9.6L20 10Z" />
                <path d="M20 15v10M15.7 17.5l8.6 5M24.3 17.5l-8.6 5" />
              </svg>
            </span>
            <span className="brand-copy">
              <span className="brand-name">ASTA</span>
              <span className="brand-caption">COUNTERPLAN / LUCIFERO</span>
            </span>
          </a>
          <div className="session-status">
            <span className="status-dot" aria-hidden="true" />
            <span>BATTLE PREP</span>
          </div>
        </header>

        <section className="dashboard-main" id="main">
          <div className="intro">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE WORK BEFORE THE WIN
            </p>
            <h1>Asta&apos;s Plan Against Lucifero</h1>
            <p className="intro-copy">
              Lucifero&apos;s threat is closing in, and Asta must sharpen every
              skill before the final clash. Track the preparation plan and keep
              each discipline moving toward the decisive counter.
            </p>
            <div className="intro-note">
              <span className="note-star" aria-hidden="true">✳</span>
              <span>Three disciplines. One decisive strategy.</span>
            </div>
          </div>

          <section className="tracker-panel" aria-labelledby="tracker-title">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">PREPARATION / 01</p>
                <h2 id="tracker-title">Your battle plan</h2>
              </div>
              <span className="task-count">{tasks.length} STEPS</span>
            </div>

            <div className="progress-card" aria-live="polite">
              <div className="progress-topline">
                <div>
                  <p className="metric-label">PREPARATION PLAN COMPLETION</p>
                  <p className="progress-count">
                    <span>{completedCount}</span>
                    <span className="count-divider">/</span>
                    <span>{tasks.length}</span>
                    <span className="count-caption">PLAN STAGES COMPLETE</span>
                  </p>
                </div>
                <p className="progress-percent">{progress}%</p>
              </div>
              <div
                className="progress-track"
                role="progressbar"
                aria-label="Preparation progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-valuetext={`${completedCount} of ${tasks.length} tasks complete, ${progress}%`}
              >
                <span
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="progress-foot">
                <span>BEGIN</span>
                <span>{completedCount === tasks.length ? "ALL PREP COMPLETE" : "KEEP MOVING FORWARD"}</span>
                <span>READY</span>
              </div>
            </div>

            <div className="task-list">
              <div className="list-heading">
                <span>YOUR DISCIPLINES</span>
                <span>STATUS</span>
              </div>
              {tasks.map((task, index) => (
                <label
                  className={`task-row${task.complete ? " is-complete" : ""}`}
                  key={task.id}
                >
                  <input
                    className="task-checkbox"
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => toggleTask(task.id)}
                    aria-label={`${task.complete ? "Mark incomplete" : "Mark complete"}: ${task.name}`}
                  />
                  <span className="task-check-visual" aria-hidden="true">
                    <svg viewBox="0 0 18 18" fill="none">
                      <path d="m4 9 3.2 3.2L14 5.8" />
                    </svg>
                  </span>
                  <span className="task-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="task-main">
                    <span className="task-name">{task.name}</span>
                    <span className="task-meta">
                      <span className="task-priority">{task.priority} PRIORITY</span>
                      <span className="task-description">{task.description}</span>
                    </span>
                  </span>
                  <span className="task-status">
                    <span className="task-status-dot" aria-hidden="true" />
                    {task.complete ? "COMPLETE" : "TO DO"}
                  </span>
                  <span className="task-chevron" aria-hidden="true">↗</span>
                </label>
              ))}
            </div>

            <p className="panel-footnote">
              <span className="footnote-mark" aria-hidden="true">✦</span>
              Each completed discipline brings the counter closer to victory.
            </p>
          </section>
        </section>

        <footer className="footer">
          <span>DISCIPLINE IS THE KEY TO VICTORY</span>
          <span className="footer-seal" aria-hidden="true">✳</span>
          <span>FIGHT FOR THE FUTURE</span>
        </footer>
      </div>
    </main>
  );
}
