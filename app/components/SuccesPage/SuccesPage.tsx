'use client'
import Link from 'next/link'
import React from 'react'

import { ReceiptAddSucces } from '../Icons/LargerImages'

const SuccesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-center text-4xl">Paragon dodany</h3>

      <div className="py-16">
        <ReceiptAddSucces />
      </div>

      <div className="flex w-[393px] flex-col gap-3 px-4">
        <Link
          className="button-blue"
          onClick={() => {
            window.location.reload()
          }}
          href={'/dashboard'}
        >
          Chcę dodać kolejny paragon
        </Link>
        <Link className="button-white" href={'/homepage'}>
          Wróć do moich statystyk
        </Link>
      </div>
    </div>
  )
}

export default SuccesPage
