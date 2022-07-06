import s from './Menu.module.scss';
import { Menu } from 'antd'

const Sidebar = () => {
    return (
        <div className={s.menu}>
            <Menu>
                <Menu.Item>item 1</Menu.Item>
                <Menu.Item>item 2</Menu.Item>
                <Menu.SubMenu title="sub menu">
                    <Menu.Item>item 3</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
    )
}

export default Sidebar;