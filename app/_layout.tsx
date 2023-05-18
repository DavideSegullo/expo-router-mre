import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/private')
    }, [])

    return <Slot />
}