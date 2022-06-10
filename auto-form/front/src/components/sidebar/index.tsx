import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import listOptionsMenu from "../../utils/sidebar-itens";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Container, Content, Label, ListOption, Logo, Option, OptionSideBar, OptionSubList, SubListOption } from "./style";

const SideBar = () => {
    const [isOpenSubList, setIsOpenSubList] = useState<boolean>(false)
    
    return (
        <Container>
            <Content>
                <Logo>

                </Logo>
                <ListOption>
                    {
                        listOptionsMenu.map((item, index) => {
                            return (
                                <OptionSideBar
                                    key={index}
                                >
                                    {
                                        item.path ?
                                            <Link
                                                to={item.path}
                                                key={item.name}
                                                className='link'
                                            >
                                                <Option>
                                                    <div
                                                        style={{
                                                            width: '70%',
                                                            height: '100%',
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}
                                                    >

                                                        {item.icon}
                                                        <Label>
                                                            {item.name}
                                                        </Label>
                                                    </div>
                                                </Option>
                                            </Link>
                                            :

                                            <OptionSubList
                                                onClick={() => setIsOpenSubList(state => !state)}
                                            >
                                                <div
                                                    style={{
                                                        width: '70%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between'
                                                    }}
                                                >
                                                    <div
                                                        style={{ display: 'flex', alignItems: 'center' }}
                                                    >
                                                        {item.icon}
                                                        <Label>
                                                            {item.name}
                                                        </Label>
                                                    </div>

                                                    {isOpenSubList ?
                                                        <FaChevronUp size={"18px"} color={'#FFF'} />
                                                        :
                                                        <FaChevronDown size={"18px"} color={'#FFF'} />
                                                        
                                                    }

                                                </div>
                                                {
                                                    isOpenSubList && (
                                                        <SubListOption>
                                                            {
                                                                item.subRoutes && (
                                                                    item.subRoutes.map((subRouter) => {
                                                                        return (
                                                                            <Link className="subRouter" to={subRouter.path}>{subRouter.name}</Link>
                                                                        )
                                                                    })
                                                                )
                                                            }
                                                        </SubListOption>
                                                    )
                                                }

                                            </OptionSubList>
                                    }


                                </OptionSideBar>
                            )
                        })
                    }
                </ListOption>
            </Content>
        </Container>
    )
}

export default SideBar