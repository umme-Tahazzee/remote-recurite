import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav
      aria-label="Primary navigation"
      className="absolute top-0 left-0 right-0 w-full z-50 transition-all duration-500 px-2"
    >
      <div className='flex justify-between items-center px-8 py-4'>
        <div>
          <img src={logo} alt="Logo" className='h-10 w-auto' />
        </div>

        <div className='flex gap-8 items-center'>
          <button className='text-white hover:opacity-80 transition'>Sign In</button>
          <button className='bg-primary  text-white px-4 py-2 rounded-full cursor-pointer
          hover:bg-opacity-10 transition '>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar