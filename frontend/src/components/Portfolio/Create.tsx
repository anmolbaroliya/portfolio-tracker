import AvatarSelector from "../AvatarSelector";

export default function Create() {
    return (
        <>
            <div className="flex flex-col border border-gray-500/30 rounded-lg p-4 w-fit">
                <AvatarSelector />
                <input type="text" value="" placeholder="Enter Portfolio Name" className="h-12 rounded-lg min-w-fit mt-6" />
            </div>
        </>
    )
}