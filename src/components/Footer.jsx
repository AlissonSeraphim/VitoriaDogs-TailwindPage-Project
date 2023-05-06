function Footer() {

  return (
    <footer
      className="mx-auto max-w-screen-xl px-4 md:px-8 p-8 ">
      <div className="container p-6 w-full bg-gradient-to-r from-secondary via-primary to-tertiary animate-pulse rounded-2xl">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-6 lg:mb-0 object-fill">
            <img
              src="https://i.ibb.co/P1hkhhB/dog1.jpg"
              className="w-full rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://i.ibb.co/DL8Hpxx/dog2.jpg"
              className="scale-75 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://i.ibb.co/4ZNv0V2/dog3.jpg"
              className="w-full rounded-md shadow-lg" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://i.ibb.co/0f5XckF/dog4.jpg"
              className="scale-75 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://i.ibb.co/kxcr1Rz/dog5.jpg"
              className=" scale-95 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://i.ibb.co/dgpwVkP/dog6.jpg"
              className="scale-75 rounded-md shadow-lg hidden md:block" />
          </div>
        </div>
      </div>
      <div
        className="bg-neutral-300 p-4 text-center text-primary">
        © 2023 Developed by: &nbsp;
        <a className="text-tertiary hover:text-secondary" href="https://www.linkedin.com/in/alissontassi/"
          >Alisson Tassi</a
        >
      </div>
    </footer>
  )
}

export default Footer;
