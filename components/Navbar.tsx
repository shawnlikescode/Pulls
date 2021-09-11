import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

type NavbarProps = { propertyTypes };

export default function Navbar({ properties }: NavbarProps): JSX.Element {
    const { data: session, status } = useSession();
    const user = session?.user;
    const username = user?.username || 'lowend';

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">PULLS</button>
                    </Link>
                </li>
                {/* user is signed-in w/ username */}
                {user && username && (
                    <>
                        <li className="left">
                            <Link href="/admin">
                                <button className="btn-black">Sell</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed OR has not created username */}
                {!user && username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
