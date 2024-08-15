
interface AsideBarProps {
    path: string
    alt: string
}

export function AsideBarIcon({path, alt} : AsideBarProps) {
    return (
        <img src={path} alt={alt} className="w-[24px] h-[24px]"/>
    )
}