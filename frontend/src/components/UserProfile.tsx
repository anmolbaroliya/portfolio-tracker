
type UserProfileProps = {
    user: {
        first_name: string,
        last_name: string,
        email: string,
        image: string
    }
}

export default function UserProfile({ user }: UserProfileProps) {

    return (
        <>
            <div className="flex gap-3 px-4 py-3  items-center">
                <img src={user.image} alt="profile" className="w-9 h-9 rounded-full object-cover" />
                <div className="flex flex-col min-w-0">
                    <div className="flex items-center">
                        <span className="text-white text-sm font-semibold">{user.first_name}  {user.last_name}</span>
                        <span className="ml-1 bg-green-500 rounded-full w-2.5 h-2.5 mt-[2px]" />
                    </div>
                    <span className="text-xs text-gray-400 truncate mt-0.5">{user.email}</span>
                </div>
            </div>
        </>
    )
}