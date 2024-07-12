import Container from "@src/components/Container";
import {Member} from "@src/database/models";
import React from 'react';

const Team = async () => {
    const members = await Member.findAll()
    return (

        <Container className="space-y-20">
            <div className="w-fit mx-auto">
                <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
                <p>Meet our team Of professionals to serve you</p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {
                    members.map(
                        (member) => (
                            <li
                                key={member.id}
                                className="space-y-2"
                            >
                                <img
                                    src={"https://picsum.photos/200"}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 block mx-auto rounded-full"
                                />
                                <div>
                                    <h3 className="text-center font-medium text-lg">{member.name}</h3>
                                    <p className="text-center text-sm">{member.role}</p>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        </Container>
    );
};

export default Team;