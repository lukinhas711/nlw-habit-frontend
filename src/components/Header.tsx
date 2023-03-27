import headerIcon from '../assets/logo.svg'
import { Plus } from 'phosphor-react'

export function Header() {
  return (
    <nav className='w-full max-w-3xl mx-auto flex justify-between items-center'>
      <img src={headerIcon} alt="logo" />
      <button 
        type='button'
        className='border border-violet-500 rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-300 duration-300'
      >
        <Plus size={20} className='text-violet-500' />
        Criar Hábito
        </button>
    </nav>
  )
}