import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"
import {Brush,ChartNoAxesCombined , Waypoints,House} from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Home",
        url: "/",
        icon: House,
    },
    {
        title: "WorkSpace",
        url: "/dashboard",
        icon: Waypoints,
    },
    {
        title: "Design",
        url: "/designs",
        icon: Brush,
    },
    {
        title: "Credits",
        url: "/credits",
        icon: ChartNoAxesCombined,
    }
]

export function AppSidebar() {
    const path=usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                    <div className='p-4 flex flex-col items-center'>
                    <div className="flex items-center gap-3 mb-2">
                        <Image 
                            src={'/logo.svg'} 
                            alt="logo" 
                            width={50} 
                            height={50}
                            className="transition-transform hover:rotate-12 duration-300"
                        />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F33052] to-[#ff6b8a] bg-clip-text text-transparent">
                            Codrr
                            <span className="text-[10px] ml-1 bg-[#F33052] text-white px-1.5 py-0.5 rounded-full align-super">
                                v1.0
                            </span>
                        </h1>
                    </div>
                    <h2 className='text-sm text-gray-400 text-center mt-1 italic'>
                        Build Awesome
                    </h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${path === item.url && 'bg-gray-200'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm'>© {new Date().getFullYear()} Codrr. All rights reserved.(By Rahul Singh)</h2>
            </SidebarFooter>
        </Sidebar>
    )
}