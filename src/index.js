import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';
import MovesTable from './MovesTable';

export const CapablancaBoard = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      stateBoard={{
        ...stateBoard,
        ...{
          size: {
            files: 10,
            ranks: 8,
          }
        }
      }}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const ClassicalBoard = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  return (
    <ClassicalSquares
      stateBoard={{
        ...stateBoard,
        ...{
          size: {
            files: 8,
            ranks: 8,
          }
        }
      }}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const MovesBrowser = ({
  stateBoard,
  goBack,
  goTo
}) => {
  return (
    <MovesTable
      stateBoard={stateBoard}
      goBack={goBack}
      goTo={goTo}
    />
  );
}

export * from './common/Ascii';

export * from './piece/SvgPiece';
