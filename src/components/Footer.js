import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import logo from "../images/footer.svg"


const Footer = () => {
  return (
    <footer className="bg-slate-800 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <article>
                <img src={logo} alt=""/>
            </article>
            <article>
                <h3 className="text-white text-lg font-bold tracking-wide"> Features</h3>
                <ul>
                    <li className="text-slate-200 text-sm mt-1">Link Shortening</li>
                    <li className="text-slate-200 text-sm mt-1">Branding</li>
                    <li className="text-slate-200 text-sm mt-1">Analytics</li>
                </ul>
            </article>
            <article>
                <h3 className="text-white text-lg font-bold tracking-wide">Resoruces</h3>
                <ul>
                    <li className="text-slate-200 text-sm mt-1">Blog</li>
                    <li className="text-slate-200 text-sm mt-1">For developers</li>
                    <li className="text-slate-200 text-sm mt-1">Support</li>
                </ul>
            </article>
            <article>
                <h3 className="text-white text-lg font-bold tracking-wide">Company</h3>
                <ul>
                    <li className="text-slate-200 text-sm mt-1">About</li>
                    <li className="text-slate-200 text-sm mt-1">Our Team</li>
                    <li className="text-slate-200 text-sm mt-1">Careers</li>
                    <li className="text-slate-200 text-sm mt-1">Contact</li>

                </ul>
            </article>
            <article>
                <ul className="flex items-center space-x-4 ">
                    <li>
                        <img src={instagram} alt=""/>
                    </li>
                    <li>
                        <img src={twitter} alt=""/>
                    </li>
                    <li>
                        <img src={facebook} alt=""/>
                    </li>
                    <li>
                        <img src={pinterest} alt=""/>
                    </li>
                </ul>
            </article>
        </div>
    </footer>

  )
}

export default Footer