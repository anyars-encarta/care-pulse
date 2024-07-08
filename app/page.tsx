import Image from "next/image";

const Home = () => {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image 
            src='/assets/icons/logo-full.svg'
            width={1000}
            height={1000}
            alt="patient"
            className='mb-12 h-10 w-fit'
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
