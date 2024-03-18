import logo from '../../assets/Logo.svg'


export function NotFound(): JSX.Element {
    return (
        <main className='bg-background bg-cover h-screen flex flex-col justify-center '>
            <figure className='h-1/2 flex justify-center items-center'>
                <img className='h-8 w-8' src={logo} alt={"Logo da empresa"} />
            </figure>

            <section className='h-1/2 flex flex-col justify-start items-center w-full'>
                <p className='text-secondary text-base font-bold'>404</p>
                <h1 className='text-secondary md:text-5xl text-2xl font-extrabold text-center'>Página não encontrada</h1>
            </section>



        </main>
    )
}