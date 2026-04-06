import React from 'react'
import RegisterBanner from './RegisterBanner'
import UserRegistrationForm from './UserRegistrationForm'

const UserRegisterBody = () => {
    return (
        <main className="w-7xl px-6 py-20 flex justify-center items-center">
            <div className="w-4xl max-w-4xl inline-flex flex-col justify-start items-start gap-12">
                <RegisterBanner />
                <UserRegistrationForm />
            </div>
        </main>
    )
}

export default UserRegisterBody
