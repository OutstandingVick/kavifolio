import React from 'react';

const Home = () => {
  return (
    <div className='bg-oxford w-full h-full overflow-hidden bg-british'>
      <div className='rounded-3xl bg-spring m-5 lg:m-10 text-british h-full'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 py-6 lg:py-12 px-10 lg:px-20 gap-2'>
          <div className='lg:text-4xl font-rubik font-bold pt-5 lg:pt-10 pb-2 lg:pb-32'>
            <h1 className='pb-1 lg:pb-2'>My name is Cyprian Michael</h1>
            <h1 className='pb-1 lg:pb-2'>Mmetchie. I'm a community </h1>
            <h1 className='pb-1 lg:pb-2'>manager and a Blockchain</h1>
            <h1 className='pb-0 lg:pb-2'>Tester. I live in Nigeria.</h1>
          </div>
          <div className='h-full font-orbitron pt-2 lg:pt-10 font-bold lg:text-2xl pb-4 lg:pb-32'>
            <p className='pb-1'>
              I help web3 projects to build solid communities
            </p>
            <p className='pb-1 lg:pb-4'>that will become loyal users</p>
            <br />
            <div className='gap-6 flex pl-12'>
              <div>
                <button className='pr-2 lg:pr-8'>
                  <a href='https://x.com/kavishan25?t=Y76GeMMjTDiNbqmXDudBqA&s=09'>
                    Twitter
                  </a>
                </button>
                <button>
                  <a href='https://www.t.me/kavishan101'>Telegram</a>
                </button>
              </div>
            </div>
          </div>
          <div className='rounded-lg overflow-hidden'>
            <img
              src={`${process.env.PUBLIC_URL}/img/Profile.jpg`}
              alt='Kavishan'
              className='object-cover bg-lapis'
            />
          </div>
          <div className='h-full font-orbitron'>
            <h3 className='font-bold lg:text-3xl pb-2'>Core</h3>
            <p className='lg:text-2xl font-poiret pb-2 font-semibold'>
              As a community Manager and Blockchain/Product Tester,
            </p>
            <p className='lg:text-2xl font-poiret pb-2 font-semibold'>
              I manage web3 communities and love to test new products
            </p>
            <p className='lg:text-2xl font-poiret pb-2 font-semibold'>
              and Blockchain which solve reality problems in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
