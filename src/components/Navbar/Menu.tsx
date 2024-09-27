import {
  ArrowDownIcon,
  ArrowUpIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import mainSongTheme from '../../assets/musics/pong_main_theme.wav'
import { useRunningGame } from '../../context/RunningGameContext'
import React from '../Icons/React'
import Tailwind from '../Icons/Tailwind'
import TypeScript from '../Icons/TypeScript'
import Vite from '../Icons/Vite'

function Menu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}) {
  const { gameRunning } = useRunningGame()

  const [volume, setVolume] = useState(0.5)
  const [music] = useState(new Audio(mainSongTheme))
  music.loop = true

  useEffect(() => {
    if (gameRunning) music.play()
    else music.pause()
  }, [gameRunning, music])

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value))
  }

  useEffect(() => {
    music.volume = volume
  }, [volume, music])

  return (
    <div className={`menu ${menuOpen ? 'show' : 'hide'}`}>
      <div className="relative mx-auto flex w-[600px] flex-col gap-8 pt-8 text-start">
        <button
          type="button"
          aria-label="Close settings"
          className="btn mb-6 ms-auto"
          onClick={() => setMenuOpen(false)}
        >
          <XMarkIcon className="size-6" />
        </button>

        <h2>Settings</h2>

        <ColItem title="Music volume">
          <audio src={mainSongTheme} />
          <div className="flex gap-4">
            <div className="flex w-full flex-col gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full"
              />
              <div className="flex w-full justify-between">
                <SpeakerXMarkIcon className="size-6" />
                <SpeakerWaveIcon className="size-6" />
              </div>
            </div>
            <span className="block text-start">
              {(volume * 100).toFixed(0)}%
            </span>
          </div>
        </ColItem>

        <ColItem title="Controls">
          <div className="flex h-full items-center gap-8">
            <span>Player 1</span>
            <span className="h-8 w-[2px] bg-[#ffffff20]"> </span>
            <span>W</span>
            <span>S</span>
          </div>

          <div className="flex h-full items-center gap-8">
            <span>Player 2</span>
            <span className="h-8 w-[2px] bg-[#ffffff20]"> </span>
            <ArrowUpIcon className="size-4" />
            <ArrowDownIcon className="size-4" />
          </div>
        </ColItem>

        <ColItem title="Credits">
          <div className="flex flex-col gap-1">
            <span className="text-[#ffffff60]">About</span>
            <span>A remake of the classic ATARI Pong game</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[#ffffff60]">Made by</span>
            <span>Laerte Quinui</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[#ffffff60]">Tecnologies</span>
            <div className="flex gap-4">
              <BtnLink link="https://react.dev/" label="Open React site">
                <React />
              </BtnLink>

              <BtnLink
                link="https://www.typescriptlang.org/"
                label="Open TypeScript site"
              >
                <TypeScript />
              </BtnLink>

              <BtnLink
                link="https://tailwindcss.com/"
                label="Open Tailwindcss site"
              >
                <Tailwind />
              </BtnLink>

              <BtnLink link="https://vitejs.dev/" label="Open Vite site">
                <Vite />
              </BtnLink>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[#ffffff60]">Music by</span>
            <span>Laerte Quinui</span>
            <span className="text-xs font-thin opacity-80">
              © 2024 Laerte Quinui all rights reserved
            </span>
          </div>
        </ColItem>
      </div>
    </div>
  )
}

const ColItem = ({
  title,
  children,
}: {
  title: string
  children: JSX.Element[] | JSX.Element
}) => {
  return (
    <div className="flex w-1/2 flex-col justify-start gap-4 text-start">
      <h3 className="mb-2">{title}</h3>
      {children}
    </div>
  )
}

const BtnLink = ({
  link,
  label,
  children,
}: {
  link: string
  label: string
  children: JSX.Element
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      type="button"
      className="btn"
      aria-label={label}
    >
      {children}
    </a>
  )
}

export default Menu
