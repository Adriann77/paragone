'use client'
import React, { useEffect, useState } from 'react'
import MonthlySpendingsDiagram from '../MonthlySpendingsDiagram/MonthlySpendingsDiagram'
import CurrentSaldo from '../CurrentSaldo/CurrentSaldo'
import { getTotalSpent } from '@/app/actions/receiptActions'
import NoReceiptState from './NoReceiptState'
import Loader from '../Loader/Loader'

const Homepage = () => {
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    async function fetchTotal() {
      try {
        const totalSpent = await getTotalSpent()
        setTotal(totalSpent)
      } catch (error) {
        console.error('Error fetching total spent:', error)
      }
    }
    fetchTotal()
  }, [])

  if (total === 0) {
    return (
      <div>
        <NoReceiptState />
      </div>
    )
  }
  if (total === null) {
    return <Loader />
  }

  return (
    <div>
      <CurrentSaldo />
      <MonthlySpendingsDiagram />
    </div>
  )
}

export default Homepage
