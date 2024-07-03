import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? (
                            <div>
                            Your Ethereum balance is: {user?.eth_wallet_balance !== undefined ? user.eth_wallet_balance : 'Balance not available'}
                            </div>
                        ) : (
                            'Please login first'
                        )}
                    </div>
                </div>
            </h2>
        </div>
    )
}
