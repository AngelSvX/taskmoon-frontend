'use client'

import { useAppStore } from "@/app/_store/hooks";
import { DecodedToken } from "../model/types";
import { useRef } from "react";
import { setUserData } from "../model/slice";


export default function UserHydrator({user} : {user : DecodedToken}){
    const store = useAppStore();
    const done = useRef(false);

    if (!done.current){
        store.dispatch(setUserData(user));
        done.current = true;
    }

    return null;
}