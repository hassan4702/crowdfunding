# Research Notes — Blockchain Crowdfunding Landscape

Literature survey (2017–2026) used to position the contribution. Sources are
linked inline. Tags: **SATURATED** (avoid), **THIN** (claimed but not
built/measured), **UNEXPLORED** (genuine white space).

## Saturated — do NOT claim novelty here
- Basic decentralized crowdfunding dApp on Ethereum — dozens of near-identical
  papers (IJRASET, IJRPR, IJCRT, ResearchGate).
- Milestone release via donor/DAO voting — Ventureum, LikeStarter
  (https://arxiv.org/pdf/1905.05560), and the canonical baseline
  Alruwaili & Kruger 2020 e-voting milestone payments
  (https://link.springer.com/chapter/10.1007/978-3-030-61146-0_5).
- Quadratic funding theory — Buterin/Hitzig/Weyl
  (https://arxiv.org/pdf/1809.06421) + Gitcoin.
- Refund-bonus / provision-point **theory** — already implemented on-chain with
  a gas comparison by Damle, Gujar et al. (https://arxiv.org/abs/1810.11695).
- Formal verification of a **simple** crowdfunding refund guarantee — flagship
  case study of ConCert/Coq (https://arxiv.org/pdf/1907.10674).
- Static tiered NFT rewards; PQC at the chain layer (crowdfunding inherits the
  host chain's signatures, so PQC is a contrived bolt-on here).

## Genuine white space (ranked)
1. **ERC-4337 account abstraction for crowdfunding** — gasless / sponsored /
   session-key backing. **UNEXPLORED** (AA papers are generic; crowdfunding
   papers don't use AA). AA refs: https://arxiv.org/pdf/2309.00448 ,
   https://journals.gmu.edu/jssr/article/view/5234 ; bibliometric map shows no
   AA cluster: https://link.springer.com/article/10.1186/s40854-024-00705-4 .
   **← CHOSEN ANCHOR.**
2. **Oracle-verified objective milestone release** (Chainlink Functions / UMA)
   vs the voting baseline; dynamic milestone-NFTs. **THIN→UNEXPLORED.**
   UMA: https://docs.uma.xyz/ .
3. **MEV / front-running on crowdfunding-specific mechanics** (sniping the
   goal-crossing pledge or refund-bonus threshold). **UNEXPLORED.**
   SoK front-running: https://arxiv.org/pdf/1902.05164 ;
   Frontrunner Jones: https://arxiv.org/pdf/2102.03347 .
4. **Machine-checked refund-*bonus* contract** (Certora/KEVM) — closes the
   theory↔code↔gas loop beyond ConCert's simple example. **THIN→UNEXPLORED.**
5. **Controlled L1-vs-L2 cost benchmark** of one identical crowdfunding
   contract. **THIN.** ZK-rollup benchmark (generic):
   https://eprint.iacr.org/2024/889.pdf . **← SECONDARY LEG.**
6. **QF layered over reward/refund (private-goods) crowdfunding** —
   **UNEXPLORED** but carries mechanism-design risk.
7. **Confidential all-or-nothing crowdfunding** (Pedersen/Bulletproofs hidden
   amounts) + whether it neutralizes threshold-sniping MEV. **THIN/UNEXPLORED**,
   heavier ZK lift. Future work.
8. **Compliance-by-design** (Reg-CF caps / MiCA CDD on-chain). **THIN.**
9. **Stablecoin/RWA crowdfunding** — one conceptual arXiv anchor
   (https://arxiv.org/abs/2501.11145), empirically near-empty.

## Caveats
- Several arXiv/Springer pages return HTTP 403 to automated fetchers; some
  "UNEXPLORED" tags rest on negative search results + a bibliometric map.
  Absence-of-evidence applies — verify with a manual scholar sweep before final
  novelty claims in the paper.
