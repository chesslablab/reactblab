## ReactBlab

An easy-to-use, state-management agnostic React library of chess components as well as common chess utilities.

### Install

```The state of the chessboard.
npm i @chesslablab/reactblab
```

### Usage

✨ Rather than an API specification, the present document is more of a tutorial with plenty of examples on how to use chess components in your React apps. Some familiarity with chess terms and concepts is required but if you're new to chess this document will guide you through how to easily create apps with ReactBlab components. Happy coding and learning!

#### Initialize a Classical Board

FEN stands for Forsyth-Edwards Notation and is the standard way for describing chess positions using text strings. As you can see in the following example, a FEN string representing a chess position is passed as a prop to the `ClassicalBoard` component in the `stateBoard` parameter. The `isCheck` and `flip` key-value pairs also need to be passed.

- `stateBoard` represents the state of the component.
- `filterMove` allows to implement pre-processing logic for chess moves.
- `handleMove` allows to implement validation logic for chess moves.  

```js
import { ClassicalBoard } from '@chesslablab/reactblab';

function App() {
  return (
    <ClassicalBoard
      stateBoard={{
        fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -",
        isCheck: false,
        flip: "w",
      }}
      filterMove={() => {
        // Implement pre-processing logic for the chess move.
      }}
      handleMove={() => {
        // Implement validation logic for the chess move.
      }}
    />
  );
}

export default App;
```

![Figure 1](/assets/figure_01.png)

🎉 That's it! Let's just initialize the chessboard for now without implementing any logic in the `filterMove` and `handleMove` functions. For further details please continue reading for an example on how to use multiple ReactBlab components implementing user interactions.

#### Initialize a Capablanca Board

In the 1920s, world chess champion Jose Raul Capablanca believed that chess would be played out in a few decades and invented a new variant. Capablanca chess incorporates two new pieces and is played on a 10×8 board. The archbishop (A) combines powers of a bishop and a knight while the chancellor (C) combines powers of a rook and a knight.

A Capablanca board can be easily initialized by passing the `stateBoard` prop to the `CapablancaBoard` component. Also the `fen`, `isCheck` and `flip` key-value pairs need to be passed to the chessboard component in the `stateBoard` parameter.

- `stateBoard` represents the state of the component.
- `filterMove` allows to implement pre-processing logic for chess moves.
- `handleMove` allows to implement validation logic for chess moves.

```js
import { CapablancaBoard } from '@chesslablab/reactblab';

function App() {
  return (
    <CapablancaBoard
      stateBoard={{
        fen: "r1abqkbcnr/ppppp1pppp/2n7/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R w KQkq -",
        isCheck: false,
        flip: "b",
      }}
      filterMove={() => {
        // Implement pre-processing logic for the chess move.
      }}
      handleMove={() => {
        // Implement validation logic for the chess move.
      }}
    />
  );
}

export default App;
```

![Figure 2](/assets/figure_02.png)

🎉 So this is amazing! Initializing a Capablanca board using ReactBlab components is almost the same thing as initializing a classical board. Let's just initialize it for now without implementing any logic in the `filterMove` and `handleMove` functions.

#### Browse the History of SAN Moves

Have you ever attended a chess tournament? If so, you've probably noticed that each player writes down their move on a piece of paper. SAN stands for Standard Algebraic Notation. It is a human-readable text format that allows chess players to read and write chess games in Portable Game Notation (PGN) format. This example shows how the `HistoryButtons` and `SanMovesTable` components can be combined to do a specific thing: Allow browsing through the history of SAN moves.

The `HistoryButtons` component is initialized as described below.

- `stateHistoryButtons` represents the state of the component.
- `onFastRewindClick` allows to implement on fast rewind logic.
- `onSkipPreviousClick` allows to implement on skip previous logic.
- `onSkipNextClick` allows to implement on skip next logic.
- `onFastForwardClick` allows to implement on fast forward logic.

The SAN moves table can be initialized by passing the `stateSanMovesTable` prop to the `SanMovesTable` component.

- `stateSanMovesTable` represents the state of the component.
- `onCellClick` allows to implement on cell click logic.

An array of FEN strings representing the history of moves is passed as a prop to both components in the `stateSanMovesTable` and `stateHistoryButtons` parameters, respectively. The `back` key-value pair, which indicates which one of the FEN positions is currently displayed, also needs to be passed.

```js
import { HistoryButtons, SanMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -",
  ];

  return (
    <>
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          // Implement on fast rewind logic.
        }}
        onSkipPreviousClick={() => {
          // Implement on skip previous logic.
        }}
        onSkipNextClick={() => {
          // Implement on skip next logic.
        }}
        onFastForwardClick={() => {
          // Implement on fast forward logic.
        }}
      />
      <SanMovesTable
        stateSanMovesTable={{
          back: back,
          fen: fen,
          movetext: "1.d4 Nf6 2.c4 e6 3.Qb3",
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
    </>
  );
}

export default App;
```

![Figure 3](/assets/figure_03.png)

🎉 Well done! This example basically displays the components. Note that no interaction is implemented in the on click functions yet.

Alternatively, the `SanMovesInline` component can be used to display the chess moves in a single paragraph rather than in a scrollable table which may be more suitable for mobile devices.

- `stateSanMovesInline` represents the state of the component.
- `onSpanClick` allows to implement on span click logic.

![Figure 4](/assets/figure_04.png)

With everything explained so far, let's now implement some user interactions and have them change the state. This is how to combine the `ClassicalBoard`, `HistoryButtons` and `SanMovesInline` components to allow browsing the moves of a specific opening: The Nimzo-Indian Defense.

```js
import { useState } from 'react';
import {
  ClassicalBoard,
  HistoryButtons,
  SanMovesInline
} from '@chesslablab/reactblab';

function App() {
  const [back, setBack] = useState(0);

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -",
    "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -",
    "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq -",
  ];

  const movetext = "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2";

  return (
    <>
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          setBack((fen.length - 1) * -1);
        }}
        onSkipPreviousClick={() => {
          setBack(prev => prev - 1);
        }}
        onSkipNextClick={() => {
          setBack(prev => prev + 1);
        }}
        onFastForwardClick={() => {
          setBack(0);
        }}
      />
      <ClassicalBoard
        stateBoard={{
          fen: fen[fen.length - 1 + back],
          isCheck: false,
          flip: "w",
        }}
      />
      <SanMovesInline
        stateSanMovesInline={{
          back: back,
          fen: fen,
          movetext: movetext,
        }}
        onSpanClick={(payload) => {
          setBack((payload.back) * -1);
        }}
      />
    </>
  );
}

export default App;
```

![Figure 5](/assets/figure_05.gif)

🎉 Congrats! Clicking on the arrow buttons in the `HistoryButtons` component allows to go back and forward accordingly. The same thing goes if clicking on any chess move in the `SanMovesInline` component.

#### Encyclopedia of Chess Openings (ECO)

Chess openings can easily be imported into your app as an array of JavaScript objects.

```js
import { openings } from '@chesslablab/reactblab';
```

```js
[
  {
    "eco": "A00",
    "name": "Amar Gambit",
    "movetext": "1.Nh3 d5 2.g3 e5 3.f4 Bxh3 4.Bxh3 exf4"
  },
  {
    "eco": "A00",
    "name": "Amar Opening",
    "movetext": "1.Nh3"
  },
  ...
  {
    "eco": "E99",
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Benko Attack",
    "movetext": "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.g4"
  },
  {
    "eco": "E99",
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Traditional Line",
    "movetext": "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5"
  }
];
```

The `OpeningTable` component can be helpful to display the chess opening that is being played at a certain point.

- `stateOpeningTable` represents the state of the component.

An array of FEN strings representing the history of moves is passed as a prop to the `stateOpeningTable` parameter. The `opening` key-value pair, which is a JSON object with information about the chess opening, also needs to be passed.

```js
import {
  HistoryButtons,
  OpeningTable,
  SanMovesTable
} from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -",
  ];

  const movetext = "1.d4 Nf6 2.c4 e6 3.Qb3";

  const opening = {
    rows: [
      {
        eco: "E00",
        name: "Indian Defense",
        movetext: "1.d4 Nf6 2.c4 e6 3.Qb3",
      },
    ],
  };

  return (
    <>
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          // Implement on fast rewind logic.
        }}
        onSkipPreviousClick={() => {
          // Implement on skip previous logic.
        }}
        onSkipNextClick={() => {
          // Implement on skip next logic.
        }}
        onFastForwardClick={() => {
          // Implement on fast forward logic.
        }}
      />
      <SanMovesTable
        stateSanMovesTable={{
          back: back,
          fen: fen,
          movetext: movetext,
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
      <OpeningTable
        stateOpeningTable={{
          opening: opening,
          fen: fen,
        }}
      />
    </>
  );
}

export default App;
```

![Figure 6](/assets/figure_06.png)

🎉 Well done! This example basically displays the components. Note that no interaction is implemented in the on click functions.

#### Metadata About the Chess Game Being Played

Descriptive metadata or metainformation is data that describes other data. The `MovesMetadataTable` component can be used to display data about a particular game as it is shown in the following example.

```js
import {
  HistoryButtons,
  MovesMetadataTable,
  OpeningTable,
  SanMovesTable
} from '@chesslablab/reactblab';

function App() {
  const metadata = {
    "Event": "World Championship 28th",
    "Site":"Reykjavik",
    "Date":"1972.??.??",
    "White":"Spassky, Boris V",
    "Black":"Fischer, Robert James",
    "White ELO":"2660",
    "Black ELO":"2785",
    "Result":"1-0",
    "ECO":"B97",
  };

  const back = 0;

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3",
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6",
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -",
    "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -",
    "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3",
    "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -",
    "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -",
    "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -",
    "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -",
    "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -",
    "rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq -",
    "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq -",
    "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq f3",
    "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq -",
    "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPPQ2PP/R3KB1R b KQkq -",
  ];

  const movetext = "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6";

  const opening = {
    rows: [
      {
        eco: "B97",
        name: "Sicilian Defense: Najdorf Variation, Poisoned Pawn Variation",
        movetext: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6",
      },
    ],
  };

  return (
    <>
      <MovesMetadataTable
        stateMovesMetadataTable={{
          metadata: metadata,
        }}
      />
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          // Implement on fast rewind logic.
        }}
        onSkipPreviousClick={() => {
          // Implement on skip previous logic.
        }}
        onSkipNextClick={() => {
          // Implement on skip next logic.
        }}
        onFastForwardClick={() => {
          // Implement on fast forward logic.
        }}
      />
      <SanMovesTable
        stateSanMovesTable={{
          back: back,
          fen: fen,
          movetext: movetext,
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
      <OpeningTable
        stateOpeningTable={{
          opening: opening,
          fen: fen,
        }}
      />
    </>
  );
}

export default App;
```

![Figure 7](/assets/figure_07.png)

#### Initialize a RAV Reader

Annotated games are games with comments that help understand what is going on the chessboard. They usually include variations showing the development of the game in selected positions that require an in-depth understanding. RAV stands for Recursive Annotation Variation. It is the standard format for annotated chess games.

The `HistoryButtons` and `RavMovesTable` components can be combined to allow browsing the history of RAV moves.

- `stateRavMovesTable` represents the state of the component.
- `onCellClick` allows to implement on cell click logic.

The `filtered`, `breakdown` and `fen` key-value pairs must be passed to the `RavMovesTable` component in the `stateRavMovesTable` prop. These values have been calculated using the [POST /play/rav](https://chess-api.readthedocs.io/en/latest/post-play-rav/) endpoint as it is documented in [Read RAV](https://php-chess.readthedocs.io/en/latest/read-rav/). The `back` key-value pair, which indicates which one of the FEN positions is currently displayed, also needs to be passed.

```js
import { HistoryButtons, RavMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const filtered = "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 c6 8.Qc2 c5 {is not a recommended move.} 9.Rd1 (9.cxd5 {would have been proper to continue.}) 9...Qa5 10.cxd5 Nxd5 11.Bxe7 Nxe7 12.Bd3 Nf6 13.O-O cxd4 14.Nxd4 (14.exd4 {was the alternative. It would have left, however, to a very difficult game where, in exchange for the attack, White would remain with an isolated queen\u0027s pawn; leading at this stage of the match by one point, I did not want to take any risks.}) 14...Bd7 15.Ne4 Ned5 16.Nb3 Qd8 17.Nxf6+ Nxf6 18.Qc5 Qb6 {neutralizes whatever little advantage White might have had. The draw is now insight.} 19.Rc1 Rfc8 20.Qxb6 axb6 21.Rxc8+ Rxc8 22.Rc1 Rxc1+ 23.Nxc1 Kf8";

  const breakdown = [
    "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 c6 8.Qc2 c5 {is not a recommended move.} 9.Rd1",
    "9.cxd5 {would have been proper to continue.}",
    "9...Qa5 10.cxd5 Nxd5 11.Bxe7 Nxe7 12.Bd3 Nf6 13.O-O cxd4 14.Nxd4",
    "14.exd4 {was the alternative. It would have left, however, to a very difficult game where, in exchange for the attack, White would remain with an isolated queen\u0027s pawn; leading at this stage of the match by one point, I did not want to take any risks.}",
    "14...Bd7 15.Ne4 Ned5 16.Nb3 Qd8 17.Nxf6+ Nxf6 18.Qc5 Qb6 {neutralizes whatever little advantage White might have had. The draw is now insight.} 19.Rc1 Rfc8 20.Qxb6 axb6 21.Rxc8+ Rxc8 22.Rc1 Rxc1+ 23.Nxc1 Kf8"
  ];

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6",
    "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -",
    "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -",
    "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq c3",
    "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -",
    "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq -",
    "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq -",
    "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R b KQkq -",
    "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R w KQkq -",
    "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq -",
    "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ -",
    "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K -",
    "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K -",
    "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R b K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pp2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R w K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pp2B1/2PP4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R b KQ -",
    "r1b2rk1/pp1nbppp/4pn2/q1pp2B1/2PP4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nbppp/4pn2/q1pP2B1/3P4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1b2rk1/pp1nbppp/4p3/q1pn2B1/3P4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nBppp/4p3/q1pn4/3P4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1b2rk1/pp1nnppp/4p3/q1p5/3P4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nnppp/4p3/q1p5/3P4/2NBPN2/PPQ2PPP/3RK2R b K -",
    "r1b2rk1/pp2nppp/4pn2/q1p5/3P4/2NBPN2/PPQ2PPP/3RK2R w K -",
    "r1b2rk1/pp2nppp/4pn2/q1p5/3P4/2NBPN2/PPQ2PPP/3R1RK1 b - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3p4/2NBPN2/PPQ2PPP/3R1RK1 w - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3N4/2NBP3/PPQ2PPP/3R1RK1 b - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3P4/2NB1N2/PPQ2PPP/3R1RK1 b - -",
    "r4rk1/pp1bnppp/4pn2/q7/3N4/2NBP3/PPQ2PPP/3R1RK1 w - -",
    "r4rk1/pp1bnppp/4pn2/q7/3NN3/3BP3/PPQ2PPP/3R1RK1 b - -",
    "r4rk1/pp1b1ppp/4pn2/q2n4/3NN3/3BP3/PPQ2PPP/3R1RK1 w - -",
    "r4rk1/pp1b1ppp/4pn2/q2n4/4N3/1N1BP3/PPQ2PPP/3R1RK1 b - -",
    "r2q1rk1/pp1b1ppp/4pn2/3n4/4N3/1N1BP3/PPQ2PPP/3R1RK1 w - -",
    "r2q1rk1/pp1b1ppp/4pN2/3n4/8/1N1BP3/PPQ2PPP/3R1RK1 b - -",
    "r2q1rk1/pp1b1ppp/4pn2/8/8/1N1BP3/PPQ2PPP/3R1RK1 w - -",
    "r2q1rk1/pp1b1ppp/4pn2/2Q5/8/1N1BP3/PP3PPP/3R1RK1 b - -",
    "r4rk1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/3R1RK1 w - -",
    "r4rk1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/2R2RK1 b - -",
    "r1r3k1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/2R2RK1 w - -",
    "r1r3k1/pp1b1ppp/1Q2pn2/8/8/1N1BP3/PP3PPP/2R2RK1 b - -",
    "r1r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2R2RK1 w - -",
    "r1R3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/5RK1 b - -",
    "2r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/5RK1 w - -",
    "2r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2R3K1 b - -",
    "6k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2r3K1 w - -",
    "6k1/1p1b1ppp/1p2pn2/8/8/3BP3/PP3PPP/2N3K1 b - -",
    "5k2/1p1b1ppp/1p2pn2/8/8/3BP3/PP3PPP/2N3K1 w - -"
  ];

  return (
    <>
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          // Implement on fast rewind logic.
        }}
        onSkipPreviousClick={() => {
          // Implement on skip previous logic.
        }}
        onSkipNextClick={() => {
          // Implement on skip next logic.
        }}
        onFastForwardClick={() => {
          // Implement on fast forward logic.
        }}
      />
      <RavMovesTable
        stateRavMovesTable={{
          back: back,
          filtered: filtered,
          breakdown: breakdown,
          fen: fen,
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
    </>
  );
}

export default App;
```

![Figure 8](/assets/figure_08.png)

The RAV reader displays the variation levels in different shades of gray. It is a 2D scrollable HTML table where the main line is shown in a white background color. The deeper the level, the darker the background color is displayed.

Alternatively, the `RavMovesInline` component can be used to display the chess moves in a single paragraph rather than in a scrollable table which may be more suitable for mobile devices.

- `stateRavMovesInline` represents the state of the component.
- `onSpanClick` allows to implement on span click logic.

![Figure 9](/assets/figure_09.png)

### Contributions

See the [contributing guidelines](https://github.com/chesslablab/reactblab/blob/master/CONTRIBUTING.md).

Happy learning and coding!

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
