---
title: Blitz
layout: default
---

# Blitz #

Created by beej

### Procedure

- The game consists of two rounds: the open round and the final round. The minigame begins in the open round which is free join.
- The host asks the first question -- usually an easy one -- to start the game.
- When a question is answered correctly, the player who answered it gains two points, and they must ask the next question.
- The asker has one minute to ask a valid question. If they fail to ask a question or if their question gets vetoed, they lose the two points they had earned and the host asks the next question.
- When a player asks a question, if nobody answers correctly within one minute, the asker also loses two points, and the host asks another question.
- Once someone scores 8 points, they become one of the game’s four finalists. Their score is erased and they can no longer ask/answer in the open round. The host then asks a tossup to continue the game.
- Once four people reach the score cap of 8, all but the top four scoring players are eliminated and the game enters the final round.
- In the final round, the scores are reset and the players battle to be the first to reach 10 points.
- In the event that multiple players are disqualified or leave, creating an untenable final round (such as one with only two active players), the final TT blitz round will be decided with a best of five with questions supplied by the host.

### Commands

- For Team Blitz, signups are started with "~plmax [desired number of players]". To end the signups, use "~plmax".
- The game should start with a staff using "~minigame blitz new".
- Use "~ttl list, 10, blitz" and "~ttl list, 10, blitzfinals" to check the current scores for the open and final rounds respectively.
- When moving to the finals, a staff must use "~minigame blitz finals".
- The finalists can be voiced and modchat can be turned on by a staff using "~pladd [finalist1], [finalist2], [finalist3], [finalist4]" followed by "~modchat on".
- Once the game is finished a staff must use "~minigame blitz end".
- If modchat was turned on, turn it off by an auth using "~plclear" and a staff using "~modchat off".

# Team Blitz #

Created by PikachuSean

- Users can join the game during signups by typing "/me in" in chat.
- After signups, players divide themselves into teams of 2 to 4 players. The host compiles the team list and the names chosen by each team.
- The first team to have one of their members post the correct answer in chat receives the BP and that team will receive two points.
- The user who answers the question correctly must ask another question within 1 minute. Teammates are not allowed to answer their teams questions.
- Once a team reaches 8 points, they proceed to finals.
- For teams of 2 or 3, only two teams reach finals while for teams of 4, only the first team advances to finals.
- In finals, members of the remaining teams will compete against one another. The first player to reach 10 points wins the minigame!

# Gameplay Examples

![Blitz 1](/assets/images/blitz-1_orig.png)

![Blitz 2](/assets/images/blitz-2_orig.png)

![Blitz 3](/assets/images/blitz-5_orig.png)
