import { Ascii } from './common/Ascii';
import * as SvgPiece from './piece/SvgPiece';
import AlgebraicNotation from './AlgebraicNotation';
import styles from './styles/board';

const Squares = ({ stateBoard, filterMove, handleMove, style }) => {
  const sqs = () => {
    const ascii = Ascii.toAscii(stateBoard.fen[0]);

    return Ascii.flip(
      stateBoard.flip,
      ascii
    ).map((rank, i) => {
      return rank.map((piece, j) => {
        let payload = { piece: piece };
        let color = (i + j) % 2 !== 0 ? 'b' : 'w';
        stateBoard.flip === 'w'
          ? payload = {
              ...payload,
              i: i,
              j: j,
              sq: Ascii.fromIndexToAlgebraic(i, j, stateBoard.size)
            }
          : payload = {
            ...payload,
            i: stateBoard.size.ranks - 1 - i,
            j: stateBoard.size.files - 1 - j,
            sq: Ascii.fromIndexToAlgebraic(
              stateBoard.size.ranks - 1 - i,
              stateBoard.size.files - 1 - j,
              stateBoard.size
            )
          };

        return <div
          key={payload.sq}
          style={{
            ...styles.sq,
            ...styles[color],
            ...styles[isLegal(payload)],
            ...styles[isSelected(payload)],
            ...styles[isCheck(payload)],
          }}
          className={[
              'sq',
              payload.sq,
            ].join(' ')
          }
          onMouseDown={() => {
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: stateBoard?.pieceGrabbed?.ascii,
              };
              handleMove(payload);
            }
          }}
          onMouseUp={(ev) => {
            ev.preventDefault();
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: stateBoard?.pieceGrabbed?.ascii,
              };
              handleMove(payload);
            }
          }}
          onDragOver={(ev) => {
            ev.preventDefault();
          }}>
            <SvgPiece.Svg
              piece={piece}
            />
            <AlgebraicNotation props={stateBoard} payload={payload} />
        </div>
      });
    });
  }

  const isSelected = (payload) => {
    const className = 'isSelected';
    if (stateBoard.pieceGrabbed?.sq === payload.sq) {
      return className;
    }

    return '';
  }

  const isLegal = (payload) => {
    const className = 'isLegal';
    if (stateBoard.pieceGrabbed?.fen?.hasOwnProperty(payload.sq)) {
      return className;
    }

    return '';
  }

  const isCheck = (payload) => {
    const className = 'isCheck';
    if (stateBoard.isCheck) {
      if (stateBoard.fen[1] === 'w' && payload.piece === ' K ') {
        return className;
      } else if (stateBoard.fen[1] === 'b' && payload.piece === ' k ') {
        return className;
      }
    }

    return '';
  }

  return (
    <div
      style={{
        ...style,
        ...styles.userSelect,
      }}
    >
      {sqs()}
    </div>
  );
}

export default Squares;
