"use client"

import { themeChange } from "theme-change";
import { useEffect } from "react";

const ChangeTheme = () => {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="fixed bottom-[50px] right-[50px] flex gap-5 ">
      <button className="w-5 h-5 rounded-full border-black border bg-white " data-set-theme="" data-act-class="ACTIVECLASS"></button>
      <button className="w-5 h-5 rounded-full border-black border bg-black " data-set-theme="dark" data-act-class="ACTIVECLASS"></button>
    </div>
  )
}

export default ChangeTheme