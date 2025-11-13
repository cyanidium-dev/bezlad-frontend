import { navList } from "./navList";

export default function Navigation() {
    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
                {navList.map(item => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="text-black font-azbuka uppercase text-4 leading-[120%]"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
