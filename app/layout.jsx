import '@styles/globals.css';
import { children } from 'react';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata ={
    title: "Promptopia",
    description:"Share and explore AI Prompts"

}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='App'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout