import Image from "next/image";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-primary'>
      <div
        className='flex flex-col max-h-[50vh] w-[90vw] 
     md:w-80 lg:w-96 rounded-2xl shadow-2xl bg-white divide-y
      overflow-hidden'
      >
        <div className='w-full h-32 relative'>
          <Image
            priority
            layout='fill'
            className='object-cover '
            src='/images/bg-pattern-card.svg'
            alt='bg'
          />
        </div>

        <div className='flex flex-col items-center justify-between relative '>
          <Image
            width={100}
            height={100}
            className='object-contain rounded-[50%] border-4 border-white absolute -top-[50px]'
            src='/images/image-victor.jpg'
            alt='bg'
          />
          <div className='space-x-3 inline-flex mt-[70px]'>
            <p>Victor Crest</p>
            <p className='opacity-50'>26</p>
          </div>
          <p className='opacity-50 text-xs mt-2 mb-6'>London</p>
        </div>
        <div className='flex justify-between py-4 px-4 md:px-12'>
          <div className='flex flex-col items-center justify-normal'>
            <p className='text-base font-bold'>80K</p>
            <p className='text-xs opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-normal'>
            <p className='text-base font-bold'>803K</p>
            <p className='text-xs opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-normal'>
            <p className='text-base font-bold'>1.4K</p>
            <p className='text-xs opacity-50'>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
