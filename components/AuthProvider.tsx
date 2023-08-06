"use client";

import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react'

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

//use next-auth and connect to grafbase
const AuthProvider = () => {
    const [providers, setProviders] = useState<Providers | null>(null)

    if(providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, index) => (
                    <button key={index}>{provider.id}</button>
                ))}
            </div>
        )
    }
    return (
        <div>
            AuthProvider
        </div>
    );
};

export default AuthProvider;