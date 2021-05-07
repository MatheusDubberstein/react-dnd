import React from 'react';
import { itemTypes } from '../../Game';
import { useDrag, DragPreviewImage } from 'react-dnd';
import knightImage from './image';

export default function Knight() {
  const [{ isDraging }, drag, preview] = useDrag(() => ({
    type: itemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          opacity: isDraging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        ♘
      </div>
    </>
  );
}
