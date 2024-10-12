import React from 'react'

export const Svg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <defs>
                <symbol id="user" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="9" r="3" />
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5" />
                    </g>
                </symbol>

                <symbol id="pet" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 9.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5m3-4.5c.552 0 1-.672 1-1.5S5.052 2 4.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m5 0c.552 0 1-.672 1-1.5S10.052 2 9.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m3 4.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5M10 10c0 1.38-1.62 2-3 2s-3-.62-3-2s1-3.5 3-3.5s3 2.12 3 3.5" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="shopping-bag" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z" />
                        <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                        <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v4m8-4v4m-4-4v4" />
                    </g>
                </symbol>
            </defs>
        </svg>
    )
}
