function Footer() {

  return (
    <footer
      className="mx-auto max-w-screen-xl px-4 md:px-8 p-8">
      <div className="container p-6 w-full bg-gradient-to-r from-secondary via-primary to-tertiary animate-pulse rounded-2xl">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-6 lg:mb-0 object-fill">
            <img
              src="../src/img/dog1.jpeg"
              className="w-full rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="../src/img/dog2.jpeg"
              className="scale-75 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="../src/img/dog3.jpeg"
              className="w-full rounded-md shadow-lg" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="../src/img/dog4.jpeg"
              className="scale-75 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="../src/img/dog5.jpeg"
              className=" scale-95 rounded-md shadow-lg hidden md:block" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="../src/img/dog6.jpeg"
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
