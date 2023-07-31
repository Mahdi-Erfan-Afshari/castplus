import Link from 'next/link';
import Image from 'next/image'
import Group from '@/app/img/Group.svg'
import Ellipse1 from '@/app/img/Ellipse1.svg'

const Header = () => {
  return (
    <Link href='/' >
      <div className="flex p-6">
          <div className="felx items-center text-lg">
              <div className="absolute top-5 left-28 ms-4 z-0"><Image className="w-9" src={Ellipse1} /></div>
              <h1 className='relative flex items-center text-2xl font-semibold z-10'><Image className="inline-block pe-2" src={Group}/>CastPlus</h1>
          </div>
      </div>
    </Link>
  )
}

export default Header
