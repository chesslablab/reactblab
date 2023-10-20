import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';
import './index.css';

export const CapablancaBoard = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      stateBoard={stateBoard}
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
      stateBoard={stateBoard}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export * from './common/Ascii';

export * from './piece/SvgPiece';
