import { UserDataContext } from '@/contexts/userDataContext';
import React, { useContext } from 'react'

export default function useUserData() {
  return (
    useContext(UserDataContext)
  )
}
