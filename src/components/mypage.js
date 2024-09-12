'use client'
import React, { useState } from "react";
import useScrollPosition from "./customHooks/useScrollPositionHook";

const MyPage = () => {
    const [pos,setPos]=useState(true);
    const scrollPosition = useScrollPosition();
    
    console.log(scrollPosition);
    const handleDown =()=>{
        alert("you are going down");
        window.scrollTo({top:document.body.scrollHeight, behavior:"smooth"})
    }
    const handleUp =()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
    const obj = {
        value: 42,
        getValue: function() {
          return this.value;
        }
      };
      
      const unboundGetValue = obj.getValue;
    // console.log(unboundGetValue()); // undefined, because 'this' is not bound
      
      const boundGetValue = obj.getValue.bind(obj);
      console.log(boundGetValue()); // 42, because 'this' is bound to 'obj'
      
    
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum
        laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
        praesentium optio, eaque rerum! Provident similique accusantium nemo
        autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
        sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
        aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
        laudantium molestias eos sapiente officiis modi at sunt excepturi expedita
        sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
        laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
        voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
        fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
        deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
        velit hic maxime doloremque. Quaerat provident commodi consectetur veniam
        similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur
        est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia
        maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non
        architecto ab laudantium modi minima sunt esse temporibus sint culpa,
        recusandae aliquam numquam totam ratione voluptas quod exercitationem
        fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui
        corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
        iusto fuga praesentium optio, eaque rerum! Provident similique accusantium
        nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
        architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
        Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
        debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
        fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
        excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
        adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
        rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum
        ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto
        libero magni deleniti quod quam consequuntur! Commodi minima excepturi
        repudiandae velit hic maxime doloremque. Quaerat provident commodi
        consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic
        voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
        excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
        Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
        temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas
        quod exercitationem fuga. Possimus quis earum veniam quasi aliquam
        eligendi, placeat qui corporis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum
        laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
        praesentium optio, eaque rerum! Provident similique accusantium nemo
        autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
        sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
        aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
        laudantium molestias eos sapiente officiis modi at sunt excepturi expedita
        sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
        laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
        voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
        fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
        deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
        velit hic maxime doloremque. Quaerat provident commodi consectetur veniam
        similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur
        est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia
        maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non
        architecto ab laudantium modi minima sunt esse temporibus sint culpa,
        recusandae aliquam numquam totam ratione voluptas quod exercitationem
        fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui
        corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
        iusto fuga praesentium optio, eaque rerum! Provident similique accusantium
        nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
        architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
        Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
        debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
        fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
        excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
        adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
        rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum
        ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto
        libero magni deleniti quod quam consequuntur! Commodi minima excepturi
        repudiandae velit hic maxime doloremque. Quaerat provident commodi
        consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic
        voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
        excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
        Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
        temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas
        quod exercitationem fuga. Possimus quis earum veniam quasi aliquam
        eligendi, placeat qui corporis!
        {
            scrollPosition >200 && <div style={{position:"fixed",top:"50%",left:"50%",backgroundColor:"black",color:"white",border:"2px solid black",width:"200px",transition:"1s ease-in-out"}}>
            you reached!!
        </div>
            
        }
        {
            scrollPosition == 0 && <button onClick={handleDown} style={{position:"fixed",top:"0",right:"0",padding:"10px",backgroundColor:"black",color:"white"}}>go down</button>
        }
        {
            scrollPosition + 800 > document.body.scrollHeight && <button onClick={handleUp} style={{position:"fixed",bottom:"0",right:"0",padding:"10px",backgroundColor:"black",color:"white"}}>go up</button>
        }
      </div>
    );
  };
  
  export default MyPage;