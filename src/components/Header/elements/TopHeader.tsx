"use client"
import React, {FC} from 'react';
import Container from "@src/components/Container";
import getClientCookieLanguage from "@src/ultils/getClientCookieLanguage";
import {Root, Trigger, Content, Item} from '@radix-ui/react-dropdown-menu';

const TopHeader: FC = (props) => {
    const language = getClientCookieLanguage();
    console.log(language)
    return (
        <Container className="bg-primary flex justify-between items-center">
            <h2 className="py-2.5 text-sm leading-3.5 font-medium text-white">Government Designated Agent</h2>
            <Root>
                <Trigger asChild={true}>
                    <button
                        className="outline-none text-zinc-200 flex items-center space-x-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                        <span className="text-sm">
                        {
                            language === "vi" ? "Tiếng Việt" : "English"
                        }
                    </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path
                                fillRule="evenodd"
                                d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                </Trigger>
                <Content
                    side="bottom"
                    align="end"
                    className="bg-white mt-2 py-2 rounded border"
                    style={

                    {
                        minWidth: "var(--radix-popper-anchor-width)"
                    }
                    }
                >
                    <Item data-link-active={language === "vi"} className="outline-none cursor-pointer px-2 data-link-active:text-white data-link-active:bg-primary">
                         Tiếng Việt
                    </Item>
                    <Item data-link-active={language === "en"} className="outline-none cursor-pointer px-2 data-link-active:text-white data-link-active:bg-primary">
                        English
                    </Item>
                </Content>

            </Root>
        </Container>
    );
};

export default TopHeader;