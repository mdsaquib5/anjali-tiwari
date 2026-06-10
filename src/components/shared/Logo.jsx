import Link from "next/link";
import { GiAirplaneDeparture } from "react-icons/gi";

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                Anjali <GiAirplaneDeparture />.Tiwari
            </Link>
        </div>
    )
}

export default Logo;