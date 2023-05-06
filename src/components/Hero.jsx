function Hero() {

  return (
    <div>
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2-space-x-52 opacity-40 -z-50">
        <div
          className="blur-[100px] h-56 bg-gradient-to-br from-tertiary to-primary z-10"
        />
        <div
          className="blur-[200px] h-32 bg-gradient-to-r from-tertiary to-primary"
        />
      </div>

      <section className="mx-auto max-w-screen-3xl px-4 md:px-8 p-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
            <h1 className="text-tertiary mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Seu pet<br />em boas mãos</h1>

            <p className="max-w-md leading-relaxed text-tertiary xl:text-lg">Cuidadora experiente de cachorros com mais de 7 anos de atuação no mercado, especializada no cuidado de cachorros de todas as raças e tamanhos. Garante o bem-estar e a felicidade dos pets.</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
              <img src="../src/img/vi1.jpeg" loading="lazy" alt="foto vitoria e dog1" className="h-full w-full object-cover object-center" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="../src/img/vi2.jpeg" loading="lazy" alt="Foto vitoria e dog2" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;