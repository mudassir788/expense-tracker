import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john.doe@email.com",
        memberSince: "Jan 2025",
        avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
        address: "123 Main Street, City, Country",
        phone: "123-456-7890",
    });

    const handleEditProfile = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const address = (form.elements.namedItem("address") as HTMLInputElement).value;
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
        const avatar = (form.elements.namedItem("avatar") as HTMLInputElement).value;

        setProfile({ name, email, memberSince: profile.memberSince, avatar, address, phone });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-6">Profile</h2>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src={profile.avatar} alt="avatar" className="w-24 h-24 rounded-full mb-4" />
                <span className="text-xl font-bold">{profile.name}</span>
                <span className="text-sm text-gray-500">{profile.email}</span>
                <span className="text-sm text-gray-500 mt-2">Member since {profile.memberSince}</span>
                <span className="text-sm text-gray-500 mt-2">{profile.address}</span>
                <span className="text-sm text-gray-500 mt-2">{profile.phone}</span>
            </div>

            {/* Edit Profile Dialog */}
            <div className="flex justify-center mt-10">
                <Dialog>
                    <DialogTrigger>
                        <button className="bg-indigo-700 text-lg font-bold rounded px-6 py-2 shadow-lg  text-white transition-all">
                            Edit Profile
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                                Update your profile information below.
                            </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={handleEditProfile}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={profile.name}
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={profile.email}
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                defaultValue={profile.address}
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                defaultValue={profile.phone}
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="avatar"
                                placeholder="Avatar URL"
                                defaultValue={profile.avatar}
                                className="w-full p-2 border rounded"
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                            >
                                Save
                            </button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}


