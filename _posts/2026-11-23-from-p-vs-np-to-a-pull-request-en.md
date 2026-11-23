---
title: "From “Let's Prove P = NP” to an Approved Pull Request"
date: 2026-11-23
permalink: /posts/2026/11/from-p-vs-np-to-a-pull-request-en/
lang: en
categories:
  - Research Notes
tags:
  - Complexity Theory
  - Formal Verification
  - Lean
  - Open Source
  - AI
excerpt: "I set an AI loose on P vs NP for a night. What came out was not a proof, but my first real open-source contribution: a reviewed, approved Lean formalization."
---

At 1:30 a.m. on November 23 I posted on WeChat: "Can't wait any longer. Starting to prove P = NP. Wait for good news."

The idea was simple. This year AI systems have taken part in proofs related to Navier–Stokes and the Riemann hypothesis, and I had plenty of GPT quota. Why not leave it running and see?

Fifteen hours later, P vs NP is of course still open. But I have something else: a reviewed and approved pull request formalizing part of Alman and Williams' result that Walsh–Hadamard matrices are **not rigid**. It is my first real contribution to an open-source project.

## First: build a system that cannot be fooled

The danger in letting an AI do research for hours is not that it fails. It is that it produces a beautiful proof that is wrong.

So before starting, Claude and I wrote rules. GPT executes; Claude reviews.

- **Only the Lean compiler counts.** A result must be a frozen Lean statement that compiles and depends only on the three standard axioms. Confidence and long prose do not count.
- **Frozen statements never change**, so a model cannot quietly prove something weaker.
- **Barrier check first.** Any route toward P ≠ NP must explain how it avoids relativization, natural proofs, and algebrization.
- **Failures are recorded**, with the exact point where each route breaks.

## Second: look at what already exists

GPT started defining P and NP from scratch. The first review found complete Lean complexity libraries already in the community, with Cook–Levin and the time hierarchy theorem formalized. The rule I follow for products applies to research too: survey the ecosystem before building, and never default to rewriting. We switched to CSLib Frontier and saved months.

## Third: from P vs NP to matrix rigidity

We paused any direct attack on P vs NP: no idea we had passed the three barriers. But there are concrete steps on the road. One is Valiant's **matrix rigidity** program: an explicit sufficiently rigid matrix would give lower bounds for linear circuits. Walsh–Hadamard matrices were long considered the best candidates; Alman and Williams showed they are not rigid enough. CSLib Frontier's issue #3209 listed this result as open, and I claimed it.

## Fourth: submit, get changes requested, get approved

This repository is largely built by AI agents under human coordinators. My first submission received "changes requested": only the paper's actual result may be registered as a result (finite intermediate steps may not be presented as Theorem 1.1); a frozen manual chapter must not be edited; tests need the module syntax; names must follow Mathlib conventions. After addressing each point, the PR was approved. The review also noted that the new theorems duplicate no existing lemmas and that the Lemma 3.2 statement had been checked against the paper.

## Two negative results along the way

1. Theorem 1.1 of the paper states a saving of ε²/log(1/ε), while the estimates in Section 3 give ε²/log²(1/ε). We showed that **the single-band construction of that section cannot reach a single logarithm**, however its parameters are tuned. This says where the construction stops, not that the paper is wrong.
2. For satisfiability of threshold circuits we tried eight approaches. None yields a new circuit lower bound, but each failure point is recorded.

## What I learned

**Verifiable work is real work.** Before, I would at most describe my work on a blog. This time every line is public, reviewed line by line, revised, and approved. The link is the evidence.

**AI speed has a boundary.** Formalizing known mathematics took minutes; our time estimates were wildly wrong. Genuine open problems do not fall to fifteen-minute loops. AI is best at making known results solid and drawing the map clearly.

**Research and open source are collaborative processes.** Claim, submit, read the review, follow conventions, revise, reply, wait. Today I walked through all of it for the first time.

P vs NP is still there, and I still hope to get closer to it one day. I just understand better now that the road is built one brick at a time.

*Note: the Lean code was written mainly by Codex (GPT); Claude reviewed the statements against the paper; I directed the work and did the final checks. The PR is approved and awaiting merge: [cslib-frontier #7803](https://github.com/cslib-community/cslib-frontier/pull/7803).*
