
import worldLogo from "../images/worldLogo.svg"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src={worldLogo} className="navbar--img" alt="logo of the world" />
                <p className="navbar--txt"> my travel journal.</p>
            </nav>
        </>
    )
}