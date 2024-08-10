
import React from 'react';
import getServerLanguage from "@src/ultils/getServerLanguage";
import {Item, Root, Trigger, Content} from '@radix-ui/react-accordion';

const Question = () => {
    const language = getServerLanguage();
    return (
        <Root
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full"
        >
            <Item value="q-1">
                <Trigger className="block w-full text-left border outline-none">
                    What is your primary goal in obtaining a Vanuatu citizenship?
                </Trigger>
                <Content>
                    1222222
                </Content>
            </Item>

        </Root>
    );
};

export default Question;