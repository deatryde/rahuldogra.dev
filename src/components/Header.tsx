import type { ReactElement, FC, MouseEventHandler } from 'react';
import type { ItemInterface, Display } from 'src/constants';
import { useState } from 'react';
import { WebsiteSVG, BurgerSVG } from '../assets';
import { ITEMS } from 'src/constants';

const MenuItem: FC<ItemInterface> = ({ link = '#', name }): ReactElement => {
  return (
    <li>
      <a
        href={link}
        className='block py-2 pr-4 pl-3 rounded hover:bg-rose-600 md:border-0 md:hover:brightness-75 md:p-0  md:hover:bg-transparent'
      >
        {name}
      </a>
    </li>
  );
};

const Header: FC = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState<Display>('hidden');

  const handleMenuClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    setOpenMenu(openMenu === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <header className='px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center'>
        <div className='flex items-center'>
          <WebsiteSVG width='30' height='30' />
          <span className='px-2 self-center text-2xl font-semibold whitespace-nowra'>
            Rahul <span className='text-rose-500'>Dogra</span>
          </span>
        </div>
        <button
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-rose-500 hover:bg-grey-800 focus:ring-rose-600'
          onClick={handleMenuClick}
        >
          <span className='sr-only'>Open main menu</span>
          <BurgerSVG />
        </button>

        <nav className={`w-full md:block md:w-auto ` + openMenu}>
          <ul className='flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:text-white bg-neutral-800 border-red-500'>
            {ITEMS.map((item) => (
              <MenuItem key={item.name} name={item.name} link={item.link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
