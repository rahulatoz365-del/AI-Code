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
import { Brush, ChartNoAxesCombined, Waypoints, House, Sparkles } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const items = [
    {
        title: "Home",
        url: "/",
        icon: House,
        description: "Dashboard"
    },
    {
        title: "WorkSpace", 
        url: "/dashboard",
        icon: Waypoints,
        description: "Create & Edit"
    },
    {
        title: "Designs",
        url: "/designs",
        icon: Brush,
        description: "Your Projects"
    },
    {
        title: "Credits",
        url: "/credits",
        icon: ChartNoAxesCombined,
        description: "Usage & Billing"
    }
]

export function AppSidebar() {
    const path = usePathname();
    
    return (
        <Sidebar className="bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800">
            <SidebarHeader className="border-b border-gray-200 dark:border-slate-800">
                <div className='p-6'>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                            <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                Codrr
                            </h1>
                            <p className='text-xs text-gray-500 dark:text-slate-400'>
                                AI Code Generator
                            </p>
                        </div>
                    </div>
                </div>
            </SidebarHeader>
            
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className='px-3 py-4'>
                            <p className='text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3 px-3'>
                                Navigation
                            </p>
                            
                            <SidebarMenu>
                                {items.map((item, index) => {
                                    const isActive = path === item.url;
                                    return (
                                        <Link 
                                            href={item.url} 
                                            key={index}
                                        >
                                            <div className={`
                                                group relative flex items-center gap-3 px-3 py-2.5 mb-1
                                                rounded-xl transition-all duration-200 cursor-pointer
                                                ${isActive 
                                                    ? 'bg-blue-50 dark:bg-blue-500/10' 
                                                    : 'hover:bg-gray-50 dark:hover:bg-slate-800/50'
                                                }
                                            `}>
                                                <div className={`
                                                    p-2 rounded-lg transition-colors duration-200
                                                    ${isActive 
                                                        ? 'bg-blue-500 text-white' 
                                                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 group-hover:bg-gray-200 dark:group-hover:bg-slate-700'
                                                    }
                                                `}>
                                                    <item.icon className='h-4 w-4' />
                                                </div>
                                                
                                                <div className='flex-1'>
                                                    <p className={`
                                                        text-sm font-medium
                                                        ${isActive 
                                                            ? 'text-blue-600 dark:text-blue-400' 
                                                            : 'text-gray-700 dark:text-slate-300 group-hover:text-gray-900 dark:group-hover:text-white'
                                                        }
                                                    `}>
                                                        {item.title}
                                                    </p>
                                                    <p className='text-xs text-gray-400 dark:text-slate-500'>
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {isActive && (
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                )}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </SidebarMenu>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter className="border-t border-gray-200 dark:border-slate-800">
                <div className="p-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800/50">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            R
                        </div>
                        <div className="flex-1">
                            <p className='text-xs font-medium text-gray-700 dark:text-slate-300'>
                                Developed by 
                            </p>
                            <p className='text-[10px] text-gray-500 dark:text-slate-500'>
                                Rahul Singh
                            </p>
                        </div>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}