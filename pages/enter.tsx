import { signIn, signOut, useSession } from 'next-auth/react';


type enterProps = { propertyTypes };

export default function enter({ properties }: enterProps): JSX.Element {
    const { data: session, status } = useSession();
    const user = session?.user;
    const username = user?.username || 'lowend';
    const loading = status === 'loading';

    return (
        <main>
            {user ? (
                !username ? (
                    <UsernameForm />
                ) : (
                    <SignOutButton />
                )
            ) : (
                <SignInButton />
            )}
        </main>
    );
}

function SignInButton() {
    return (
        <button className="btn-google" onClick={() => signIn('google')}>
            <img src={'/google.png'} alt="Google Logo" /> Sign in with Google
        </button>
    );
}

function SignOutButton() {
    return <button onClick={() => signOut()}>Sign Out</button>;
}

function UsernameForm() {
    return null;
}

