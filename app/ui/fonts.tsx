import { Inter,Lusitana } from 'next/font/google';
import localFont from 'next/font/local'
export const lusitana = localFont({
    src: './Lusitana-Bold.ttf',
    display: 'swap',
})
export const inter = Inter({ subsets: ['latin'] });
