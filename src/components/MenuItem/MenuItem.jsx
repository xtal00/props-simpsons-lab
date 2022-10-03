import Links from '../Links/Links'

export default function MenuItem(props) {
    return(
        <li className="trigger">
            <a href="/#">{props.menuName}</a>
            <ul className="submenu">
               <Links linkName={'Hobbies'}/>
               <Links linkName={'Story'}/>
            </ul>
        </li>
        )
    }