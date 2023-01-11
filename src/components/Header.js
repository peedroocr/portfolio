const Header = () => {

    return (
        <header>
            <nav className="navBar">

                <h2 className="titlePage">Welcome Page</h2>
                <ul >
                    <li><a className="" href="/" >Home</a></li>
                    <li><a className="" href="/" >About me</a></li>
                    <li><a className="" href="/" >Contact</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/pedro-crespillo-romero-499525140/" target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-3 -7 70 70" strokeWidth="3.75" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fillRule="none"></path>
                                <path d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:pedro.crespilloromero@gmail.com" className="svg-mail">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 -1 512 512" strokeWidth="3.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path fill="#666666" fillRule="hover" className="svg-mail" strokeWidth="3.75" d="m462.2 123.5-205.3.5-205.3-1h-.1C23.9 123 2 148.9 2 181.3v271.4C2 485.1 23.9 511 51.5 511h411c27.6 0 49.5-25.9 49.5-58.3V181.3c0-32.4-21.7-57.8-49.8-57.8zm-16.1 40L262.7 331.2l-.7.6-.6.7c-2.2 2.4-4.8 2.7-6.2 2.7-1.4 0-4-.4-6.1-2.9l-.6-.7L73.2 162.7l183.7 1.2 189.2-.4zM462.5 471h-411c-3.5 0-9.5-6.6-9.5-18.3v-265l177.6 171.6c9 10 21.7 15.8 35.2 16h.6c13.3 0 25.7-5.5 34.8-15.1l182-166.6v259.1c-.2 11.7-6.2 18.3-9.7 18.3z" />
                            </svg>   </a>
                    </li>
                </ul>
                {//<a href="#" className="btn">Contact me</a>
                }
            </nav>
        </header>
    );
}
    
export default Header;