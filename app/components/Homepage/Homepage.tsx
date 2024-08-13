'use client'
import React, { useEffect, useState } from 'react'
import MonthlySpendingsDiagram from '../MonthlySpendingsDiagram/MonthlySpendingsDiagram'
import CurrentSaldo from '../CurrentSaldo/CurrentSaldo'
import { getTotalSpent } from '@/app/actions/receiptActions'
import NoReceiptState from './NoReceiptState'

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
    return (
      <div className="flex flex-col items-center justify-center gap-14 py-14">
        <div className="flex w-52 rotate-180 gap-4">
          <div className="h-42 skeleton w-5"></div>
          <div className="h-50 skeleton w-5"></div>
          <div className="skeleton h-44 w-5"></div>
          <div className="skeleton h-36 w-5"></div>
          <div className="skeleton h-44 w-5"></div>
          <div className="skeleton h-32 w-5"></div>
          <div className="skeleton h-48 w-5"></div>
        </div>
        <div className="skeleton h-52 w-52 rounded-full"></div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-52"></div>
            <div className="skeleton h-4 w-52"></div>
            <div className="skeleton h-4 w-52"></div>
            <div className="skeleton h-4 w-52"></div>
            <div className="skeleton h-4 w-52"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <CurrentSaldo />
      <MonthlySpendingsDiagram />
    </div>
  )
}

export default Homepage
