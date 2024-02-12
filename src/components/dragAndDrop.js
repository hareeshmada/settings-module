import React, { useState } from 'react'
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd';

const DATA = [
    {
      id: "kdfjsklj",
      name: "Walmart",
      items: [
        { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
        { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
      ],
      tint: 1,
    },
    {
      id: "fksljdkfl",
      name: "Indigo",
      items: [
        {
          id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
          name: "Designing Data Intensive Applications",
        },
        { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
      ],
      tint: 2,
    },
    {
      id: "slkdfjflsk",
      name: "Lowes",
      items: [
        { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
        { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
      ],
      tint: 3,
    },
  ];
export const DragAndDrop = () => {
    
     const [stores,setStores]=useState(DATA);
     const handleDrag=(result)=>{
        console.log("yes",result)
        const {source,destination,type}=result;
        if(!destination){
            return;
        }
        if(destination.droppableId===source.droppableId && destination.index===source.index){
            return;
        }
        if(type === 'group'){
            const reorderedStores=[...stores]
        }
     }
  return (
    <div>
        
        <DragDropContext onDragEnd={handleDrag}>
        <div>
            <h1>Shopping list</h1>
        </div>
        <Droppable droppableId='LKJLJK' type='group'>
        {
            (provided)=>{
                return <div {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        stores.map((store,index)=>{
                            return (
                                <Draggable 
                                draggableId={store.id}
                                index={index}
                                key={store.id}
                                >
                                    {
                                        (provided)=>{
                                            return <div
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef} 
                                            >
                                                <h3>{store.name}</h3>
                                        {/* <StoreList {...store}/> */}
                                    </div>
                                        }
                                    }
                                </Draggable>
                            )
                        })
                    }
                    {provided.placeholder}
                </div>
            }

        }
        </Droppable>
        </DragDropContext>
    </div>
  )
}

// const StoreList=({name,items,id})=>{
//     return(
//         <Droppable>
//             {
//                 (provided)=>(
//                     <div {...provided.droppableProps} ref={provided.innerRef}>
//                         <div>
//                             <h3>{name}</h3>
//                         </div>
//                         <div>
//                             {
//                                 items.map((item,index)=>{
//                                     return (
//                                         <Draggable draggableId={item.id} index={index} key={item.id}>
//                                             {
//                                                 (provide)=>(
//                                                     <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
//                                                         <h4 key={`it_${index}`}>{item.name}</h4>
//                                                     </div>
//                                                 )
//                                             }

//                                         </Draggable>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 )
//             }
//         </Droppable>
//     )
// }