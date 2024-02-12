
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {useDroppable} from '@dnd-kit/core';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
    width:200,
    border:'1px solid black',
    height:200
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}



function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

function DraggableItem2(props){
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  return (
    <button ref={setNodeRef} style={style}  {...listeners} {...attributes}>
      item2
    </button>
  );
}

  

function Example() {
  const [parent, setParent] = useState(null);
  const [parent2,setParent2]=useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      {!parent2? <DraggableItem2 id="drag2" >drag2</DraggableItem2>:null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
        {parent === "droppable" ?  <DraggableItem2 id="drag2" >drag2</DraggableItem2>: 'Drop here'}
        {/* <DraggableItem2 id="drag3" >drag3</DraggableItem2> */}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd({over}) {
    console.log(over)
    setParent(over ? over.id : null);
    setParent2(over ? over.id : null)
  }
}

export default Example;
  