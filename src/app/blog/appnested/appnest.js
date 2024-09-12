'use client'
import React from 'react'
import useWindowSize from '@/components/customHooks/useWindowSize'
import useScrollPosition from '@/components/customHooks/useScrollPositionHook'
import useIsOnline from '@/components/customHooks/useIsOnline'
import useUserData from '@/components/customHooks/useUserData'

const Appnest = () => {
  const {user, updateUser}=useUserData();
  console.log(user,"userdata");
  const {width, height}=useWindowSize();
  const position=useScrollPosition();
  const isOnline = useIsOnline();
  var color='black';
  var bgcolor='white';
  if(position>0){
    color='white';
    bgcolor='black'
  }
  return (
    <div style={{color:color,backgroundColor:bgcolor}}>Appnest
      <button disabled={!isOnline} style={{background:'green'}}>{isOnline?'Active':'Offline/'}</button>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>useWindowSize Hook: The hook tracks the window's width and height, updating whenever the window is resized.
Usage in MyComponent: When you call useWindowSize, it returns an object containing the current width and height of the window, which you can then use within the component.
This setup will allow you to access and display the current window dimensions in MyComponent, and it will automatically update if the window is resized.</div>
      <div>{width},{height},{position}</div>
    </div>
  )
}
export default Appnest