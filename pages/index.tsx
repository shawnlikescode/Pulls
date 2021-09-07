import React from 'react';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Loader from '../components/Loader';
import styles from '../styles/globals.scss';
import toast from 'react-hot-toast';

const Home: React.FC<Props> = props => {
    return (
        <div>
            <button onClick={() => toast.success('hello toast')}>
                Toast Mes
            </button>
        </div>
    );
};

export default Home;
