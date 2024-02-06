import { handleLogin } from '../../server/utils/session'

export default function FormLogin() {
  return (
    <form
      className='flex flex-col gap-4'
      action={handleLogin}
    >
      <div className='flex flex-col'>
        <label htmlFor='identificacion'>Numero de identificación</label>
        <input
          type='text'
          placeholder='1006...'
          name='identificacion'
          id='identificacion'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          placeholder='noSoyUnaContraseña...'
          name='password'
          id='password'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
      </div>

      <button
        type='submit'
        className='bg-primary w-max text-black rounded-lg py-2 px-6 hover:bg-primary/60 hover:text-white'
      >
        Iniciar Sesión
      </button>
    </form>
  )
}
