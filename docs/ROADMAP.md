# Block Fund — Modernization & Research Roadmap

This document is the single source of truth for upgrading Block Fund from a
two-year-old portfolio dApp into (a) a viable, secure product and (b) a
defensible, publishable research contribution. Both goals are pursued in
parallel on a **shared hardened contract core**, so almost no work is wasted.

---

## 1. The contribution

**Anchor:** Gasless / account-abstraction crowdfunding backing (ERC-4337),
benchmarked across Layer-2s, on a security-hardened contract.

**Why this anchor.** The thirdweb SDK v4 → v5 migration is mandatory (v4 is
deprecated). thirdweb v5 ships native account abstraction + sponsored-gas
(paymaster) support. So the single largest piece of *mandatory product
modernization* is also the *core artifact of the paper*. One job, counted twice.

**Honest novelty statement (survives review):**
> "The first evaluated, open-source implementation of account-abstraction–
> sponsored crowdfunding backing, benchmarked across L2s, on a
> security-hardened contract."

We do **not** claim: first decentralized crowdfunding dApp, novel QF math, or
"first formal verification of crowdfunding" — all false/saturated (see
`docs/RESEARCH-NOTES.md`).

### The three measurable legs
1. **Gasless backing via account abstraction** *(novel contribution)* — a
   backer with no ETH and no seed phrase funds a campaign via a sponsored
   UserOp / session key. Metrics: gas per UserOp vs plain EOA `contribute()`,
   paymaster overhead, steps/clicks-to-first-donation.
2. **Cross-L2 cost benchmark** *(fills a thin gap, nearly free to add)* — same
   contract deployed to Ethereum + Base/Arbitrum/Optimism/zkSync testnets;
   per-operation gas → USD. Paymaster overhead measured *across* chains is
   itself unpublished.
3. **Security hardening** *(evaluation section + the product fix)* — fix the
   real bugs in the current contract, add guards, then report before/after
   Slither + Mythril + test coverage.

---

## 2. Current-state findings (the "before")

### Smart contract (`web3/contracts/Crowdfunding.sol`) — real bugs
- **Index corruption on delete:** `deleteCampaign` does `numberOfCampaigns -= 1`
  on an index-keyed mapping → `getCampaigns()` drops/zeroes campaigns.
- **`updateCampaign` appends instead of replaces** image/faqs/packages arrays.
- **Emergency `withdrawFunds` refunds the whole range on every loop iteration.**
- **Target is never enforced** — the "target reached" check is a mislabeled
  overflow check; campaigns can be over-funded indefinitely.
- **No refund-on-failure** — donors can never reclaim funds if a campaign
  misses its target; only the owner can trigger refunds (emergency mode).
- **DoS-able push-payment refund loops** (`_refundDonators`) — one reverting
  recipient bricks refunds for all. Needs pull-payment pattern.
- **`changeTax` has no upper bound**; **SafeMath is obsolete** in 0.8+;
  **`getCampaigns()` is unbounded** (own TODO notes pagination); **emails are
  stored on-chain in plaintext** (privacy/GDPR).
- **High centralization:** owner can pay out any campaign bypassing deadline,
  halt campaigns, change tax, toggle emergency.

### Backend (`server/`)
- **[FIXED]** Hardcoded Gmail app password removed from `server.ts`
  (now env-driven). **The leaked password must still be rotated in Google** —
  it remains in git history.
- Remaining: `/send-email` is an unauthenticated open relay; CORS fully open;
  no rate limiting / validation / `helmet`.

### Frontend / tooling
- thirdweb SDK **v4 (deprecated)**, ethers **v5**, Vite **3**, React **18**,
  **NextUI** (renamed to HeroUI) — all 1–2 majors behind.
- Hardcoded contract address in `context/index.jsx` (`0xc498…`) **mismatches**
  `abis/contract-address.json` (`0xff71…`); thirdweb `clientId` hardcoded.
- **Zero tests** anywhere; **no CI**; `hardhat.config.js` has the `sepolia`
  network nested *inside* `solidity.networks` (unreachable) + unused zkSync.

---

## 3. Account-abstraction approach — DECISION

**Decision: dual-path.**
- **Product path → thirdweb v5 managed account abstraction.** Fast, reliable,
  gasless via a managed paymaster; it's the migration we must do anyway. This
  is what ships to users.
- **Measurement path → a controlled, local ERC-4337 stack** using the
  reference `@account-abstraction/contracts` (`EntryPoint` + a custom
  `VerifyingPaymaster` + a minimal smart account) on a Hardhat node. Gas is
  measured deterministically by calling `entryPoint.handleOps([userOp], …)`
  directly and reading receipts — reproducible numbers a managed bundler
  cannot give us. Bundler latency is an optional separate measurement.

**Rationale:** a managed bundler/paymaster yields variable, non-reproducible
numbers (you don't control the infra) — unacceptable for a paper's evaluation.
The local stack is small, shares the exact same Campaign/Escrow contract, and
gives clean reproducible data. Product velocity (managed) and measurement rigor
(local) without forking the contract.

---

## 4. Track A — Product

### Phase 0 — Security triage
- [x] Remove hardcoded email credentials → env vars + `.env.example`.
- [ ] **(User action)** Rotate the leaked Gmail app password.
- [ ] Harden server: auth + rate limit on `/send-email`, restrict CORS to known
      origins, add `helmet`, validate/sanitize all request bodies, fail fast on
      missing `MONGODB_URI`.

### Phase 1 — Contract v2 (`CrowdFundingV2.sol`)
- [ ] Fix the 5 correctness bugs (delete indexing, update-replace semantics,
      emergency-refund loop, enforce target, refund-on-failure).
- [ ] Add OpenZeppelin v5 `ReentrancyGuard`; convert refunds/payouts to the
      **pull-payment** pattern (`withdrawRefund()` / `claimPayout()`).
- [ ] Remove SafeMath; cap `platformTax`; paginate `getCampaigns(start, end)`.
- [ ] Move email/PII off-chain (store only a hash or omit entirely).
- [ ] Reduce owner privileges / document the trust model explicitly.
- [ ] (For the paper's leg 1) escrow that an ERC-4337 `Account` can fund.

### Phase 2 — Tests, static analysis, CI
- [ ] Full Hardhat (or Foundry) test suite: happy paths, every revert, refund
      flows, reentrancy attacker mock, fuzz on contribute/refund.
- [ ] `hardhat-gas-reporter` + `solidity-coverage`.
- [ ] Slither + Mythril; capture **before (v1) vs after (v2)** findings.
- [ ] GitHub Actions CI: lint + test + coverage + Slither on every push.
- [ ] Fix `hardhat.config.js` (move `networks` to top level; drop dead zkSync).

### Phase 3 — Account abstraction (gasless backing)
- [ ] Product: integrate thirdweb v5 smart accounts + managed paymaster;
      sponsored first donation; session key scoped to "donate up to X".
- [ ] Measurement: local `EntryPoint` + `VerifyingPaymaster` + min account.

### Phase 4 — Frontend / dependency modernization
- [ ] Migrate `@thirdweb-dev/react|sdk` v4 → `thirdweb` v5; ethers v5 → v6.
- [ ] Vite 3 → 6, React 18 → 19, NextUI → HeroUI.
- [ ] Move contract address + `clientId` to `.env`; resolve the address
      mismatch; delete the `define: { "process.env": {} }` hack.

---

## 5. Track B — Paper

### Experiment 1 — Gasless AA backing vs EOA (the contribution)
- Implement `contribute()` callable both as a plain EOA tx and as a sponsored
  UserOp through the local ERC-4337 stack.
- **Metrics:** gas (EOA tx) vs total UserOp gas (validation + execution +
  postOp paymaster overhead); USD at representative gas prices; steps /
  signatures / wallet prompts to first successful donation (EOA vs smart
  account); session-key reuse savings on repeat donations.

### Experiment 2 — Cross-L2 cost benchmark
- Deploy identical v2 contract to Ethereum Sepolia + Base/Arbitrum/Optimism/
  zkSync (+ Polygon) testnets.
- **Metrics:** per-operation gas and live-fee USD for `createCampaign`,
  `contribute`, sponsored `contribute`, `claimPayout`, `withdrawRefund`;
  factor-difference table L1 vs each L2; paymaster overhead per chain.

### Experiment 3 — Security before/after
- **Metrics:** Slither/Mythril finding counts by SWC class (v1 vs v2); test
  coverage %; gas delta from hardening; a documented threat model + failure
  modes (reentrancy, malicious recipient, stale paymaster, owner abuse).

### Paper outline
1. Intro & motivation (gas/onboarding is the real adoption barrier)
2. Background & related work (cite the saturated zones to position novelty)
3. Threat model & design (hardened escrow + AA backing)
4. Implementation (contract v2, ERC-4337 stack, frontend)
5. Evaluation (the three experiments above)
6. Discussion & limitations (oracle/centralization/trust honesty)
7. Conclusion & future work (oracle milestones, ZK confidential amounts)

### Candidate venues
- IEEE ICBC / IEEE Blockchain, ACM AFT (competitive), or a solid
  blockchain/FinTech journal (e.g., *Financial Innovation*, *IEEE Access*) for
  a lower-risk first publication.

---

## 6. Risks & mitigations
- **AA tooling churn (ERC-4337 vs EIP-7702):** pin versions; cite 7702 as
  future work; the local reference stack insulates measurements.
- **Reviewer: "gasless is just a paymaster":** the contribution is the
  *crowdfunding-specific design + the cross-L2 measurement*, not inventing AA.
- **Scope creep:** oracle milestones / ZK amounts are explicitly *future work*,
  not v1.
- **Testnet flakiness for L2 fees:** snapshot fees with timestamps; report
  ranges; use gas units (deterministic) as the primary metric, USD as
  secondary.

---

## 7. Sequencing (suggested)
0. Security triage (Phase 0) — *in progress*
1. Contract v2 + tests + CI (Phases 1–2) — foundation for everything
2. Local ERC-4337 stack + Experiment 1
3. Cross-L2 deploys + Experiment 2
4. Frontend migration + product AA (Phases 3–4 product side)
5. Security before/after writeup (Experiment 3) + paper draft

---

## 8. Immediate next steps
1. **User:** rotate the leaked Gmail app password.
2. Harden the server (finish Phase 0).
3. Scaffold the Hardhat test/gas/coverage/CI tooling against the *current* v1
   contract to capture the honest "before" baseline.
4. Begin `CrowdFundingV2.sol`.
