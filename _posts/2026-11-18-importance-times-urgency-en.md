---
title: "Importance × Urgency: Rewriting the Ranking Model in Visual Deadline"
date: 2026-11-18
permalink: /posts/2026/11/importance-times-urgency/en/
lang: en
categories:
  - Project log
tags:
  - Visual Deadline
  - Prioritization
  - Modeling
excerpt: "Urgency should not depend on how many days are left, but on whether the time left is enough to finish. Notes on the v2 ranking model and the three ways it broke."
---

[Visual Deadline](/projects/) (VD) is a task system I have been building since April 2026. I started it because I noticed that the more pressure I am under, the more tasks I add to my list. I needed an external system to decide "what should I do now" for me.

VD has always had an important/urgent matrix. I recently rewrote the ranking model behind it. This note covers the design and the mistakes along the way.

## Why a product

The starting point is simple: **priority = importance × urgency**.

I use a product instead of a weighted sum because both factors are necessary. A very important task that is due in six months and an unimportant task that is due tomorrow should both stay off the top of the list. A product says exactly that: if either factor is close to zero, so is the score.

A product also becomes a sum in log space:

$$\log P = w_I \log I + w_U \log U + \cdots$$

So the weight on each term can be learned from a user's actual choices. More on that below.

Importance is set by the user and reflects their values. The hard part is urgency.

## Urgency is not "days left"

The intuitive approach is to score tasks by days until the deadline. But:

> Two tasks both due in three days are not equally urgent if one takes 2 hours and the other takes 20.

So in v2, urgency is driven by a **load ratio**:

$$\rho = \frac{\text{hours of work required}}{\text{hours available until the deadline}}$$

Available hours assume about 6 hours of focused work per day. The ratio then goes through a saturating logistic curve mapped to $$[0.5, 7]$$: low load gives urgency near the floor, load near or above 1 approaches the ceiling, and nothing explodes.

## Three ways it broke

The formula is a few lines. What decides whether it is useful is running it on a real list. I tested it on my own: final exams, TOEFL, a visa interview, a paper, chores. It broke three times.

**First: a chore ranked first.** Initially each task only looked at its own load. Final-exam prep is a lot of work, but with two weeks to go its individual load was not high. A chore due today had a high load ratio and went to the top. The issue: **two exams close together compete for the same hours**, which you cannot see by looking at each one alone.

So I switched to a demand bound, as in EDF (earliest-deadline-first) scheduling: a task's required hours include its own remaining work plus the remaining work of every task due before it.

**Second: a visa interview months away ranked first.** With the demand bound, the task with the latest deadline inherits the work of everything before it, so its load becomes the highest.

The fix was a window: only count tasks due within **14 days** before its deadline. Back-to-back exams still crowd each other, but a distant task no longer inherits the whole calendar.

**Third: nearly finished tasks got buried.** The early formula also multiplied by a separate "remaining work" factor. But remaining work already enters urgency through the load, so this counted it twice. An application that was 90% done sank toward the bottom because it had "little left".

That is the worst possible behavior: **the system was punishing closing things out.** After removing the duplicate term, I added a mild duration term, dividing by remaining hours to the power 0.3. An exponent of 0 ignores duration; 1 is classic WSJF (weighted shortest job first). I compared 0, 0.3 and 0.5. At 0.3, nearly finished tasks rise without large tasks being crushed.

## The current formula

$$P = I \times U(\rho_{14}) \,/\, h^{0.3}$$

- $$I$$: importance, set by the user;
- $$U(\rho_{14})$$: urgency from the load ratio over a 14-day window, in $$[0.5, 7]$$;
- $$h$$: remaining hours for the task (with a floor of 1 hour).

Finished tasks are excluded, and ties are broken deterministically so results are reproducible. Each of the three failures above is now a regression test: if a future change repeats one of them, a test fails.

## Learning values from choices

I think of importance ranking as a person's values. The importance a user enters is a stated preference. What they actually do first, and what they skip, is a revealed preference.

Because the model is additive in log space, every time a user picks one task over another, the weights can be nudged, Bradley–Terry style, toward that person's real trade-offs. Weights are clamped to a range so a few accidental choices cannot drag the model off.

One principle matters to me here: **the value model belongs to the user.** It records how a person makes trade-offs, which is more private than the tasks themselves.

## Still open

- v2 currently runs alongside the old model and has not replaced the default ranking. I want to compare them in real use first.
- Time estimates are noisy. I still need to measure how sensitive the ranking is to estimation error.
- Six hours a day is a crude constant. It varies a lot between people and between days.

The main lesson: a ranking formula that looks reasonable on paper and one that gives reasonable results on a real list are two very different things. The only way to get the second is to keep running it against real data.
